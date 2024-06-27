<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template lang="">
  <div>
    <h1>New {{ route.params?.id }}</h1>
  </div>
</template>
