export interface User {
  id: string;
  name: string;
  email?: string;
  avatarUrl?: string;
  createdAt: number;
  updatedAt: number;
  metadata?: Record<string, any>;
}

export const users: User[] = [
  {
    id: 'user001',
    name: 'Jane Foster',
    email: 'jane@midgard.org',
    avatarUrl: '/avatars/jane.png',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    metadata: {
      role: 'Scientist',
      associatedWith: 'Thor',
    },
  },
  {
    id: 'user002',
    name: 'Nick Fury',
    email: 'fury@shield.gov',
    avatarUrl: '/avatars/fury.png',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    metadata: {
      role: 'Director of SHIELD',
      clearanceLevel: 9,
    },
  },
];
