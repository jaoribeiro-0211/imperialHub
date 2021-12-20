<template>
  <div>
    <v-divider dark></v-divider>
    <div class="footer">
      <img
        src="/Logo ImperialHub - Dark.svg"
        width="200px"
        alt=""
        v-scroll-reveal.reset
      />
      <p>© {{ new Date().getFullYear() }} ImperialHub</p>
      <p>Todos os direitos reservados.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 24px 0px 24px 0px;
  color: white;
  font-family: var(--body-font);
  font-size: 1rem;
}
.footer img {
  margin-bottom: 24px;
}
</style>