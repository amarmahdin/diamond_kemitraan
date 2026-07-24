<script setup>
import ProfileBanner from '@/components/ui/ProfileBanner.vue'
import StatsCardRow from '@/components/ui/StatsCardRow.vue'
import SubmissionListView from '@/components/table/SubmissionListView.vue'
import { dashboardRows } from '@/data/submissions'
import { DASHBOARD_STATUS_OPTIONS } from '@/utils/status'
import deliv from '@/assets/img/Delivered.png'
import deliv1 from '@/assets/img/Delivered1.png'
import deliv2 from '@/assets/img/Delivered2.png'
import deliv3 from '@/assets/img/Delivered3.png'
import deliv4 from '@/assets/img/Delivered4.png'

const stats = [
  { label: 'Total Permintaan', value: 32, color: '#5197F9', icon: deliv1 },
  { label: 'Total Diproses', value: 18, color: '#8C62FF', icon: deliv },
  { label: 'Total Direvisi', value: 2, color: '#FFA229', icon: deliv2 },
  { label: 'Total Ditolak', value: 4, color: '#FF5656', icon: deliv3 },
  { label: 'Total Selesai', value: 23, color: '#0EA976', icon: deliv4 },
]

const columns = [
  { key: 'id', label: 'No.', width: '74px' },
  { key: 'title', label: 'Judul', width: '268px' },
  { key: 'code', label: 'No Pengajuan', width: '130px' },
  { key: 'type', label: 'Tipe', width: '87px' },
  { key: 'startDate', label: 'Tanggal Pengajuan', width: '172px' },
  { key: 'endDate', label: 'Tanggal PKS Selesai', width: '172px' },
  { key: 'status', label: 'Status', type: 'badge', width: '97px' },
]
</script>

<template>
  <SubmissionListView
    title="Dashboard"
    subtitle="Dashboard User"
    :rows="dashboardRows"
    :columns="columns"
    :status-options="DASHBOARD_STATUS_OPTIONS"
    :show-date-filter="true"
    detail-to="/Detailproses"
  >
    <template #before-table>
      <ProfileBanner />
      <StatsCardRow :items="stats" />
    </template>
  </SubmissionListView>
</template>
