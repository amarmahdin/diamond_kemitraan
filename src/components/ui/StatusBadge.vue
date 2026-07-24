<script setup>
import { computed } from 'vue'

const props = defineProps({
  status: {
    type: String,
    required: true,
  },
})

const tone = computed(() => {
  const value = props.status.toLowerCase()
  if (value.includes('selesai') || value.includes('disetujui')) {
    return 'border-[#0EA976] bg-[#E7F7F0] text-[#0EA976]'
  }
  if (value.includes('tolak') || value.includes('ditolak')) {
    return 'border-[#FF5656] bg-[#FFECEC] text-[#FF5656]'
  }
  if (value.includes('revisi')) {
    return 'border-[#FFA229] bg-[#FFF4E5] text-[#FFA229]'
  }
  if (value.includes('proses') || value.includes('waiting') || value.includes('approval')) {
    return 'border-[#8C62FF] bg-[#F3EEFF] text-[#8C62FF]'
  }
  return 'border-brand bg-brand-soft text-brand'
})
</script>

<template>
  <span class="inline-flex rounded-full border px-2 py-1 text-xs font-medium" :class="tone">
    {{ status }}
  </span>
</template>
