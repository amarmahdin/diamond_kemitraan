<script setup>
import WizardPageLayout from '@/layouts/WizardPageLayout.vue'
import FormNavButtons from '@/components/ui/FormNavButtons.vue'
import { MOU_STEPS } from '@/constants/navigation'
</script>

<template>
  <WizardPageLayout
    :breadcrumb="[{ label: 'Buat' }, { label: 'MoU/NDA' }]"
    title="MoU/NDA"
    subtitle="Formulir Pengajuan Mitra"
    :steps="MOU_STEPS"
    :current-step="4"
  >
    <h2 class="px-4 py-6 text-xl font-medium text-ink">Daftar Mitra Bisnis</h2>

    <div class="px-4">
      <label class="form-label">
        Calon Mitra Bisnis <span class="text-status-red">*</span>
      </label>
      <div class="form-input mt-2 flex items-center justify-between">
        <input
          type="text"
          class="w-full outline-none"
          placeholder="Pilih Calon Mitra Bisnis"
        />
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.70711 11.2071C8.31658 11.5976 7.68342 11.5976 7.29289 11.2071L2.29289 6.20711C1.90237 5.81658 1.90237 5.18342 2.29289 4.79289C2.68342 4.40237 3.31658 4.40237 3.70711 4.79289L8 9.08579L12.2929 4.79289C12.6834 4.40237 13.3166 4.40237 13.7071 4.79289C14.0976 5.18342 14.0976 5.81658 13.7071 6.20711L8.70711 11.2071Z"
            fill="#2671D9"
          />
        </svg>
      </div>
    </div>

    <FormNavButtons prev-to="/Lainnya" next-to="/Lampiran" />
  </WizardPageLayout>
</template>
