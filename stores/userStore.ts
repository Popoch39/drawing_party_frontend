import { fetchUser } from "@/apis/user";
import { UserType } from "@/types/user";
import { create } from "zustand";

interface StoreInterface {
  connectedUser: UserType | null;
  setUser: (user: UserType | null) => void;
  fetchAndSetUser: () => Promise<void>;
}

const useUserStore = create<StoreInterface>((set) => ({
  connectedUser: null,
  setUser: (user) => set({ connectedUser: user }),

  fetchAndSetUser: async () => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      set({ connectedUser: null });
      return;
    }

    try {
      const user: UserType = await fetchUser(token);
      set({ connectedUser: user });
    } catch (error) {
      console.error("Error fetching user:", error);
      localStorage.removeItem("authToken");
      set({ connectedUser: null });
    }
  },
}));

export default useUserStore;
