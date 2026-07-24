<script setup>
defineProps({
  label: { type: String, required: true },
  value: { type: [String, Number], default: '-' },
  wide: { type: Boolean, default: false },
})
</script>

<template>
  <div class="min-w-0" :class="wide ? 'sm:col-span-2' : ''">
    <dt class="text-sm font-medium text-ink">{{ label }}</dt>
    <dd class="mt-1 text-sm leading-relaxed text-ink-muted">{{ value }}</dd>
  </div>
</template>
