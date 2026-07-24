<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'

const route = useRoute()

const variant = computed(() => {
  if (route.meta.layout === 'admin' || route.meta.roles?.includes('admin')) {
    return 'admin'
  }
  return 'user'
})
</script>

<template>
  <div class="flex min-h-screen bg-white">
    <AppSidebar :variant="variant" />
    <div class="min-w-0 flex-1">
      <AppNavbar />
      <router-view />
    </div>
  </div>
</template>
