<script setup>
defineProps({
  active: {
    type: String,
    required: true,
    validator: (value) => ['baru', 'disetujui', 'ditolak'].includes(value),
  },
})

const tabs = [
  { key: 'baru', label: 'Pengajuan Baru', to: '/Approvalpengajuanbaru' },
  { key: 'disetujui', label: 'Disetujui', to: '/Approvaldisetujui' },
  { key: 'ditolak', label: 'Ditolak', to: '/Approvalditolak' },
]
</script>

<template>
  <div class="mt-4 flex gap-2 overflow-x-auto px-4">
    <router-link
      v-for="tab in tabs"
      :key="tab.key"
      :to="tab.to"
      class="rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap"
      :class="
        active === tab.key
          ? 'bg-brand text-white'
          : 'border border-surface-line text-ink hover:bg-brand-soft hover:text-brand'
      "
    >
      {{ tab.label }}
    </router-link>
  </div>
</template>
