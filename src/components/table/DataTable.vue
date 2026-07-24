<script setup>
import { useRouter } from 'vue-router'
import StatusBadge from '@/components/ui/StatusBadge.vue'

const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  rows: {
    type: Array,
    default: () => [],
  },
  detailTo: {
    type: [String, Function],
    default: '',
  },
})

const emit = defineEmits(['sort'])
const router = useRouter()

function cellValue(row, column) {
  return row[column.key]
}

function openDetail(row) {
  if (!props.detailTo) return
  const target = typeof props.detailTo === 'function' ? props.detailTo(row) : props.detailTo
  if (target) router.push(target)
}
</script>

<template>
  <div class="content-inner mt-4 overflow-x-auto rounded-lg border border-surface-line">
    <table class="w-full min-w-[720px] table-auto text-left">
      <thead class="h-12 text-xs text-ink-secondary">
        <tr class="border-b-2 border-surface-line">
          <th
            v-for="column in columns"
            :key="column.key"
            class="px-3 py-3 font-medium"
            :style="column.width ? { width: column.width } : undefined"
          >
            <button
              v-if="column.sortable !== false"
              type="button"
              class="inline-flex items-center gap-2"
              @click="emit('sort', column.key)"
            >
              {{ column.label }}
              <span class="text-brand-muted" aria-hidden="true">↕</span>
            </button>
            <span v-else>{{ column.label }}</span>
          </th>
          <th v-if="detailTo" class="w-14 px-3" />
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in rows"
          :key="row.id"
          class="h-[54px] border-b border-surface-line text-sm text-ink"
        >
          <td v-for="column in columns" :key="`${row.id}-${column.key}`" class="px-3">
            <StatusBadge v-if="column.type === 'badge'" :status="String(cellValue(row, column) ?? '')" />
            <span v-else>{{ cellValue(row, column) }}</span>
          </td>
          <td v-if="detailTo" class="px-3">
            <button
              type="button"
              class="flex h-6 w-6 items-center justify-center rounded-lg bg-surface-line text-ink-muted hover:bg-brand-soft hover:text-brand"
              aria-label="Detail"
              @click="openDetail(row)"
            >
              ⋮
            </button>
          </td>
        </tr>
        <tr v-if="!rows.length">
          <td :colspan="columns.length + (detailTo ? 1 : 0)" class="px-3 py-8 text-center text-sm text-ink-faint">
            Tidak ada data
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
