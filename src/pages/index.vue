<script setup lang="ts"></script>

<template lang="">
  <div>
    <h1>Home Page</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to Projects 1</RouterLink>
  </div>
</template>

<style lang=""></style>
