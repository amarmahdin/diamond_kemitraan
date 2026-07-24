<script setup>
import { useAuthStore } from '@/stores/auth'
import userIcon from '@/assets/img/User.png'
import groupArt from '@/assets/img/Group.png'

defineProps({
  title: {
    type: String,
    default: 'OFFICER KEMITRAAN BISNIS',
  },
  subtitle: {
    type: String,
    default: 'Staff Sub Bidang Kemitraan Bisnis Konektivitas dan Infrastruktur',
  },
})

const auth = useAuthStore()
</script>

<template>
  <div class="content-inner mt-4 overflow-hidden rounded-lg bg-brand">
    <div class="flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div class="flex min-w-0 items-start gap-2">
        <img :src="userIcon" alt="" class="mt-1 h-[18px] w-[18px] shrink-0" />
        <div class="min-w-0">
          <p class="text-[15px] font-medium text-white">{{ title }}</p>
          <p class="mt-1 text-lg font-medium text-white sm:text-xl">
            {{ subtitle }}
          </p>
          <p v-if="auth.username" class="mt-1 text-sm text-white/80">
            Masuk sebagai {{ auth.username }}
          </p>
        </div>
      </div>
      <img :src="groupArt" alt="" class="hidden h-16 w-auto shrink-0 rounded-lg md:block" />
    </div>
  </div>
</template>
