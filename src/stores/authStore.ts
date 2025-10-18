import { create } from "zustand";

interface IAuthStore {
  email: string;
  isLoggedIn: boolean;

  onLogin: (email: string) => void;
  onLogout: () => void;
}

const useAuthStore = create<IAuthStore>((set) => ({
  email: "",
  isLoggedIn: false,

  onLogin: (email: string) => {
    set(() => ({ isLoggedIn: true, email }));
  },
  onLogout: () => {
    set(() => ({ isLoggedIn: false, email: "" }));
  },
}));

export default useAuthStore;
