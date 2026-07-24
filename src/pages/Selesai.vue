<script setup>
import SubmissionListView from '@/components/table/SubmissionListView.vue'
import { selesaiRows } from '@/data/submissions'
import { DASHBOARD_STATUS_OPTIONS } from '@/utils/status'

const columns = [
  { key: 'id', label: 'No.', width: '74px' },
  { key: 'title', label: 'Judul', width: '280px' },
  { key: 'code', label: 'No Pengajuan', width: '130px' },
  { key: 'type', label: 'Tipe', width: '90px' },
  { key: 'startDate', label: 'Tanggal Pengajuan', width: '160px' },
  { key: 'endDate', label: 'Tanggal Selesai', width: '160px' },
  { key: 'status', label: 'Status', type: 'badge', width: '110px' },
]
</script>

<template>
  <SubmissionListView
    title="Selesai"
    subtitle="Daftar Permintaan yang Telah Selesai"
    :breadcrumb="[{ label: 'Selesai' }]"
    :rows="selesaiRows"
    :columns="columns"
    :status-options="DASHBOARD_STATUS_OPTIONS"
    detail-to="/DetailMoU"
  />
</template>
