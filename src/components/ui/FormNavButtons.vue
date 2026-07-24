<script setup>
defineProps({
  prevTo: {
    type: String,
    default: '',
  },
  nextTo: {
    type: String,
    default: '',
  },
  nextLabel: {
    type: String,
    default: 'Selanjutnya',
  },
  prevLabel: {
    type: String,
    default: 'Sebelumnya',
  },
})
</script>

<template>
  <div class="mt-10 flex flex-wrap justify-end gap-3 border-t border-surface-line px-4 py-4 sm:px-6">
    <router-link v-if="prevTo" :to="prevTo">
      <button type="button" class="btn-outline h-12 w-[107px] text-sm">
        {{ prevLabel }}
      </button>
    </router-link>
    <router-link v-if="nextTo" :to="nextTo">
      <button type="button" class="btn-primary h-12 w-[107px] text-sm">
        {{ nextLabel }}
      </button>
    </router-link>
    <slot />
  </div>
</template>
