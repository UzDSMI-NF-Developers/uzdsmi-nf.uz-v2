<template>
  <nav class="flex">
    <vs-button
      icon
      v-if="pagination.prevPage"
      @click="$emit('prev')"
    >
      <i class='bx bxs-left-arrow-alt'></i>
    </vs-button>
    <vs-button icon v-else disabled>
      <i class='bx bxs-left-arrow-alt'></i>
    </vs-button>

    <vs-button
      icon
      v-if="pagination.nextPage"
      @click="$emit('next')"
    >
      <i class='bx bxs-right-arrow-alt'></i>
    </vs-button>
    <vs-button icon v-else disabled>
      <i class='bx bxs-right-arrow-alt'></i>
    </vs-button>
  </nav>
</template>

<script>
  export default {
    props: ['pagination'],
  }
</script>
