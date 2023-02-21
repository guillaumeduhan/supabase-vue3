<script setup>
import { reactive } from 'vue'
import { supabase } from "@/supabase";

const state = reactive({
  loading: false,
  disabled: false,
  error: undefined,
  email: "guillaume18061988@yopmail.com",
  password: "guillaume12",
})

const signUp = async () => {
  let { data, error } = await supabase.auth.signUp({
    email: state.email,
    password: state.password
  })
}
</script>

<template>
  <div class="mb-4 text-xl font-bold text-center">Signup</div>
  <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-lg">
    <div class="mb-4">
      <label class="block mb-2 text-sm font-bold text-gray-700" htmlFor="email" >
        Email
      </label>
      <input id="email" type="email" placeholder="Email" v-model="state.email" />
    </div>
    <div class="mb-6">
      <label class="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
        Password
      </label>
      <input id="password" type="password" placeholder="******************" v-model="state.password" />
    </div>
    <div class="flex items-center justify-between">
      <button class="btn" type="button" @click="signUp">
        Signup
      </button>
    </div>
  </form>
</template>

<style lang='scss'></style>