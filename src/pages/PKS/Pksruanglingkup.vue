<script setup>
import { ref } from 'vue'
import WizardPageLayout from '@/layouts/WizardPageLayout.vue'
import FormNavButtons from '@/components/ui/FormNavButtons.vue'
import { PKS_STEPS } from '@/constants/navigation'

const scopes = ref([{ id: 1, title: '', description: '' }])
let nextId = 2

function addScope() {
  scopes.value.push({ id: nextId++, title: '', description: '' })
}

function removeScope(id) {
  if (scopes.value.length === 1) return
  scopes.value = scopes.value.filter((item) => item.id !== id)
}
</script>

<template>
  <WizardPageLayout
    :breadcrumb="[{ label: 'Buat' }, { label: 'PKS' }]"
    title="PKS"
    subtitle="Formulir Pengajuan Mitra"
    :steps="PKS_STEPS"
    :current-step="3"
  >
    <h2 class="px-4 py-4 text-xl font-medium text-ink">Lingkup Pekerjaan</h2>

    <div class="space-y-4 px-4">
      <div
        v-for="(scope, index) in scopes"
        :key="scope.id"
        class="rounded-lg border border-surface-line p-4"
      >
        <div class="mb-3 flex items-center justify-between">
          <h3 class="font-medium text-ink">Lingkup {{ index + 1 }}</h3>
          <button
            v-if="scopes.length > 1"
            type="button"
            class="text-sm text-status-red hover:underline"
            @click="removeScope(scope.id)"
          >
            Hapus
          </button>
        </div>
        <label class="form-label">Judul <span class="text-status-red">*</span></label>
        <input
          v-model="scope.title"
          type="text"
          class="form-input mt-2"
          placeholder="Masukkan judul lingkup"
        />
        <label class="form-label mt-4 block">Deskripsi</label>
        <textarea
          v-model="scope.description"
          class="form-textarea mt-2"
          rows="3"
          placeholder="Masukkan deskripsi"
        />
      </div>
    </div>

    <button
      type="button"
      class="ml-4 mt-3 inline-flex items-center gap-2 rounded-lg border border-brand px-4 py-3 text-sm font-medium text-brand hover:bg-brand-soft"
      @click="addScope"
    >
      <span aria-hidden="true">+</span>
      Tambah Lingkup Pekerjaan
    </button>

    <FormNavButtons prev-to="/Rab" next-to="/Pkslainnya" />
  </WizardPageLayout>
</template>
