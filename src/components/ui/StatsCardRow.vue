<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="content-inner mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
    <div
      v-for="item in items"
      :key="item.label"
      class="flex h-[68px] items-center justify-between rounded-lg border border-white/20 px-4"
      :style="{ backgroundColor: item.color }"
    >
      <div>
        <p class="text-xs text-white">{{ item.label }}</p>
        <p class="text-2xl font-medium text-white">{{ item.value }}</p>
      </div>
      <img v-if="item.icon" :src="item.icon" alt="" class="h-10 w-10 object-contain" />
    </div>
  </div>
</template>
