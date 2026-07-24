<script setup>
import PageBreadcrumb from '@/components/ui/PageBreadcrumb.vue'
import ContentCard from '@/components/ui/ContentCard.vue'

defineProps({
  breadcrumb: { type: Array, default: () => [] },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  progressLabel: { type: String, default: '' },
  progressTone: { type: String, default: 'warning' },
})

const tones = {
  warning: 'border-[#FFD064] bg-[#FFF6E1] text-[#FFB200]',
  success: 'border-[#8ADFC3] bg-[#E2FCF3] text-[#0EA976]',
  info: 'border-[#91BEF7] bg-[#E7F1FD] text-[#4791F2]',
  danger: 'border-[#FFB3B3] bg-[#FFECEC] text-[#FF5656]',
}
</script>

<template>
  <div>
    <PageBreadcrumb v-if="breadcrumb.length" :items="breadcrumb" />
    <div v-else class="h-topbar" />

    <ContentCard>
      <div class="flex flex-col gap-4 px-4 pt-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div class="flex items-center gap-1.5">
            <div class="page-title-bar" aria-hidden="true" />
            <h1 class="text-xl font-medium text-ink">{{ title }}</h1>
          </div>
          <p v-if="subtitle" class="mt-0.5 text-base text-ink-faint">{{ subtitle }}</p>
        </div>
        <div
          v-if="progressLabel"
          class="w-full max-w-[220px] overflow-hidden rounded-xl border sm:shrink-0"
          :class="tones[progressTone] || tones.warning"
        >
          <div class="px-4 py-1.5 text-[10px] font-medium text-ink">Progres Kemitraan</div>
          <div class="px-4 py-2 text-lg font-bold">{{ progressLabel }}</div>
        </div>
      </div>

      <div class="mt-4 space-y-4 px-4 pb-6">
        <slot />
      </div>

      <div v-if="$slots.actions" class="border-t border-surface-line px-4 py-4">
        <slot name="actions" />
      </div>
    </ContentCard>
  </div>
</template>
