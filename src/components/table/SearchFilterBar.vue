<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import DatePicker from '@/components/datepicker.vue'
import { DOCUMENT_TYPES } from '@/utils/status'

defineProps({
  searchQuery: { type: String, default: '' },
  filterType: { type: String, default: '' },
  filterStatus: { type: String, default: '' },
  filterDate: { type: [String, Number], default: '' },
  typeOptions: { type: Array, default: () => DOCUMENT_TYPES },
  statusOptions: { type: Array, default: () => [] },
  showStatusFilter: { type: Boolean, default: true },
  showDateFilter: { type: Boolean, default: false },
})

const emit = defineEmits([
  'update:searchQuery',
  'update:filterType',
  'update:filterStatus',
  'update:filterDate',
  'clear-type',
  'clear-status',
  'clear-date',
])

const root = ref(null)
const isFilterOpen = ref(false)
const isTypeOpen = ref(false)
const isStatusOpen = ref(false)
const isDateOpen = ref(false)

function closeAll() {
  isFilterOpen.value = false
  isTypeOpen.value = false
  isStatusOpen.value = false
  isDateOpen.value = false
}

function toggleFilter() {
  isFilterOpen.value = !isFilterOpen.value
  isTypeOpen.value = false
  isStatusOpen.value = false
  isDateOpen.value = false
}

function openType() {
  isTypeOpen.value = true
  isStatusOpen.value = false
}

function openStatus() {
  isStatusOpen.value = true
  isTypeOpen.value = false
}

function selectType(type) {
  emit('update:filterType', type)
  closeAll()
}

function selectStatus(status) {
  emit('update:filterStatus', status)
  closeAll()
}

function onDateSelected(day) {
  emit('update:filterDate', day)
  isDateOpen.value = false
}

function onDocClick(event) {
  if (!root.value?.contains(event.target)) closeAll()
}

onMounted(() => document.addEventListener('click', onDocClick))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick))
</script>

<template>
  <div ref="root" class="mt-6 px-4">
    <div class="flex flex-wrap items-center gap-2">
      <div class="flex min-w-[240px] max-w-[320px] flex-1 overflow-hidden rounded-lg border border-surface-line">
        <input
          :value="searchQuery"
          type="search"
          class="h-10 w-full px-3 text-sm outline-none"
          placeholder="Cari sesuatu disini ..."
          @input="emit('update:searchQuery', $event.target.value)"
        />
        <button
          type="button"
          class="flex h-10 w-10 shrink-0 items-center justify-center bg-brand text-white"
          aria-label="Cari"
        >
          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path
              d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
          </svg>
        </button>
      </div>

      <div class="relative">
        <button
          type="button"
          class="flex h-10 items-center gap-2 rounded-lg border border-surface-line px-3 text-sm text-ink"
          @click.stop="toggleFilter"
        >
          Filter
        </button>

        <div
          v-show="isFilterOpen"
          class="absolute z-20 mt-2 w-[220px] overflow-hidden rounded-lg border border-surface-line bg-white shadow-sm"
        >
          <div class="border-b border-surface-line px-4 py-2.5 text-sm text-ink-muted">Pilih Filter</div>
          <button
            type="button"
            class="flex w-full items-center justify-between border-b border-surface-line px-4 py-2.5 text-left text-sm hover:bg-brand-soft"
            @click.stop="openType"
          >
            Tipe
            <span aria-hidden="true">›</span>
          </button>
          <button
            v-if="showStatusFilter && statusOptions.length"
            type="button"
            class="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm hover:bg-brand-soft"
            @click.stop="openStatus"
          >
            Status
            <span aria-hidden="true">›</span>
          </button>
        </div>

        <div
          v-show="isTypeOpen"
          class="absolute left-0 top-[92px] z-20 w-[220px] overflow-hidden rounded-lg border border-surface-line bg-white shadow-sm sm:left-[230px] sm:top-12"
        >
          <button
            v-for="type in typeOptions"
            :key="type"
            type="button"
            class="flex w-full items-center gap-2 border-b border-surface-line px-4 py-2.5 text-left text-sm last:border-b-0 hover:bg-brand-soft"
            :class="{ 'font-semibold text-brand': filterType === type }"
            @click="selectType(type)"
          >
            {{ type }}
          </button>
        </div>

        <div
          v-show="isStatusOpen"
          class="absolute left-0 top-[132px] z-20 max-h-64 w-[220px] overflow-auto rounded-lg border border-surface-line bg-white shadow-sm sm:left-[230px] sm:top-[90px]"
        >
          <button
            v-for="status in statusOptions"
            :key="status"
            type="button"
            class="flex w-full items-center gap-2 border-b border-surface-line px-4 py-2.5 text-left text-sm last:border-b-0 hover:bg-brand-soft"
            :class="{ 'font-semibold text-brand': filterStatus === status }"
            @click="selectStatus(status)"
          >
            {{ status }}
          </button>
        </div>
      </div>

      <div v-if="showDateFilter" class="relative">
        <button
          type="button"
          class="flex h-10 items-center gap-2 rounded-lg border border-surface-line px-3 text-sm text-ink"
          @click.stop="isDateOpen = !isDateOpen"
        >
          {{ filterDate || 'Tanggal' }}
        </button>
        <DatePicker v-show="isDateOpen" class="z-20 mt-2" @date-selected="onDateSelected" />
      </div>
    </div>

    <div
      v-if="filterType || filterStatus || filterDate"
      class="mt-4 flex flex-wrap items-center gap-2 rounded-lg border border-surface-line px-3 py-2"
    >
      <button
        v-if="filterType"
        type="button"
        class="inline-flex items-center gap-2 rounded-full border border-brand-light bg-brand-soft px-3 py-1 text-xs font-semibold text-brand"
        @click="emit('clear-type')"
      >
        {{ filterType }} ×
      </button>
      <button
        v-if="filterStatus"
        type="button"
        class="inline-flex items-center gap-2 rounded-full border border-brand-light bg-brand-soft px-3 py-1 text-xs font-semibold text-brand"
        @click="emit('clear-status')"
      >
        {{ filterStatus }} ×
      </button>
      <button
        v-if="filterDate"
        type="button"
        class="inline-flex items-center gap-2 rounded-full border border-brand-light bg-brand-soft px-3 py-1 text-xs font-semibold text-brand"
        @click="emit('clear-date')"
      >
        Tgl {{ filterDate }} ×
      </button>
    </div>
  </div>
</template>
