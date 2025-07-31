export interface Interaction {
  id: string;
  characterId: string;
  userId: string;
  message: string;
  response: string;
  timestamp: number;
  metadata?: Record<string, any>;
}

export const interactions: Interaction[] = [
  {
    id: 'intx_thor_user001',
    characterId: 'thor',
    userId: 'user001',
    message: 'Thor, what is your duty?',
    response: 'To defend the realms and honor Odin’s will.',
    timestamp: Date.now(),
    metadata: {
      tone: 'honorable',
      context: 'introductory chat',
    },
  },
  {
    id: 'intx_loki_user002',
    characterId: 'loki',
    userId: 'user002',
    message: 'Loki, are you truly evil?',
    response: 'Evil is a matter of perspective, dear mortal.',
    timestamp: Date.now(),
    metadata: {
      tone: 'mischievous',
      context: 'philosophical exchange',
    },
  },
];
