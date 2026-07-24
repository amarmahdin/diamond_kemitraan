<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <nav class="flex h-topbar items-center gap-1 px-6" aria-label="Breadcrumb">
    <template v-for="(item, index) in items" :key="`${item.label}-${index}`">
      <router-link
        v-if="item.to && index < items.length - 1"
        :to="item.to"
        class="text-sm font-medium text-brand hover:underline"
      >
        {{ item.label }}
      </router-link>
      <span
        v-else-if="index < items.length - 1"
        class="text-sm font-medium text-brand"
      >
        {{ item.label }}
      </span>
      <span
        v-else
        class="text-sm font-medium text-ink-muted"
      >
        {{ item.label }}
      </span>

      <svg
        v-if="index < items.length - 1"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.2071 7.29289C11.5976 7.68342 11.5976 8.31658 11.2071 8.70711L6.20711 13.7071C5.81658 14.0976 5.18342 14.0976 4.79289 13.7071C4.40237 13.3166 4.40237 12.6834 4.79289 12.2929L9.08579 8L4.79289 3.70711C4.40237 3.31658 4.40237 2.68342 4.79289 2.29289C5.18342 1.90237 5.81658 1.90237 6.20711 2.29289L11.2071 7.29289Z"
          fill="#7F7F80"
        />
      </svg>
    </template>
  </nav>
</template>
