<script setup>
defineProps({
  title: { type: String, required: true },
  accent: { type: String, default: '#4791F2' },
  open: { type: Boolean, default: false },
})

const emit = defineEmits(['update:open'])
</script>

<template>
  <section class="overflow-hidden rounded-lg border border-surface-line">
    <button
      type="button"
      class="flex h-12 w-full items-center gap-2.5 border-b border-surface-line bg-white text-left"
      @click="emit('update:open', !open)"
    >
      <span class="h-12 w-[30px] shrink-0 rounded-s-lg" :style="{ backgroundColor: accent }" />
      <span class="flex-1 text-base font-semibold text-ink">{{ title }}</span>
      <span
        class="mr-4 text-brand transition-transform"
        :class="{ 'rotate-180': open }"
        aria-hidden="true"
      >
        ▾
      </span>
    </button>
    <div v-show="open" class="bg-white px-4 py-5 sm:px-6">
      <slot />
    </div>
  </section>
</template>
