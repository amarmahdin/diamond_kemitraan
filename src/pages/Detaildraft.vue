<script setup>
import SubmissionDetailView from '@/components/detail/SubmissionDetailView.vue'
</script>

<template>
  <SubmissionDetailView
    back-to="/Draft"
    back-label="Draft"
    progress-tone="info"
    actions-mode="draft"
    :show-rab="true"
    :show-timeline="false"
  />
</template>
