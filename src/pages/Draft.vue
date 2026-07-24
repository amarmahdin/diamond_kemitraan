<script setup>
import SubmissionListView from '@/components/table/SubmissionListView.vue'
import { draftRows } from '@/data/submissions'
import { DRAFT_STATUS_OPTIONS } from '@/utils/status'

const columns = [
  { key: 'id', label: 'No.', width: '74px' },
  { key: 'title', label: 'Judul', width: '280px' },
  { key: 'code', label: 'No Pengajuan', width: '130px' },
  { key: 'type', label: 'Tipe', width: '90px' },
  { key: 'pelaksana', label: 'Pelaksana', width: '120px' },
  { key: 'status', label: 'Status', type: 'badge', width: '110px' },
  { key: 'statusAp', label: 'Approval', type: 'badge', width: '150px' },
]
</script>

<template>
  <SubmissionListView
    title="Draft"
    subtitle="Draft Surat Pengajuan Mitra"
    :breadcrumb="[{ label: 'Draft' }]"
    :rows="draftRows"
    :columns="columns"
    :status-options="DRAFT_STATUS_OPTIONS"
    status-key="statusAp"
    detail-to="/Detaildraft"
  />
</template>
