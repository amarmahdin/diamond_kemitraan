<script setup>
import { toRef } from 'vue'
import PageBreadcrumb from '@/components/ui/PageBreadcrumb.vue'
import PageHeader from '@/components/ui/PageHeader.vue'
import ContentCard from '@/components/ui/ContentCard.vue'
import SearchFilterBar from '@/components/table/SearchFilterBar.vue'
import DataTable from '@/components/table/DataTable.vue'
import TablePagination from '@/components/table/TablePagination.vue'
import { useDataTable } from '@/composables/useDataTable'
import { DOCUMENT_TYPES } from '@/utils/status'

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  breadcrumb: { type: Array, default: () => [] },
  rows: { type: Array, required: true },
  columns: { type: Array, required: true },
  statusOptions: { type: Array, default: () => [] },
  typeOptions: { type: Array, default: () => DOCUMENT_TYPES },
  statusKey: { type: String, default: 'status' },
  searchKeys: { type: Array, default: () => ['title', 'code'] },
  showStatusFilter: { type: Boolean, default: true },
  showDateFilter: { type: Boolean, default: false },
  detailTo: { type: [String, Function], default: '' },
  pageSize: { type: Number, default: 8 },
})

const {
  searchQuery,
  filterType,
  filterStatus,
  filterDate,
  currentPage,
  rowsPerPage,
  filteredRows,
  paginatedRows,
  paginationPages,
  toggleSort,
  setRowsPerPage,
  goToPage,
  clearType,
  clearStatus,
  clearDate,
} = useDataTable(toRef(props, 'rows'), {
  searchKeys: props.searchKeys,
  statusKey: props.statusKey,
  pageSize: props.pageSize,
})
</script>

<template>
  <div>
    <PageBreadcrumb v-if="breadcrumb.length" :items="breadcrumb" />
    <div v-else class="h-topbar" />

    <ContentCard>
      <PageHeader :title="title" :subtitle="subtitle" />
      <slot name="before-table" />

      <SearchFilterBar
        v-model:search-query="searchQuery"
        v-model:filter-type="filterType"
        v-model:filter-status="filterStatus"
        v-model:filter-date="filterDate"
        :type-options="typeOptions"
        :status-options="statusOptions"
        :show-status-filter="showStatusFilter"
        :show-date-filter="showDateFilter"
        @clear-type="clearType"
        @clear-status="clearStatus"
        @clear-date="clearDate"
      />

      <DataTable
        :columns="columns"
        :rows="paginatedRows"
        :detail-to="detailTo"
        @sort="toggleSort"
      />

      <TablePagination
        :total="filteredRows.length"
        :current-page="currentPage"
        :rows-per-page="rowsPerPage"
        :pages="paginationPages"
        @update:rows-per-page="setRowsPerPage"
        @go-to-page="goToPage"
      />
    </ContentCard>
  </div>
</template>
