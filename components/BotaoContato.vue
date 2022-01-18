<template>
  <button @click="contatoWhatsApp">
    <img
      v-show="iconButton == 'true'"
      src="/WhatsApp.svg"
      width="22px"
      alt="Logo WhatsApp"
    />{{ textButton }}
  </button>
</template>

<script>
export default {
  props: { textButton: String, iconButton: String },
  methods: {
    contatoWhatsApp() {
      window.location.href = `https://wa.me/${"5517981491818"}?text=Eu%20tenho%20interesse%20`;
    },
  },
};
</script>

<style scoped>
button {
  width: 300px;
  color: white;
  /* background-color: #0164d6; */
  background-image: linear-gradient(to right, #bd3aa4, #5062e3);
  padding: 15px;
  border-radius: 2rem;
  filter: drop-shadow(5px 5px 10px rgba(125, 81, 197, 0.25));
  transition: background-image 4s 2s;
  font-family: var(--body-font);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}
button:hover {
  background-image: linear-gradient(to right, #d643bb, #5b6df7);
}
button img {
  margin-right: 10px;
}
@media (max-width: 1024px) {
  button {
    font-size: 1rem;
    width: 300px;
  }
}
</style>