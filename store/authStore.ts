import { create } from 'zustand';

export interface IUser {
  email: string;
  plan?: string;
}

export interface AuthState {
  user: IUser;
  loadLoggedUser: () => void;
  setUser: (value: IUser) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
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
  logout: () => {
    if (typeof window !== 'undefined') {
      set({ user: {} as IUser });
      localStorage.removeItem('user')
    }
  },
}));
