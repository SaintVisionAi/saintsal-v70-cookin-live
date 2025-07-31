export interface Message {
  id: string;
  from: 'user' | 'character';
  userId: string;
  characterId: string;
  content: string;
  timestamp: number;
  metadata?: Record<string, any>;
}

export const messages: Message[] = [
  {
    id: 'msg001',
    from: 'user',
    userId: 'user001',
    characterId: 'thor',
    content: 'What is the secret to wielding Mjolnir?',
    timestamp: Date.now(),
    metadata: {
      tone: 'curious',
    },
  },
  {
    id: 'msg002',
    from: 'character',
    userId: 'user001',
    characterId: 'thor',
    content: 'Only one who is worthy may lift it. Worthiness is not strength, but heart.',
    timestamp: Date.now(),
    metadata: {
      tone: 'noble',
      wisdomLevel: 5,
    },
  },
  {
    id: 'msg003',
    from: 'user',
    userId: 'user002',
    characterId: 'loki',
    content: 'Are you proud of your illusions?',
    timestamp: Date.now(),
    metadata: {
      tone: 'confrontational',
    },
  },
  {
    id: 'msg004',
    from: 'character',
    userId: 'user002',
    characterId: 'loki',
    content: 'Pride is for mortals. I revel in results.',
    timestamp: Date.now(),
    metadata: {
      tone: 'smug',
      illusionCount: 3,
    },
  },
];
