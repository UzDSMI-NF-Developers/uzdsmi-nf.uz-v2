<template>
  <Container>
    <Heading title="Talabalik haqida ma'lumotnoma olish" />

    <form>
      <div class="pb-8">
        <vs-input
          type="number"
          label="Reyting daftarchasi nomeri:"
          v-model="reytingNomer"
          placeholder="Reyting daftarchasi nomeri"
          block
        />
      </div>
      <div class="pb-8">
        <vs-input
          type="number"
          label="INN nomeri:"
          v-model="innNomer"
          placeholder="INN nomeri"
          block
        />
      </div>
      <div class="pb-8">
        <vs-button disabled>
          Yuborish
        </vs-button>
      </div>
    </form>
  </Container>
</template>

<script>
  export default {
    data() {
      return {
        reytingNomer: 0,
        innNomer: 0
      }
    }
  }
</script>
