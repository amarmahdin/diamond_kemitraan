<script setup>
import ApprovalTabs from '@/components/ui/ApprovalTabs.vue'
import SubmissionListView from '@/components/table/SubmissionListView.vue'
import { approvalDisetujuiRows } from '@/data/submissions'
import { APPROVAL_STATUS_OPTIONS } from '@/utils/status'

const columns = [
  { key: 'id', label: 'No.', width: '74px' },
  { key: 'title', label: 'Judul', width: '280px' },
  { key: 'code', label: 'No Pengajuan', width: '130px' },
  { key: 'type', label: 'Tipe', width: '90px' },
  { key: 'pelaksana', label: 'Pelaksana', width: '120px' },
  { key: 'status', label: 'Status', type: 'badge', width: '120px' },
  { key: 'statusAp', label: 'Approval', type: 'badge', width: '140px' },
]
</script>

<template>
  <SubmissionListView
    title="Approval"
    subtitle="Pengajuan Disetujui"
    :breadcrumb="[{ label: 'Approval' }, { label: 'Disetujui' }]"
    :rows="approvalDisetujuiRows"
    :columns="columns"
    :status-options="APPROVAL_STATUS_OPTIONS"
    detail-to="/Detailpengajuanadmin"
  >
    <template #before-table>
      <ApprovalTabs active="disetujui" />
    </template>
  </SubmissionListView>
</template>
