<template>
  <slot />
</template>

<script setup>
  import { provide } from 'vue';
  const settings = reactive({
    theme : 'light'
  })

  provide('settings', settings)

  watch(settings, settings => {
    console.log(settings.theme)
  })
</script>

<style lang="scss" scoped>

</style>
