<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="px-4 pt-4">
    <div class="flex items-center gap-1.5">
      <div class="page-title-bar" aria-hidden="true" />
      <h1 class="text-xl font-medium text-ink">{{ title }}</h1>
    </div>
    <p v-if="subtitle" class="mt-0.5 text-base text-ink-faint">{{ subtitle }}</p>
  </div>
</template>
