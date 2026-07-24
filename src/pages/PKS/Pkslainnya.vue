<script setup>
import WizardPageLayout from '@/layouts/WizardPageLayout.vue'
import FormNavButtons from '@/components/ui/FormNavButtons.vue'
import { PKS_STEPS } from '@/constants/navigation'
</script>

<template>
  <WizardPageLayout
    :breadcrumb="[{ label: 'Buat' }, { label: 'PKS' }]"
    title="PKS"
    subtitle="Formulir Pengajuan Mitra"
    :steps="PKS_STEPS"
    :current-step="4"
  >
    <h2 class="px-4 py-6 text-xl font-medium text-ink">Lainnya</h2>

    <div class="grid gap-6 px-4 md:grid-cols-2">
      <div>
        <label class="form-label">
          Latar Belakang <span class="text-status-red">*</span>
        </label>
        <textarea
          class="form-textarea mt-2"
          rows="3"
          placeholder="Masukkan Latar Belakang"
        />
      </div>
      <div>
        <label class="form-label">
          Catatan <span class="text-xs text-[#B3B3B3]">(Opsional)</span>
        </label>
        <textarea
          class="form-textarea mt-2"
          rows="3"
          placeholder="Masukkan Catatan"
        />
      </div>
    </div>

    <FormNavButtons prev-to="/Pksruanglingkup" next-to="/Pksmitrabisnis" />
  </WizardPageLayout>
</template>
