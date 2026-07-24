<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  open: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['update:open'])
</script>

<template>
  <section class="border-b border-surface-line px-4 py-4">
    <button
      type="button"
      class="flex w-full items-center justify-between text-left"
      @click="emit('update:open', !open)"
    >
      <h3 class="text-base font-medium text-ink">{{ title }}</h3>
      <span class="text-ink-muted transition-transform" :class="{ 'rotate-180': open }">▾</span>
    </button>
    <div v-show="open" class="mt-4">
      <slot />
    </div>
  </section>
</template>
