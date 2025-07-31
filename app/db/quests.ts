export interface Quest {
  id: string;
  title: string;
  description?: string;
  assignedTo: string; // characterId
  status: 'pending' | 'active' | 'completed' | 'failed';
  createdAt: number;
  updatedAt: number;
  metadata?: Record<string, any>;
}

export const quests: Quest[] = [
  {
    id: 'quest001',
    title: 'Defend the Bifrost',
    description: 'Prevent the Frost Giants from breaching the Bifrost.',
    assignedTo: 'thor',
    status: 'completed',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    metadata: {
      region: 'Asgard Gate',
      enemy: 'Frost Giants',
      reward: 'Honor and renown',
    },
  },
  {
    id: 'quest002',
    title: 'Recover the Tesseract',
    description: 'Locate and secure the Tesseract from SHIELD custody.',
    assignedTo: 'loki',
    status: 'active',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    metadata: {
      difficulty: 'high',
      stealthRequired: true,
      consequences: 'Multiverse instability',
    },
  },
];
