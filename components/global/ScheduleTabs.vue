<template>
  <section class="text-gray-900">
    <div class="container px-5 py-12 mx-auto flex flex-wrap flex-col">
      <div class="flex mx-auto flex-wrap mb-10">
        <button
          :class="{ 'border-indigo-500 bg-gray-100 rounded-t': selected === 0 }"
          class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none hover:text-gray-900 tracking-wider"
          @click="toggleTab(0)"
        >
          I - Course
        </button>
        <button
          :class="{ 'border-indigo-500 bg-gray-100': selected === 1 }"
          class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none hover:text-gray-900 tracking-wider"
          @click="toggleTab(1)"
        >
          II - Course
        </button>
        <button
          :class="{ 'border-indigo-500 bg-gray-100': selected === 2 }"
          class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none hover:text-gray-900 tracking-wider"
          @click="toggleTab(2)"
        >
          III - Course
        </button>
        <button
          :class="{ 'border-indigo-500 bg-gray-100': selected === 3 }"
          class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none hover:text-gray-900 tracking-wider"
          @click="toggleTab(3)"
        >
          IV - Course
        </button>
      </div>
      <div v-show="selected === 0" class="flex flex-col items-center text-center w-full">
        <a href="/page/967744/1/1-курс-актёр-1.pdf" download class="download-link">
          1-курс-актёр-1.pdf
        </a>
        <a href="/page/967744/1/1-косык-ойын-1.pdf" download class="download-link">
          1-косык-ойын-1.pdf
        </a>
        <a href="/page/967744/1/1-курс-вокал-1.pdf" download class="download-link">
          1-курс-вокал-1.pdf
        </a>
        <a href="/page/967744/1/1-курс-драматургия-1.pdf" download class="download-link">
          1-курс-драматургия-1.pdf
        </a>
        <a href="/page/967744/1/1-курс-кинотелеоператор-1.pdf" download class="download-link">
          1-курс-кинотелеоператор-1.pdf
        </a>
        <a href="/page/967744/1/1-курс-китапхана-1.pdf" download class="download-link">
          1-курс-китапхана-1.pdf
        </a>
        <a href="/page/967744/1/1-курс-маденият-1.pdf" download class="download-link">
          1-курс-маденият-1.pdf
        </a>
        <a href="/page/967744/1/1-курс-режиссёр-1.pdf" download class="download-link">
          1-курс-режиссёр-1.pdf
        </a>
        <a href="/page/967744/1/1-курс-сес-1.pdf" download class="download-link">
          1-курс-сес-1.pdf
        </a>
      </div>
      <div v-show="selected === 1" class="flex flex-col items-center text-center w-full">
        <a href="/page/967744/2/2-Курс-актёр.pdf" download class="download-link">
          2-Курс-актёр.pdf
        </a>
        <a href="/page/967744/2/2-Китапхана.pdf" download class="download-link">
          2-Китапхана.pdf
        </a>
        <a href="/page/967744/2/2-курс-Драматургия.pdf" download class="download-link">
          2-курс-Драматургия.pdf
        </a>
        <a href="/page/967744/2/2-курс-маденият.pdf" download class="download-link">
          2-курс-маденият.pdf
        </a>
        <a href="/page/967744/2/2-курс-Оператор.pdf" download class="download-link">
          2-курс-Оператор.pdf
        </a>
        <a href="/page/967744/2/2-Курс-сазаспаб.pdf" download class="download-link">
          2-Курс-сазаспаб.pdf
        </a>
        <a href="/page/967744/2/2-курс-СЕС.pdf" download class="download-link">
          2-курс-СЕС.pdf
        </a>
        <a href="/page/967744/2/2-ТВ-реж.pdf" download class="download-link"> 2-ТВ-реж.pdf </a>
      </div>
      <div v-show="selected === 2" class="flex flex-col items-center text-center w-full">
        <a href="/page/967744/3/3-курс-Драм-кино.pdf" download class="download-link">
          3-курс-Драм-кино
        </a>
        <a href="/page/967744/3/3-курс-Вокал.pdf" download class="download-link">
          3-курс-Вокал.pdf
        </a>
        <a href="/page/967744/3/3-курс-Драматургия.pdf" download class="download-link">
          3-курс-Драматургия.pdf
        </a>
        <a href="/page/967744/3/3-курс-Китапхана.pdf" download class="download-link">
          3-курс-Китапхана.pdf
        </a>
        <a href="/page/967744/3/3-курс-Кууыршак.pdf" download class="download-link">
          3-курс-Кууыршак.pdf
        </a>
        <a href="/page/967744/3/3-курс-Маденият.pdf" download class="download-link">
          3-курс-Маденият.pdf
        </a>
        <a href="/page/967744/3/3-курс-Оператор.pdf" download class="download-link">
          3-курс-Оператор.pdf
        </a>
        <a href="/page/967744/3/3-курс-Сес.pdf" download class="download-link">
          3-курс-Сес.pdf
        </a>
      </div>
      <div v-show="selected === 3" class="flex flex-col items-center text-center w-full">
        <a href="/page/967744/4/4-курс-Актёр.pdf" download class="download-link">
          4-курс-Актёр
        </a>
        <a href="/page/967744/4/4-курс-Драм-реж.pdf" download class="download-link">
          4-курс-Драм-реж.pdf
        </a>
        <a href="/page/967744/4/4-курс-Маденият.pdf" download class="download-link">
          4-курс-Маденият.pdf
        </a>
        <a href="/page/967744/4/4-курс-Сес.pdf" download class="download-link">
          4-курс-Сес.pdf
        </a>
        <a href="/page/967744/4/4-курс-Фолклор.pdf" download class="download-link">
          4-курс-Фолклор.pdf
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ScheduleTabs',
  data: () => ({
    selected: 0,
  }),
  methods: {
    toggleTab(index) {
      this.selected = index
    },
  },
}
</script>

<style lang="postcss" scoped>
button {
  outline: none;
}

.download-link {
  @apply no-underline bg-blue-500 font-semibold py-2 px-4 rounded mb-6 w-full;

  &:hover {
    @apply bg-blue-300;
  }

  @screen sm {
    @apply w-auto;
  }
}
</style>
