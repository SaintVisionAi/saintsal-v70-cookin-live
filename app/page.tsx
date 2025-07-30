"use client"

import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Chrome, Lock, Menu, X } from "lucide-react"
import Link from "next/link"

// Initialize Builder
builder.init("065997bd13e4442e888a08652fcd61ba")

// Fallback homepage component
const FallbackHomepage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative">
      {/* Header - SaintVisionAI Style Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between min-h-[110px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F4f08aaff66374bf3bd72e740c34ecf44"
              alt="SaintVisionAI™"
              className="w-[52px] h-[52px] opacity-80 filter brightness-110"
            />
            <span className="text-[34px] font-semibold text-white font-sans">
              SaintVisionAI™
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/dashboard"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/console"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              Console
            </Link>
            <Link
              href="/pricing"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              Pricing
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/5"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-[#FACC15] text-black hover:bg-[#FACC15]/90 font-medium">
                Start Cooking
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              <Link href="/dashboard" className="block text-white/70 py-2">
                Dashboard
              </Link>
              <Link href="/console" className="block text-white/70 py-2">
                Console
              </Link>
              <Link href="/pricing" className="block text-white/70 py-2">
                Pricing
              </Link>
              <div className="pt-4 border-t border-white/10 space-y-3">
                <Link href="/login" className="block">
                  <Button variant="ghost" className="w-full text-white/70">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup" className="block">
                  <Button className="w-full bg-[#FACC15] text-black">
                    Start Cooking
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F89f844d10b5e4243a2178ad3de7a9f4f)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F547ecdbc578840e9a4885d464b48018b"
              alt="SaintSal™"
              className="w-[180px] h-[180px] mx-auto mb-6 animate-pulse filter drop-shadow-2xl opacity-70 brightness-125"
            />
          </div>

          {/* Hero Title */}
          <h1 className="text-6xl md:text-8xl mb-4 tracking-tight font-serif prestige-text">
            SaintSal™
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl mb-6 text-[#FACC15] tracking-wide font-serif">
            Cookin' Knowledge
          </p>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            AI doesn't just answer. It adapts. It empowers. It becomes your
            GOTTA GUY™.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/signup">
              <Button className="bg-[#FACC15] text-black hover:bg-[#FACC15]/90 px-8 py-6 text-lg font-medium rounded-xl shadow-2xl shadow-[#FACC15]/20 transition-all duration-300 hover:scale-105">
                Start Cooking Knowledge
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/console">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-xl backdrop-blur-sm"
              >
                Try Console
              </Button>
            </Link>
          </div>

          {/* Bottom Quote */}
          <p className="text-white/60 text-lg italic max-w-2xl mx-auto">
            "Ready to move smarter today than you did yesterday?"
          </p>
        </div>
      </section>

      {/* What We Actually Do For You */}
      <section className="py-16 px-6 relative overflow-hidden divine-card">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-2 text-white font-light font-serif">
              Elite Technology
            </h2>
            <p className="text-[#FACC15] font-semibold text-sm tracking-[0.2em] uppercase">
              ENTERPRISE READY
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Business Strategy */}
            <div className="group p-6 rounded-xl divine-card hover:border-[#FACC15]/30 transition-all duration-300">
              <Brain className="w-10 h-10 text-[#FACC15] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg text-white mb-3 font-semibold">
                Business Strategy
              </h3>
              <p className="text-white/70 text-sm">
                Market analysis, competitive research, and strategic planning
                powered by dual AI engines.
              </p>
            </div>

            {/* CRM Automation */}
            <div className="group p-6 rounded-xl divine-card hover:border-blue-500/30 transition-all duration-300">
              <Chrome className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg text-white mb-3 font-semibold">
                CRM Integration
              </h3>
              <p className="text-white/70 text-sm">
                Seamless contact management, automated follow-ups, and
                intelligent lead scoring.
              </p>
            </div>

            {/* Growth Analytics */}
            <div className="group p-6 rounded-xl divine-card hover:border-green-500/30 transition-all duration-300">
              <Lock className="w-10 h-10 text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg text-white mb-3 font-semibold">
                Growth Analytics
              </h3>
              <p className="text-white/70 text-sm">
                Real-time performance tracking with actionable insights for
                scaling your business.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center">
            <div className="flex justify-center gap-4">
              <Link href="/console">
                <Button className="bg-[#FACC15] text-black hover:bg-[#FACC15]/90 px-8 py-3 font-semibold rounded-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg"
                >
                  View Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F4f08aaff66374bf3bd72e740c34ecf44"
                alt="SaintVisionAI™"
                className="w-8 h-8 opacity-80"
              />
              <span className="text-[#FACC15] text-xl font-semibold">
                SAINTVISIONAI™
              </span>
            </div>

            <p className="text-white/60 text-sm mb-2">
              © 2025 Saint Vision Group LLC. All rights reserved.
            </p>
            <p className="text-white/50 text-xs">
              Built with enterprise-grade security and faith-aligned technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function HomePage() {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const isPreviewing = useIsPreviewing()

  useEffect(() => {
    // Fetch the page content from Builder.io
    builder
      .get("page", {
        url: "/",
        prerender: false
      })
      .promise()
      .then(content => {
        setContent(content)
        setLoading(false)
      })
      .catch(error => {
        console.log("Builder.io content not found, using fallback:", error)
        setLoading(false)
      })
  }, [])

  // Show the BuilderComponent if we have content or are in preview mode
  if (content || isPreviewing) {
    return (
      <BuilderComponent
        model="page"
        content={content}
        apiKey="065997bd13e4442e888a08652fcd61ba"
        renderBlocks={content?.data?.blocks}
      />
    )
  }

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading SaintVisionAI...</p>
        </div>
      </div>
    )
  }

  // Show fallback homepage
  return <FallbackHomepage />
}
