import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import { auth } from '@clerk/nextjs'

export async function POST(req: NextRequest) {
  const { userId } = auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { title, insights, tags, sendTo } = await req.json()

  try {
    const pdfDoc = await PDFDocument.create()
    const page = pdfDoc.addPage([612, 792])
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const { width, height } = page.getSize()

    const heading = `📊 SaintVision Institute Brief: ${title}`
    page.drawText(heading, {
      x: 50,
      y: height - 50,
      size: 18,
      font,
      color: rgb(0.2, 0.2, 0.2),
    })

    let y = height - 100
    insights.forEach((insight: string, idx: number) => {
      const text = `🧠 Insight ${idx + 1}: ${insight}`
      page.drawText(text, {
        x: 50,
        y: y,
        size: 12,
        font,
        color: rgb(0.1, 0.1, 0.1),
      })
      y -= 30
    })

    const tagsText = `Tags: ${tags.join(', ')}`
    page.drawText(tagsText, {
      x: 50,
      y: 50,
      size: 10,
      font,
      color: rgb(0.5, 0.5, 0.5),
    })

    const pdfBytes = await pdfDoc.save()

    // Optional: add email logic here to sendTo
    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="saintvision-brief.pdf"`,
      },
    })
  } catch (err) {
    console.error('📉 Brief generation error:', err)
    return NextResponse.json({ error: 'Brief generation failed.' }, { status: 500 })
  }
}
