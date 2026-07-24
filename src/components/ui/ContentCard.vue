<script setup>
defineProps({
  padded: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="page-body">
    <div class="content-card" :class="{ 'pb-6': padded }">
      <slot />
    </div>
  </div>
</template>
