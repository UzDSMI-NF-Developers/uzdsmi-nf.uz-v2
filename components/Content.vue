<template>
  <nuxt-content class="prose prose-sm lg:prose-lg xl:prose=xl nuxt-content max-w-none mt-10" :document="body" />
</template>

<script>
  export default {
    props: ['body']
  }
</script>

<style></style>
