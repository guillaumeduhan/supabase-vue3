<script setup lang="ts">
import { reactive, onMounted } from "vue"
import { useAuth } from "@/composables/useAuth"
import Auth from "@/views/Auth.vue"
import Header from "@/components/Header.vue"

const { isLoggedIn, setUser, supabase, Loading, router, route, RouterView } = useAuth()

const state = reactive({
  loading: false
})

onMounted(() => {
  supabase.auth.onAuthStateChange((_, session) => {
    state.loading = true
    if (!session) {
      router.push('/')
    } else {
      setUser(session ? session.user : null)
      router.forward()
    }
    state.loading = false
  })
})
</script>

<template>
  <div>
    <Loading v-if="state.loading" />
    <div v-else>
      <Auth v-if="!isLoggedIn" />
      <div v-else>
        <Header />
        <RouterView />
      </div>
    </div>
  </div>
</template>