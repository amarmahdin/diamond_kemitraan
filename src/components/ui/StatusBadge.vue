<script setup>
import { computed } from 'vue'
import { statusTone } from '@/utils/status'

const props = defineProps({
  status: {
    type: String,
    required: true,
  },
})

const classes = computed(() => statusTone(props.status))
</script>

<template>
  <span class="inline-flex rounded-full border px-2 py-1 text-xs font-medium" :class="classes">
    {{ status }}
  </span>
</template>
