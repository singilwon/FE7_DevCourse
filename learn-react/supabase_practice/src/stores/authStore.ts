import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { Claims } from "../types/user";
import type { Profile } from "../types/profile";
import supabase from "../utils/supabase";

type AuthStore = {
  isLoading: boolean;
  claims: Claims;
  profile: Profile | null;
  setClaims: (c: Claims) => void;
  hydrateFromAuth: () => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      immer((set) => ({
        isLoading: true,
        claims: null,
        profile: null,
        setClaims: (c: Claims) =>
          set((state) => {
            state.claims = c;
          }),
        hydrateFromAuth: async () => {
          set({ isLoading: true });
          // 1) 클레임 가져오는 것(JWT Payload)
          const { data: claimsData, error: claimsErr } =
            await supabase.auth.getClaims();
          if (claimsErr) {
            set({ claims: null, profile: null, isLoading: false });
            return;
          }
          const claims = claimsData?.claims;
          set({ claims: claims });

          if (claims?.sub) {
            const { data: profiles, error } = await supabase
              .from("profiles")
              .select("*")
              .eq("id", claims.sub)
              .single();

            if (error) {
              set({ claims: null, profile: null, isLoading: false });
              return;
            }
            set((state) => {
              state.profile = profiles;
            });
          }
          set({ isLoading: false });
        },
        clearAuth: () => {
          set((state) => {
            state.claims = null;
            state.profile = null;
          });
        },
      })),
      { name: "auth-store" }
    )
  )
);
