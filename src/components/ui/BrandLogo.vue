<script setup>
import logo from '@/assets/img/logo-diamond.png'

defineProps({
  alt: {
    type: String,
    default: 'DIAMOND',
  },
})
</script>

<template>
  <img :src="logo" :alt="alt" class="block h-auto w-auto object-contain" />
</template>
