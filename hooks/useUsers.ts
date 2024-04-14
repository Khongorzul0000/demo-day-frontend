// import { create } from 'zustand';

// import { User } from '@/graphql/generated';

// type UseUserStore = {
//   user: User | null;
//   setUser: (prevState: User | null) => void;
// };

// export const useUsers = create<UseUserStore>((set) => ({
//   user: null,
//   setUser: (prevState) => set({ user: prevState }),
//   logout: () => set({ user: null }),
// }));

import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

import { User } from '@/graphql/generated';

type UseUserStore = {
  user: User | null;
  setUser: (prevState: User | null) => void;
  logout: () => Promise<void>;
};

export const useUsers = create<UseUserStore>((set) => ({
  user: null,
  setUser: async (prevState) => {
    set({ user: prevState });
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(prevState));
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  },
  logout: async () => {
    try {
      await AsyncStorage.removeItem('userData');
      set({ user: null });
    } catch (error) {
      console.error('Error logging out:', error);
    }
  },
}));

// When your application starts, load user data from AsyncStorage
(async () => {
  try {
    const userDataString = await AsyncStorage.getItem('userData');
    if (userDataString !== null) {
      const userData = JSON.parse(userDataString);
      // Set the user data in your Zustand store
      useUsers.setState({ user: userData });
    }
  } catch (error) {
    console.error('Error loading user data:', error);
  }
})();
