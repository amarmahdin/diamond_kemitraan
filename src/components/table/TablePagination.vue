<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineProps({
  total: { type: Number, default: 0 },
  currentPage: { type: Number, default: 1 },
  rowsPerPage: { type: Number, default: 8 },
  pages: { type: Array, default: () => [] },
  pageSizeOptions: { type: Array, default: () => [5, 7, 8, 10] },
})

const emit = defineEmits(['update:rowsPerPage', 'go-to-page'])

const open = ref(false)
const root = ref(null)

function onDocClick(event) {
  if (!root.value?.contains(event.target)) open.value = false
}

onMounted(() => document.addEventListener('click', onDocClick))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick))
</script>

<template>
  <div class="content-inner flex flex-wrap items-center justify-between gap-3 py-3">
    <div ref="root" class="relative flex items-center gap-3">
      <span class="text-sm text-ink">Menampilkan</span>
      <button
        type="button"
        class="flex h-8 w-11 items-center justify-between rounded-lg border border-surface-line px-2 text-sm"
        @click.stop="open = !open"
      >
        {{ rowsPerPage }}
        <span class="text-brand" :class="{ 'rotate-180': open }">▾</span>
      </button>
      <ul
        v-show="open"
        class="absolute bottom-full z-10 mb-1 w-11 overflow-hidden rounded-lg border border-surface-line bg-white"
      >
        <li v-for="size in pageSizeOptions" :key="size">
          <button
            type="button"
            class="w-full py-1 text-center text-sm hover:bg-brand-soft"
            @click="emit('update:rowsPerPage', size); open = false"
          >
            {{ size }}
          </button>
        </li>
      </ul>
      <p class="text-sm text-ink">
        dari <span class="font-semibold">{{ total }}</span> Data
      </p>
    </div>

    <div v-if="pages.length" class="flex items-center gap-2 text-sm text-ink-muted">
      <button
        type="button"
        class="px-2 disabled:opacity-40"
        :disabled="currentPage <= 1"
        @click="emit('go-to-page', currentPage - 1)"
      >
        ‹
      </button>
      <button
        v-for="(page, index) in pages"
        :key="`${page}-${index}`"
        type="button"
        class="min-w-7 rounded px-2 py-1"
        :class="page === currentPage ? 'bg-brand text-white' : 'hover:bg-brand-soft'"
        :disabled="page === '...'"
        @click="emit('go-to-page', page)"
      >
        {{ page }}
      </button>
      <button
        type="button"
        class="px-2 disabled:opacity-40"
        :disabled="currentPage >= pages[pages.length - 1]"
        @click="emit('go-to-page', currentPage + 1)"
      >
        ›
      </button>
    </div>
  </div>
</template>
