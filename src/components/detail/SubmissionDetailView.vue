<script setup>
import { ref } from 'vue'
import DetailPageLayout from '@/components/detail/DetailPageLayout.vue'
import DetailSection from '@/components/detail/DetailSection.vue'
import DetailField from '@/components/detail/DetailField.vue'
import { detailSubmission as data } from '@/data/detailSubmission'

defineProps({
  backTo: { type: String, default: '/Proses' },
  backLabel: { type: String, default: 'Proses' },
  showRab: { type: Boolean, default: true },
  showTimeline: { type: Boolean, default: true },
  progressTone: { type: String, default: 'warning' },
  actionsMode: {
    type: String,
    default: 'none', // none | draft | approval
  },
})

const openInfo = ref(true)
const openScope = ref(false)
const openRab = ref(false)
const openFiles = ref(false)
const openTimeline = ref(false)
</script>

<template>
  <DetailPageLayout
    :breadcrumb="[{ label: backLabel, to: backTo }, { label: 'Detail Pengajuan' }]"
    title="Detail Pengajuan"
    :subtitle="`#${data.id}`"
    :progress-label="data.progress"
    :progress-tone="progressTone"
  >
    <DetailSection v-model:open="openInfo" title="Informasi Umum" accent="#4791F2">
      <dl class="grid gap-5 sm:grid-cols-2">
        <DetailField label="No. Permintaan" :value="data.id" />
        <DetailField label="Metode Kemitraan" :value="data.method" />
        <DetailField label="Judul" :value="data.title" />
        <DetailField label="Jenis Material" :value="data.materialType" />
        <DetailField label="Nomor Anggaran" :value="data.budgetNumber" />
        <DetailField label="Jenis Barang" :value="data.goodsType" />
        <DetailField label="Tipe Anggaran" :value="data.budgetType" />
        <DetailField label="Pelaksana" :value="data.executor" />
        <DetailField label="Calon Mitra Bisnis" :value="data.partner" />
        <DetailField label="Tanggal" :value="data.date" />
        <DetailField label="Latar Belakang" :value="data.background" wide />
        <DetailField label="Catatan" :value="data.note" wide />
        <DetailField label="Dibuat Oleh" :value="data.createdBy" />
      </dl>
    </DetailSection>

    <DetailSection v-model:open="openScope" title="Lingkup Pekerjaan" accent="#FFA229">
      <p class="mb-3 text-sm text-ink">Calon Mitra Bisnis</p>
      <p class="mb-4 text-sm text-ink-muted">{{ data.partner }}</p>
      <div class="overflow-x-auto rounded-lg border border-surface-line">
        <table class="w-full min-w-[480px] text-left text-sm">
          <thead class="border-b border-surface-line text-xs text-ink-secondary">
            <tr>
              <th class="px-3 py-3">No.</th>
              <th class="px-3 py-3">Judul</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in data.scopes"
              :key="item.id"
              class="border-b border-surface-line text-ink"
            >
              <td class="px-3 py-3">{{ item.id }}</td>
              <td class="px-3 py-3">{{ item.title }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DetailSection>

    <DetailSection v-if="showRab" v-model:open="openRab" title="RAB" accent="#8C62FF">
      <div class="overflow-x-auto rounded-lg border border-surface-line">
        <table class="w-full min-w-[640px] text-left text-sm">
          <thead class="border-b border-surface-line text-xs text-ink-secondary">
            <tr>
              <th class="px-3 py-3">No.</th>
              <th class="px-3 py-3">Item</th>
              <th class="px-3 py-3">Qty</th>
              <th class="px-3 py-3">Satuan</th>
              <th class="px-3 py-3">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in data.rabItems"
              :key="item.id"
              class="border-b border-surface-line text-ink"
            >
              <td class="px-3 py-3">{{ item.id }}</td>
              <td class="px-3 py-3">{{ item.item }}</td>
              <td class="px-3 py-3">{{ item.qty }}</td>
              <td class="px-3 py-3">{{ item.unit }}</td>
              <td class="px-3 py-3">{{ item.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DetailSection>

    <DetailSection v-model:open="openFiles" title="Berkas" accent="#0EA976">
      <ul class="space-y-3">
        <li
          v-for="file in data.files"
          :key="file.id"
          class="flex items-center justify-between rounded-lg border border-surface-line px-4 py-3"
        >
          <div>
            <p class="text-sm font-medium text-ink">{{ file.name }}</p>
            <p class="text-xs text-ink-faint">{{ file.size }}</p>
          </div>
          <button type="button" class="text-sm font-medium text-brand hover:underline">Unduh</button>
        </li>
      </ul>
    </DetailSection>

    <DetailSection
      v-if="showTimeline"
      v-model:open="openTimeline"
      title="Progres"
      accent="#FF5656"
    >
      <ol class="space-y-4">
        <li
          v-for="step in data.timeline"
          :key="step.id"
          class="flex items-start gap-3"
        >
          <span
            class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
            :class="step.done ? 'bg-status-green' : 'bg-surface-line'"
          />
          <div>
            <p class="text-sm font-medium text-ink">{{ step.label }}</p>
            <p class="text-xs text-ink-faint">{{ step.date }}</p>
          </div>
        </li>
      </ol>
    </DetailSection>

    <template v-if="actionsMode !== 'none'" #actions>
      <div class="flex flex-wrap justify-end gap-3">
        <template v-if="actionsMode === 'draft'">
          <router-link to="/Draft">
            <button type="button" class="btn-outline h-11 px-5 text-sm">Kembali</button>
          </router-link>
          <button type="button" class="btn-primary h-11 px-5 text-sm">Kirim Pengajuan</button>
        </template>
        <template v-else-if="actionsMode === 'approval'">
          <button type="button" class="btn-outline h-11 border-status-red px-5 text-sm text-status-red">
            Tolak
          </button>
          <button type="button" class="btn-primary h-11 px-5 text-sm">Setujui</button>
        </template>
      </div>
    </template>
  </DetailPageLayout>
</template>
