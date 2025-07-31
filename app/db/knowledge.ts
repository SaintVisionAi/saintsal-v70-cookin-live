import { supabase } from '@/lib/supabase'

export async function getKnowledgeByTag(tag: string) {
  const { data, error } = await supabase
    .from('knowledge_base')
    .select('*')
    .ilike('tags', `%${tag}%`)

  if (error) {
    console.error('Failed to fetch knowledge:', error)
    return []
  }

  return data
}

export async function addKnowledgeEntry({
  title,
  content,
  tags,
  createdBy,
}: {
  title: string
  content: string
  tags: string[]
  createdBy: string
}) {
  const { data, error } = await supabase.from('knowledge_base').insert([
    {
      title,
      content,
      tags,
      created_by: createdBy,
    },
  ])

  if (error) {
    console.error('Failed to insert knowledge:', error)
    return null
  }

  return data
}
