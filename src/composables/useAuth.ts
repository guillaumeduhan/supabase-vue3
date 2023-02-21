import { RouterView, useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { supabase } from "@/supabase";
import Loading from "@/components/Loading.vue";
import { storeToRefs } from "pinia";

export function useAuth() {
  let userStore = useUserStore();
  let { user, setUser } = userStore;

  const { isLoggedIn } = storeToRefs(userStore);

  const router = useRouter();

  return {
    isLoggedIn,
    Loading,
    router,
    RouterView,
    setUser,
    supabase,
    useRouter,
    user,
  };
}
