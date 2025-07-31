export interface Character {
  id: string;
  name: string;
  description?: string;
  assistantId: string;
  createdAt: number;
  updatedAt: number;
  avatarUrl?: string;
  systemPrompt?: string;
  temperature?: number;
  voiceId?: string;
  metadata?: Record<string, any>;
}

export const characters: Character[] = [
  {
    id: 'thor',
    name: 'Thor',
    description: 'God of Thunder, protector of Asgard.',
    assistantId: 'asst_thor001',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    avatarUrl: '/avatars/thor.png',
    systemPrompt: 'You are Thor, speak with strength and purpose.',
    temperature: 0.7,
    voiceId: 'voice_thor',
    metadata: {
      realm: 'Asgard',
      weapon: 'Mjolnir',
    },
  },
  {
    id: 'loki',
    name: 'Loki',
    description: 'God of Mischief, master of illusion.',
    assistantId: 'asst_loki001',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    avatarUrl: '/avatars/loki.png',
    systemPrompt: 'You are Loki, cunning and charismatic.',
    temperature: 0.85,
    voiceId: 'voice_loki',
    metadata: {
      realm: 'Asgard',
      specialty: 'Illusion magic',
    },
  },
];
