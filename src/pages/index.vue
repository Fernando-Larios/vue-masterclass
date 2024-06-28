<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
;(async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) console.log({ error })

  return data
})()
</script>

<template lang="">
  <div>
    <h1>Home Page</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to Projects 1</RouterLink>
  </div>
</template>

<style lang=""></style>
