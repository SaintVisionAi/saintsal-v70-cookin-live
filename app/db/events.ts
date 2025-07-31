export interface Event {
  id: string;
  title: string;
  description?: string;
  worldId: string;
  timestamp: number;
  relatedCharacters?: string[]; // characterIds
  metadata?: Record<string, any>;
}

export const events: Event[] = [
  {
    id: 'event_ragnarok',
    title: 'Ragnarok',
    description: 'The prophesied end of Asgard.',
    worldId: 'asgard',
    timestamp: Date.now(),
    relatedCharacters: ['thor', 'loki'],
    metadata: {
      result: 'Asgard destroyed',
      survivors: ['Thor', 'Loki', 'Heimdall'],
    },
  },
  {
    id: 'event_nyc_battle',
    title: 'Battle of New York',
    description: 'Avengers assembled to defend Earth from Loki and the Chitauri.',
    worldId: 'midgard',
    timestamp: Date.now(),
    relatedCharacters: ['loki'],
    metadata: {
      location: 'New York City',
      avengersPresent: ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye'],
    },
  },
];
