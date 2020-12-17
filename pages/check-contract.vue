<template>
  <Container>
    <Heading title="To'lov-kontrakt miqdorini aniqlash " />

    <form>
      <div class="pb-8">
        <vs-input
          type="number"
          label="Student ID nomeri:"
          v-model="studentIdNomeri"
          placeholder="ID nomerni kiriting"
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
        studentIdNomeri: 0
      }
    }
  }
</script>
