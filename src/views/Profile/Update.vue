<script setup>
import Alert from "@/components/Alert.vue"
import { reactive } from 'vue'
import { useAuth } from "@/composables/useAuth"
import { supabase } from '@/supabase'

const state = reactive({
  loading: false,
  success: false,
  email: undefined,
  password: undefined,
})

const { validateEmail } = useAuth()

const updateUser = async () => {
  state.error = undefined;
  if (!validateEmail(state.email)) {
    state.error = "Enter a valid email."
    return
  }
  if (!state.password) {
    state.error = "Enter a password."
    return
  }
  try {
    state.loading = true
    const { data, error } = await supabase
      .auth
      .updateUser({
        email: state.email,
        password: state.password
      })

    if (data) {
      state.success = "Successfully updated."
    }
  } catch (error) {
    state.error = "Error coming from Supabase."
  } finally {
    state.loading = false
  }
}
</script>

<template>
  <div class="container mx-auto text-center w-96">
    <header class="my-6">
      <h1 class="mb-2 text-2xl font-bold">Update your password</h1>
      <p>Update your email or password.</p>
    </header>
    <div class="mx-auto">
      <input type="text" class="text" placeholder="mail@gmail.com" v-model="state.email" />
      <input type="password" class="text" placeholder="MyNewPassword12" v-model="state.password" />
    </div>
    <Alert v-if="state.error" :text="state.error" class="alert-danger" />
    <Alert v-if="state.success" :text="state.success" class="alert-success" />
    <div>
      <button class="btn btn-primary" :disabled="state.loading" @click="updateUser">{{ state.loading ? 'Loading' :
        'Update' }}</button>
    </div>
  </div>
</template>

<style lang='scss'></style>