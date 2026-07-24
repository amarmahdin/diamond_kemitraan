import { computed, ref, watch } from 'vue'

/**
 * Shared table state: search, filter, sort, pagination.
 * @param {import('vue').Ref|import('vue').ComputedRef|Array} sourceRows
 * @param {{
 *   searchKeys?: string[],
 *   typeKey?: string,
 *   statusKey?: string,
 *   dateKey?: string,
 *   pageSize?: number
 * }} [options]
 */
export function useDataTable(sourceRows, options = {}) {
  const {
    searchKeys = ['title'],
    typeKey = 'type',
    statusKey = 'status',
    dateKey = 'startDate',
    pageSize = 8,
  } = options

  const searchQuery = ref('')
  const filterType = ref('')
  const filterStatus = ref('')
  const filterDate = ref('')
  const currentPage = ref(1)
  const rowsPerPage = ref(pageSize)
  const sortKey = ref('id')
  const sortDir = ref('asc')

  const rows = computed(() => {
    const list = typeof sourceRows === 'function' ? sourceRows() : sourceRows.value ?? sourceRows
    return Array.isArray(list) ? list : []
  })

  const filteredRows = computed(() => {
    const query = searchQuery.value.trim().toLowerCase()

    let result = rows.value.filter((row) => {
      const typeOk = !filterType.value || row[typeKey] === filterType.value
      const statusOk = !filterStatus.value || row[statusKey] === filterStatus.value
      const dateOk =
        !filterDate.value ||
        String(row[dateKey] || '')
          .split('/')[0]
          ?.replace(/^0/, '') === String(filterDate.value).replace(/^0/, '')

      if (!typeOk || !statusOk || !dateOk) return false
      if (!query) return true

      return searchKeys.some((key) =>
        String(row[key] ?? '')
          .toLowerCase()
          .includes(query),
      )
    })

    const key = sortKey.value
    const dir = sortDir.value === 'asc' ? 1 : -1
    result = [...result].sort((a, b) => {
      const left = a[key]
      const right = b[key]
      if (typeof left === 'number' && typeof right === 'number') return (left - right) * dir
      return String(left ?? '').localeCompare(String(right ?? ''), 'id') * dir
    })

    return result
  })

  const totalPages = computed(() =>
    Math.max(1, Math.ceil(filteredRows.value.length / rowsPerPage.value)),
  )

  const paginatedRows = computed(() => {
    const start = (currentPage.value - 1) * rowsPerPage.value
    return filteredRows.value.slice(start, start + rowsPerPage.value)
  })

  const paginationPages = computed(() => {
    const total = totalPages.value
    if (total <= 1) return []
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)

    const page = currentPage.value
    if (page <= 4) return [1, 2, 3, 4, 5, '...', total]
    if (page > total - 4) return [1, '...', total - 4, total - 3, total - 2, total - 1, total]
    return [1, '...', page - 1, page, page + 1, '...', total]
  })

  const hasActiveFilters = computed(
    () => Boolean(filterType.value || filterStatus.value || filterDate.value),
  )

  watch([searchQuery, filterType, filterStatus, filterDate, rowsPerPage], () => {
    currentPage.value = 1
  })

  watch(totalPages, (total) => {
    if (currentPage.value > total) currentPage.value = total
  })

  function toggleSort(key) {
    if (sortKey.value === key) {
      sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc'
    } else {
      sortKey.value = key
      sortDir.value = 'asc'
    }
  }

  function setRowsPerPage(size) {
    rowsPerPage.value = Number(size)
  }

  function goToPage(page) {
    if (page === '...') return
    const next = Number(page)
    if (next >= 1 && next <= totalPages.value) currentPage.value = next
  }

  function clearType() {
    filterType.value = ''
  }

  function clearStatus() {
    filterStatus.value = ''
  }

  function clearDate() {
    filterDate.value = ''
  }

  function clearAllFilters() {
    filterType.value = ''
    filterStatus.value = ''
    filterDate.value = ''
  }

  return {
    searchQuery,
    filterType,
    filterStatus,
    filterDate,
    currentPage,
    rowsPerPage,
    sortKey,
    sortDir,
    filteredRows,
    paginatedRows,
    totalPages,
    paginationPages,
    hasActiveFilters,
    toggleSort,
    setRowsPerPage,
    goToPage,
    clearType,
    clearStatus,
    clearDate,
    clearAllFilters,
  }
}
