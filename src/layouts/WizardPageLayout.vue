<script setup>
import PageBreadcrumb from '@/components/ui/PageBreadcrumb.vue'
import PageHeader from '@/components/ui/PageHeader.vue'
import ContentCard from '@/components/ui/ContentCard.vue'
import WizardStepper from '@/components/ui/WizardStepper.vue'

defineProps({
  breadcrumb: {
    type: Array,
    default: () => [],
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  steps: {
    type: Array,
    default: null,
  },
  currentStep: {
    type: Number,
    default: 1,
  },
})
</script>

<template>
  <div>
    <PageBreadcrumb v-if="breadcrumb.length" :items="breadcrumb" />
    <div v-else class="h-topbar" />

    <ContentCard>
      <PageHeader :title="title" :subtitle="subtitle" />
      <WizardStepper v-if="steps?.length" :steps="steps" :current="currentStep" />
      <div class="mt-2">
        <slot />
      </div>
    </ContentCard>
  </div>
</template>
