import { create } from 'zustand';

export interface IUser {
  email: string;
  plan?: string;
}

export interface AuthState {
  user: IUser;
  loadLoggedUser: () => void;
  setUser: (value: IUser) => void;
  setPlan: (value: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: {} as IUser,

  loadLoggedUser: () => {
    if (typeof window !== 'undefined') {
      const loggedUser = JSON.parse(localStorage.getItem('user') || '{}');
      if (loggedUser) {
        set({ user: loggedUser });
      }
    }
  },
  setUser: (value) => {
    if (typeof window !== 'undefined') {
      set({ user: value });
      localStorage.setItem('user', JSON.stringify(value));
    }
  },
  setPlan: (value) => {
    if (typeof window !== 'undefined') {
      set((state) => ({user: {...state.user, plan: value}}));
      localStorage.setItem('user', JSON.stringify(get().user));
    }
  },
  logout: () => {
    if (typeof window !== 'undefined') {
      set({ user: {} as IUser });
      localStorage.removeItem('user')
    }
  },
}));
