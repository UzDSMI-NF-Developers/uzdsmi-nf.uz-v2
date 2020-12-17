<template>
  <Container>
    <Heading title="Oliy ma'lumot haqidagi diplomni tasdiqlash" />

    <form>
      <div class="pb-8">
        <vs-input
          type="number"
          label="B №:"
          v-model="bNomer"
          block
        />
      </div>
      <div class="pb-8">
        <vs-input
          type="text"
          label="Oqishga kirgan yili:"
          v-model="firstYear"
          block
        />
      </div>
      <div class="pb-8">
        <vs-input
          type="text"
          label="Oqishni bitirgan yili:"
          v-model="lastYear"
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
        bNomer: 0,
        firstYear: '',
        lastYear: ''
      }
    }
  }
</script>
