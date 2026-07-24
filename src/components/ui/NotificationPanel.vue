<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [
      {
        date: '04 Apr 24',
        time: '10.24',
        title: 'Pengajuan Masuk',
        body: 'Pengajuan (PKS/NDA/MoU) dengan nomor 100122 meminta persetujuan. Silakan tinjau pengajuan pada menu Approval.',
        unread: true,
      },
      {
        date: '04 Apr 24',
        time: '10.24',
        title: 'Pengajuan Berhasil Dibuat',
        body: 'Pengajuan (PKS/NDA/MoU) dengan nomor 100123 meminta persetujuan. Silakan tinjau pengajuan pada menu Approval.',
        unread: false,
      },
    ],
  },
})

const emit = defineEmits(['close'])
</script>

<template>
  <div
    class="absolute right-0 z-20 mt-8 w-[min(656px,calc(100vw-2rem))] overflow-hidden rounded-b-lg bg-white shadow-lg"
    role="dialog"
    aria-label="Notifikasi"
  >
    <div class="flex h-[76px] items-center justify-between bg-brand-soft px-6">
      <h2 class="text-xl font-semibold text-ink">Notifikasi</h2>
      <button type="button" class="p-1" aria-label="Tutup notifikasi" @click="emit('close')">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L8 6.58579L12.2929 2.29289C12.6834 1.90237 13.3166 1.90237 13.7071 2.29289C14.0976 2.68342 14.0976 3.31658 13.7071 3.70711L9.41421 8L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L8 9.41421L3.70711 13.7071C3.31658 14.0976 2.68342 14.0976 2.29289 13.7071C1.90237 13.3166 1.90237 12.6834 2.29289 12.2929L6.58579 8L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z"
            fill="#CCCCCC"
          />
        </svg>
      </button>
    </div>

    <div class="max-h-[420px] space-y-6 overflow-y-auto border border-t-0 border-surface-line p-4">
      <article v-for="(item, index) in items" :key="index" class="flex gap-4">
        <div
          class="w-[120px] shrink-0 border-e-[3px] sm:w-[170px]"
          :class="item.unread ? 'border-brand' : 'border-ink-faint'"
        >
          <p class="font-medium text-ink-soft">{{ item.date }}</p>
          <p class="mt-2 font-medium text-ink-soft">{{ item.time }}</p>
        </div>
        <div class="min-w-0 flex-1">
          <h3
            class="text-lg font-medium"
            :class="item.unread ? 'text-brand' : 'text-ink'"
          >
            {{ item.title }}
          </h3>
          <p :class="item.unread ? 'text-ink' : 'text-ink-faint'">{{ item.body }}</p>
        </div>
      </article>
    </div>
  </div>
</template>
