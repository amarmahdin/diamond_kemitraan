<script setup>
import { computed } from 'vue'

const props = defineProps({
  steps: {
    type: Array,
    required: true,
  },
  current: {
    type: Number,
    required: true,
  },
})

const items = computed(() =>
  props.steps.map((label, index) => {
    const step = index + 1
    const done = step < props.current
    const active = step === props.current
    return { label, step, done, active }
  }),
)
</script>

<template>
  <div class="mt-4 flex flex-wrap items-start justify-center gap-y-3 px-4">
    <template v-for="(item, index) in items" :key="item.step">
      <div class="flex min-w-[72px] flex-col items-center">
        <div
          class="flex h-8 w-8 items-center justify-center rounded-lg border text-sm font-semibold"
          :class="{
            'border-brand bg-brand text-white': item.active,
            'border-transparent bg-brand-soft text-brand': item.done,
            'border-ink-faint bg-white text-ink-faint': !item.active && !item.done,
          }"
        >
          {{ item.step }}
        </div>
        <span
          class="mt-1 max-w-[96px] text-center text-xs sm:text-sm"
          :class="item.active || item.done ? 'text-brand' : 'text-ink-faint'"
        >
          {{ item.label }}
        </span>
      </div>

      <div
        v-if="index < items.length - 1"
        class="mx-2 mt-4 h-0.5 w-6 sm:w-8"
        :class="item.done || item.active ? 'bg-brand-light' : 'bg-surface-line'"
        aria-hidden="true"
      />
    </template>
  </div>
</template>
