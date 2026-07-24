<script setup>
import SubmissionDetailView from '@/components/detail/SubmissionDetailView.vue'
</script>

<template>
  <SubmissionDetailView
    back-to="/Proses"
    back-label="Proses"
    :show-rab="true"
    :show-timeline="true"
  />
</template>
