<script setup>
import { ref } from 'vue'
import Login from "@/components/Login.vue"
import Signup from "@/components/Signup.vue"

const isLogin = ref(true);
</script>

<template>
  <div class="Auth">
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md">
        <Login v-if="isLogin" />
        <Signup v-else />
      </div>
      <div class="text-blue-500 underline" @click="isLogin = !isLogin">{{ isLogin ? "Signup" : "Login" }}</div>
    </div>
  </div>
</template>