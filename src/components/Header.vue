<script setup>
import { supabase } from "@/supabase"
import { useAuth } from "@/composables/useAuth"

const { router } = useAuth()

const signOut = async () => {
  let { error } = await supabase.auth.signOut()
  router.push('/')
}
</script>

<template>
  <header class="py-4 bg-gray-900">
    <div class="container flex items-center justify-between mx-auto">
      <h1 class="text-lg font-bold text-white">My Nuxt Supabase app</h1>
      <button class="w-auto px-4 py-2 font-semibold text-white bg-red-600 rounded hover:bg-red-700" @click="signOut">
        Signout
      </button>
    </div>
  </header>
</template>