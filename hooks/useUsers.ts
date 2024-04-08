import { create } from 'zustand';

import { User } from '@/graphql/generated';

type UseUserStore = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useUsers = create<UseUserStore>((set) => ({
  user: null,
  setUser: (user: User | null) => set((state) => ({ ...state, user })),
}));
