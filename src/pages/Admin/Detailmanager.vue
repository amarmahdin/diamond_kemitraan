<script setup>
import SubmissionDetailView from '@/components/detail/SubmissionDetailView.vue'
</script>

<template>
  <SubmissionDetailView
    back-to="/Approvalpengajuanbaru"
    back-label="Approval"
    progress-tone="warning"
    actions-mode="approval"
    :show-rab="true"
    :show-timeline="true"
  />
</template>
