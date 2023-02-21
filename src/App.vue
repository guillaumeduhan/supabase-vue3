<script setup lang="ts">
import { reactive } from "vue"
import { useAuth } from "@/composables/useAuth"
import Auth from "@/views/Auth.vue"
import Header from "@/components/Header.vue"

const { isLoggedIn, setUser, supabase, Loading, router, RouterView } = useAuth()

const state = reactive({
  loading: false
})

supabase.auth.onAuthStateChange((_, session) => {
  state.loading = true
  setUser(session ? session.user : null)
  router.push('/')
  state.loading = false
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