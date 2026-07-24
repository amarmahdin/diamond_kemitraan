<script setup>
import SubmissionDetailView from '@/components/detail/SubmissionDetailView.vue'
</script>

<template>
  <SubmissionDetailView
    back-to="/Selesai"
    back-label="Selesai"
    progress-tone="success"
    :show-rab="true"
    :show-timeline="true"
  />
</template>
