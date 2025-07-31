export interface Memory {
  id: string;
  characterId: string;
  content: string;
  timestamp: number;
  importance?: number; // Optional: scale of 1–5
  tags?: string[];
  metadata?: Record<string, any>;
}

export const memories: Memory[] = [
  {
    id: 'memory_thor_battle',
    characterId: 'thor',
    content: 'Defended the Bifrost against a Frost Giant invasion.',
    timestamp: Date.now(),
    importance: 5,
    tags: ['battle', 'defense', 'bifrost'],
    metadata: {
      outcome: 'victory',
      casualties: 'minimal',
    },
  },
  {
    id: 'memory_loki_trick',
    characterId: 'loki',
    content: 'Deceived the court of Asgard by impersonating Odin.',
    timestamp: Date.now(),
    importance: 4,
    tags: ['trickery', 'illusion', 'asgard'],
    metadata: {
      duration: '2 weeks',
      discoveredBy: 'Thor',
    },
  },
];
