<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import WizardPageLayout from '@/layouts/WizardPageLayout.vue'
import FormNavButtons from '@/components/ui/FormNavButtons.vue'
import { PKS_STEPS } from '@/constants/navigation'

const isJenisOpen = ref(false)
const jenissOption = ref('')
const selectedDate = ref('')
const jenisContainer = ref(null)

function jenisDropdown() {
  isJenisOpen.value = !isJenisOpen.value
}

function jenisOption(option) {
  jenissOption.value = option
  isJenisOpen.value = false
}

function onDocumentClick(event) {
  if (!jenisContainer.value?.contains(event.target)) {
    isJenisOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', onDocumentClick))
onBeforeUnmount(() => document.removeEventListener('click', onDocumentClick))
</script>

<template>
  <WizardPageLayout
    :breadcrumb="[{ label: 'Buat' }, { label: 'PKS' }]"
    title="PKS"
    subtitle="Formulir Pengajuan Mitra"
    :steps="PKS_STEPS"
    :current-step="1"
  >
    <h2 class="px-4 py-6 text-xl font-medium text-ink">Dasar</h2>

    <div class="grid gap-6 px-4 md:grid-cols-2">
      <div ref="jenisContainer" class="relative">
        <label class="form-label">
          Jenis Kemitraan <span class="text-status-red">*</span>
        </label>
        <button
          type="button"
          class="mt-2 flex h-10 w-full items-center justify-between border border-surface-line px-4 text-sm"
          :class="isJenisOpen ? 'rounded-t-lg' : 'rounded-lg'"
          @click.stop="jenisDropdown"
        >
          <span :class="jenissOption ? 'text-ink' : 'text-ink-faint'">
            {{ jenissOption || 'Pilih Jenis Kemitraan' }}
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.70711 11.2071C8.31658 11.5976 7.68342 11.5976 7.29289 11.2071L2.29289 6.20711C1.90237 5.81658 1.90237 5.18342 2.29289 4.79289C2.68342 4.40237 3.31658 4.40237 3.70711 4.79289L8 9.08579L12.2929 4.79289C12.6834 4.40237 13.3166 4.40237 13.7071 4.79289C14.0976 5.18342 14.0976 5.81658 13.7071 6.20711L8.70711 11.2071Z"
              fill="#2671D9"
            />
          </svg>
        </button>
        <ul
          v-show="isJenisOpen"
          class="absolute z-10 w-full overflow-hidden rounded-b-lg border border-t-0 border-surface-line bg-white text-sm"
        >
          <li
            v-for="option in ['Join Operation', 'Resseler', 'Channel', 'Lainnya']"
            :key="option"
            class="cursor-pointer border-b border-surface-line px-4 py-2 last:border-b-0"
            :class="jenissOption === option ? 'bg-brand text-white' : 'hover:bg-brand-soft hover:text-brand'"
            @click="jenisOption(option)"
          >
            {{ option }}
          </li>
        </ul>
      </div>

      <div>
        <label class="form-label" for="pks-date">
          Tanggal <span class="text-status-red">*</span>
        </label>
        <input id="pks-date" v-model="selectedDate" type="date" class="form-input mt-2" />
      </div>
    </div>

    <div class="mt-6 px-4">
      <label class="form-label">
        Judul Kemitraan <span class="text-status-red">*</span>
      </label>
      <textarea
        class="form-textarea mt-2"
        rows="3"
        placeholder="Masukkan Judul Kemitraan"
      />
    </div>

    <FormNavButtons next-to="/Rab" />
  </WizardPageLayout>
</template>
