<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import log from '@/assets/img/log.png'
import BrandLogo from '@/components/ui/BrandLogo.vue'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const route = useRoute()
const auth = useAuthStore()

const username = ref('')
const password = ref('')
const isPasswordVisible = ref(false)

function togglePasswordVisibility() {
  isPasswordVisible.value = !isPasswordVisible.value
}

function submitLogin() {
  const result = auth.login(username.value, password.value)
  if (!result.ok) return

  const raw = route.query.redirect
  if (typeof raw === 'string' && raw.startsWith('/') && !raw.startsWith('//')) {
    router.replace(raw)
    return
  }
  router.replace(result.role === 'admin' ? '/Dashboardadmin' : '/Dashboard')
}
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center bg-surface-page px-4 py-8 xl:flex-row xl:justify-center xl:px-6 xl:py-10"
  >
    <div class="relative mb-8 w-full max-w-[643px] shrink-0 overflow-hidden rounded-lg shadow-lg xl:mb-0 xl:rounded-none">
      <img :src="log" alt="DIAMOND" class="block h-auto w-full" />
      <div class="absolute inset-x-4 bottom-4 rounded-[20px] bg-[#21252B80] px-3 py-4 xl:hidden">
        <p class="text-center text-sm font-semibold leading-snug text-[#E9EAEC] sm:text-base">
          "Welcome to DIAMOND (Digital Administration Monitoring Dashboard)”
        </p>
      </div>
      <div
        class="absolute left-9 top-1/2 hidden max-w-[calc(100%-74px)] -translate-y-[125%] rounded-[20px] bg-[#21252B80] p-6 xl:block xl:w-[588px]"
      >
        <p class="text-center text-[26px] font-semibold text-[#E9EAEC]">
          "Welcome to DIAMOND (Digital Administration Monitoring Dashboard)”
        </p>
      </div>
    </div>

    <div
      class="flex w-full max-w-[720px] flex-col justify-center bg-white shadow-lg min-h-[min(640px,85vh)] xl:min-h-[min(1024px,92vh)]"
    >
      <form
        class="mx-auto flex w-full max-w-[480px] flex-col px-6 py-12 xl:ml-[120px] xl:mr-auto xl:mt-[clamp(3rem,15vh,202px)] xl:px-0 xl:py-0"
        @submit.prevent="submitLogin"
      >
        <BrandLogo class-name="mx-auto h-11 w-[252px] xl:ml-[114.5px]" />

        <h1
          class="mt-12 text-center text-4xl font-semibold text-ink-dark xl:ml-[186px] xl:mt-12 xl:text-left xl:text-[40px]"
        >
          Login
        </h1>

        <div class="mt-8">
          <label class="form-label font-semibold" for="username">
            Username <span class="text-status-red">*</span>
          </label>
          <input
            id="username"
            v-model="username"
            type="text"
            class="form-input mt-2"
            placeholder="Masukkan username"
            name="username"
            autocomplete="username"
          />
        </div>

        <div class="relative mt-6">
          <label class="form-label font-semibold" for="password">
            Password <span class="text-status-red">*</span>
          </label>
          <div class="relative mt-2">
            <input
              id="password"
              v-model="password"
              :type="isPasswordVisible ? 'text' : 'password'"
              class="form-input pr-10"
              placeholder="Masukkan password"
              name="password"
              autocomplete="current-password"
            />
            <button
              type="button"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-brand"
              aria-label="Tampilkan password"
              @click="togglePasswordVisibility"
            >
              <span class="text-sm font-medium">{{ isPasswordVisible ? 'Hide' : 'Show' }}</span>
            </button>
          </div>
        </div>

        <div class="mt-20">
          <button type="submit" class="btn-primary w-full">Login</button>
          <button type="button" class="btn-outline mt-4 w-full">Login dengan SSO</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
input[type='password']::-ms-reveal,
input[type='password']::-ms-clear,
input[type='password']::-webkit-clear-button,
input[type='password']::-webkit-reveal-button {
  display: none;
}
</style>
