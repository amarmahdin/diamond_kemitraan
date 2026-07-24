<script setup>
import { computed, ref, watch } from 'vue'

const emit = defineEmits(['date-selected', 'update:modelValue'])

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const years = Array.from({ length: 21 }, (_, i) => new Date().getFullYear() - 6 + i)

const today = new Date()
const selectedYear = ref(today.getFullYear())
const selectedMonth = ref(today.getMonth())
const selectedDay = ref(today.getDate())
const showMonths = ref(false)
const showYears = ref(false)

const calendar = computed(() => {
  const firstDay = new Date(selectedYear.value, selectedMonth.value, 1).getDay()
  const daysInMonth = new Date(selectedYear.value, selectedMonth.value + 1, 0).getDate()
  const weeks = []
  let week = Array(firstDay).fill('')

  for (let day = 1; day <= daysInMonth; day += 1) {
    week.push(day)
    if (week.length === 7) {
      weeks.push(week)
      week = []
    }
  }

  if (week.length) {
    while (week.length < 7) week.push('')
    weeks.push(week)
  }

  return weeks
})

watch([selectedYear, selectedMonth], () => {
  showMonths.value = false
  showYears.value = false
})

function selectYear(year) {
  selectedYear.value = year
  showYears.value = false
}

function selectMonth(index) {
  selectedMonth.value = index
  showMonths.value = false
}

function selectDay(day) {
  if (!day) return
  selectedDay.value = day
}

function prevMonth() {
  if (selectedMonth.value === 0) {
    selectedMonth.value = 11
    selectedYear.value -= 1
  } else {
    selectedMonth.value -= 1
  }
}

function nextMonth() {
  if (selectedMonth.value === 11) {
    selectedMonth.value = 0
    selectedYear.value += 1
  } else {
    selectedMonth.value += 1
  }
}

function applyDate() {
  const iso = `${selectedYear.value}-${String(selectedMonth.value + 1).padStart(2, '0')}-${String(selectedDay.value).padStart(2, '0')}`
  emit('date-selected', selectedDay.value)
  emit('update:modelValue', iso)
}

function dayClass(day) {
  return day === selectedDay.value
    ? 'bg-brand rounded-lg text-white font-semibold'
    : 'text-ink'
}
</script>

<template>
  <div class="absolute w-[312px] rounded-lg border border-surface-line bg-white px-4 py-4 shadow-sm">
    <div class="mb-4">
      <p class="text-xs font-semibold text-ink-faint">{{ selectedYear }}</p>
      <h2 class="text-base font-semibold text-ink">
        {{ selectedDay }} {{ months[selectedMonth] }}
      </h2>
    </div>

    <div class="mb-3 flex items-center gap-4">
      <div class="relative">
        <button type="button" class="flex items-center gap-2 font-semibold text-ink" @click="showMonths = !showMonths">
          {{ months[selectedMonth] }}
          <span class="text-brand">▾</span>
        </button>
        <div v-show="showMonths" class="absolute z-10 mt-1 max-h-40 w-16 overflow-auto rounded border bg-white p-2 shadow">
          <button
            v-for="(month, index) in months"
            :key="month"
            type="button"
            class="block w-full text-left text-sm hover:text-brand"
            @click="selectMonth(index)"
          >
            {{ month }}
          </button>
        </div>
      </div>

      <div class="relative">
        <button type="button" class="flex items-center gap-2 font-semibold text-ink" @click="showYears = !showYears">
          {{ selectedYear }}
          <span class="text-brand">▾</span>
        </button>
        <div v-show="showYears" class="absolute z-10 mt-1 max-h-40 w-20 overflow-auto rounded border bg-white p-2 shadow">
          <button
            v-for="year in years"
            :key="year"
            type="button"
            class="block w-full text-left text-sm hover:text-brand"
            @click="selectYear(year)"
          >
            {{ year }}
          </button>
        </div>
      </div>

      <div class="ml-auto flex gap-2">
        <button type="button" class="flex h-6 w-6 items-center justify-center rounded bg-surface-line" @click="prevMonth">‹</button>
        <button type="button" class="flex h-6 w-6 items-center justify-center rounded bg-surface-line" @click="nextMonth">›</button>
      </div>
    </div>

    <div class="mb-2 grid grid-cols-7 gap-2 text-center text-sm">
      <span class="text-status-red">Sun</span>
      <span>Mon</span>
      <span>Tue</span>
      <span>Wed</span>
      <span>Thu</span>
      <span>Fri</span>
      <span>Sat</span>
    </div>

    <div class="grid grid-cols-7 gap-2">
      <template v-for="(week, weekIndex) in calendar" :key="weekIndex">
        <button
          v-for="(day, dayIndex) in week"
          :key="`${weekIndex}-${dayIndex}`"
          type="button"
          class="h-8 text-center text-sm"
          :class="day ? dayClass(day) : 'pointer-events-none'"
          :disabled="!day"
          @click="selectDay(day)"
        >
          {{ day }}
        </button>
      </template>
    </div>

    <div class="mt-4 flex justify-end">
      <button type="button" class="btn-primary h-10 w-[90px] text-sm" @click="applyDate">
        Terapkan
      </button>
    </div>
  </div>
</template>
