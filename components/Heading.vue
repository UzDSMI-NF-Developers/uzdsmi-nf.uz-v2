<template>
  <div class="flex flex-col">
    <div class="h-1 bg-gray-200 rounded overflow-hidden">
      <div class="w-32 h-full bg-primary"></div>
    </div>
    <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
      <h2 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
        {{ title }}
      </h2>
      <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'description']
  }
</script>
