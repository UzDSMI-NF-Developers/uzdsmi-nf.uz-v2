<template>
  <Container>
    <Heading title="Rahbar qabuliga yozilish" />

    <form>
      <div class="pb-8">
        <vs-input
          type="text"
          label="Familiyasi, Ismi, Otasining ismi:"
          v-model="fullname"
          placeholder="Familiyasi, Ismi, Otasining ismi"
          block
        />
      </div>
      <div class="pb-8">
        <vs-input
          type="email"
          label="Elektron pochta:"
          v-model="email"
          placeholder="Elektron pochta"
          block
        />
      </div>
      <div class="pb-8">
        <vs-input
          type="text"
          label="Telefon:"
          v-model="phone"
          placeholder="Telefon"
          block
        />
      </div>
      <div class="pb-8">
        <label for="message">Xat mazmuni:</label>
        <textarea id="message" v-model="message" class="border border-gray-500 block rounded p-2 w-full"></textarea>
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
        fullname: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  }
</script>
