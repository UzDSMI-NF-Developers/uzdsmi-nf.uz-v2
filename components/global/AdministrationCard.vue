<template>
  <div
    class="w-full md:max-w-xl mx-auto rounded overflow-hidden shadow-lg mb-10 text-center administration-card"
  >
    <img class="w-64 mx-auto" :src="photo" :alt="fullName" />
    <div class="px-6 py-4">
      <h3 class="font-bold mb-4">
        {{ fullName }}
      </h3>
      <div class="text-gray-700 text-base">
        <slot></slot>
      </div>
    </div>
    <div class="px-6 pt-4 pb-2 flex justify-center">
      <a
        class="inline-block bg-blue-500 rounded-md px-3 py-1 font-semibold mr-2 mb-2"
        :href="'tel:' + phone"
      >
        {{ phone }}
      </a>
      <a
        class="inline-block bg-blue-500 rounded-md px-3 py-1 font-semibold mr-2 mb-2"
        :href="'mailto:' + email"
      >
        {{ email }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdministrationCard',
  props: {
    fullName: {
      type: String,
      default: '',
    },
    photo: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.administration-card h3 {
  margin: 0;
}

.administration-card p {
  margin: 0;
}

.administration-card a {
  text-decoration: none;
}
</style>
