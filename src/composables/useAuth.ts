import { RouterView, useRouter, useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";
import { supabase } from "@/supabase";
import Loading from "@/components/Loading.vue";
import { storeToRefs } from "pinia";

export function useAuth() {
  let userStore = useUserStore();
  let { user, setUser } = userStore;

  const { isLoggedIn } = storeToRefs(userStore);

  const router = useRouter();
  const route = useRoute();

  const validateEmail = (str: string) => {
    if (!str) return false;
    const pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(str);
  };

  return {
    isLoggedIn,
    Loading,
    route,
    router,
    RouterView,
    setUser,
    supabase,
    useRouter,
    user,
    validateEmail,
  };
}
