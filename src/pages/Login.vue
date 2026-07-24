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
const errorMessage = ref('')

function togglePasswordVisibility() {
  isPasswordVisible.value = !isPasswordVisible.value
}

function submitLogin() {
  errorMessage.value = ''
  const result = auth.login(username.value, password.value)
  if (!result.ok) {
    errorMessage.value = 'Username dan password wajib diisi.'
    return
  }

  const raw = route.query.redirect
  if (typeof raw === 'string' && raw.startsWith('/') && !raw.startsWith('//')) {
    router.replace(raw)
    return
  }
  router.replace(result.role === 'admin' ? '/Dashboardadmin' : '/Dashboard')
}
</script>

<template>
  <div class="min-h-screen bg-surface-page">
    <div class="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col xl:flex-row">
      <!-- Panel visual -->
      <aside class="relative w-full overflow-hidden xl:w-[45%] xl:max-w-[643px]">
        <img
          :src="log"
          alt="DIAMOND"
          class="h-56 w-full object-cover sm:h-72 xl:h-full xl:min-h-screen xl:object-cover"
        />
        <div
          class="absolute inset-x-4 bottom-4 rounded-2xl bg-[#21252B]/80 px-4 py-4 backdrop-blur-sm xl:inset-x-8 xl:bottom-10 xl:px-6 xl:py-6"
        >
          <p class="text-center text-sm font-semibold leading-relaxed text-[#E9EAEC] sm:text-base xl:text-[22px] xl:leading-snug">
            Welcome to DIAMOND
            <span class="mt-1 block font-medium opacity-90">
              (Digital Administration Monitoring Dashboard)
            </span>
          </p>
        </div>
      </aside>

      <!-- Panel form -->
      <main class="flex flex-1 items-center justify-center bg-white px-6 py-10 shadow-lg sm:px-10 xl:px-16">
        <form class="w-full max-w-[420px]" @submit.prevent="submitLogin">
          <BrandLogo class="h-10 w-[220px]" />

          <h1 class="mt-10 text-3xl font-semibold text-ink-dark sm:text-4xl">Login</h1>
          <p class="mt-2 text-sm text-ink-muted">
            Masuk untuk mengelola pengajuan kemitraan bisnis.
          </p>

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

          <div class="mt-5">
            <label class="form-label font-semibold" for="password">
              Password <span class="text-status-red">*</span>
            </label>
            <div class="relative mt-2">
              <input
                id="password"
                v-model="password"
                :type="isPasswordVisible ? 'text' : 'password'"
                class="form-input pr-16"
                placeholder="Masukkan password"
                name="password"
                autocomplete="current-password"
              />
              <button
                type="button"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-brand"
                @click="togglePasswordVisibility"
              >
                {{ isPasswordVisible ? 'Sembunyi' : 'Lihat' }}
              </button>
            </div>
          </div>

          <p v-if="errorMessage" class="mt-3 text-sm text-status-red">
            {{ errorMessage }}
          </p>

          <div class="mt-10 space-y-3">
            <button type="submit" class="btn-primary w-full">Login</button>
            <button type="button" class="btn-outline w-full">Login dengan SSO</button>
          </div>

          <p class="mt-6 text-xs text-ink-faint">
            Demo: username diawali <span class="font-semibold text-ink-muted">admin</span> untuk peran admin.
          </p>
        </form>
      </main>
    </div>
  </div>
</template>

<style scoped>
input[type='password']::-ms-reveal,
input[type='password']::-ms-clear {
  display: none;
}
</style>
