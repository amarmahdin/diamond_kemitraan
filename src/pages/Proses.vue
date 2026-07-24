<script setup>
import SubmissionListView from '@/components/table/SubmissionListView.vue'
import { prosesRows } from '@/data/submissions'

const columns = [
  { key: 'id', label: 'No.', width: '74px' },
  { key: 'title', label: 'Judul', width: '320px' },
  { key: 'code', label: 'No Pengajuan', width: '130px' },
  { key: 'type', label: 'Tipe', width: '90px' },
  { key: 'progres', label: 'Progres', type: 'badge', width: '160px' },
]
</script>

<template>
  <SubmissionListView
    title="Proses"
    subtitle="Daftar Permintaan Kemitraan"
    :breadcrumb="[{ label: 'Proses' }]"
    :rows="prosesRows"
    :columns="columns"
    :show-status-filter="false"
    detail-to="/Detailproses"
  />
</template>
