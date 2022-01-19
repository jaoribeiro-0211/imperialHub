<template>
  <div id="indexApp">
    <Navbar />
    <Inicio />
    <Sobre />
    <Preco />
    <Duvidas />
    <Contatos />
    <Footer />
    <a href="" class="buttomHome" @click="topScroll">
      <arrow-up-icon size="2x" class="custom-class"></arrow-up-icon>
    </a>
  </div>
</template>

<script>
import { ArrowUpIcon } from "vue-feather-icons";
export default {
  components: {
    ArrowUpIcon,
  },
  methods: {
    topScroll() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    const buttomHome = document.querySelector(".buttomHome");
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 400) {
        buttomHome.classList.add("show");
      } else {
        buttomHome.classList.remove("show");
      }
    });
  },
};
</script>

<style>
#indexApp {
  background-color: #202938;
  width: 100%;
  /*   height: 100vh; */
}
.buttomHome {
  background-color: #394d68;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 50%;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  transform: translateY(100%);
}
@media (max-width: 1024px) {
  .buttomHome {
    width: 45px;
    height: 45px;
    box-shadow: rgba(1, 100, 214, 0.466) 0px 2px 15px;
    border: 1px solid #0164d6;
  }
}
.buttomHome.show {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}
</style>
