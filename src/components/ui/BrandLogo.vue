<script setup>
import logo from '@/assets/img/logo-diamond.png'

defineProps({
  className: {
    type: String,
    default: 'h-[13px] w-[77px]',
  },
})
</script>

<template>
  <img :src="logo" alt="DIAMOND" :class="className" />
</template>
