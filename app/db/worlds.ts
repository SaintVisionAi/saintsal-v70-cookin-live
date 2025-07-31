export interface World {
  id: string;
  name: string;
  description?: string;
  createdAt: number;
  updatedAt: number;
  metadata?: Record<string, any>;
}

export const worlds: World[] = [
  {
    id: 'asgard',
    name: 'Asgard',
    description: 'Realm of the gods, high above the Nine Realms.',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    metadata: {
      ruler: 'Odin',
      population: 'Immortal beings',
      terrain: 'Golden halls, celestial structures',
    },
  },
  {
    id: 'midgard',
    name: 'Midgard',
    description: 'The realm of humans — known to us as Earth.',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    metadata: {
      technologyLevel: 'Modern',
      population: '8 billion+',
      knownHeroes: ['Thor', 'Iron Man', 'Captain America'],
    },
  },
];
