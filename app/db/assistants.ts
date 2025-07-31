import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export const getAssistants = async (email: string) => {
  const { data, error } = await supabase
    .from('assistants')
    .select('*')
    .eq('user_email', email)

  if (error) {
    console.error('Error fetching assistants:', error)
    return []
  }

  return data || []
}

export const createAssistant = async (assistant: {
  name: string
  traits: string[]
  avatar?: string
  user_email: string
  role: 'user' | 'pro' | 'admin'
}) => {
  const { data, error } = await supabase
    .from('assistants')
    .insert([assistant])

  if (error) {
    console.error('Error creating assistant:', error)
    return null
  }

  return data?.[0]
}

export const updateAssistant = async (
  id: string,
  updates: { name?: string; traits?: string[]; avatar?: string }
) => {
  const { data, error } = await supabase
    .from('assistants')
    .update(updates)
    .eq('id', id)

  if (error) {
    console.error('Error updating assistant:', error)
    return null
  }

  return data?.[0]
}

export const deleteAssistant = async (id: string) => {
  const { error } = await supabase
    .from('assistants')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting assistant:', error)
    return false
  }

  return true
}

export const getAssistantById = async (id: string) => {
  const { data, error } = await supabase
    .from('assistants')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching assistant by ID:', error)
    return null
  }

  return data
}

export const getPublicAssistants = async () => {
  const { data, error } = await supabase
    .from('assistants')
    .select('*')
    .eq('role', 'pro')

  if (error) {
    console.error('Error fetching public assistants:', error)
    return []
  }

  return data || []
}

