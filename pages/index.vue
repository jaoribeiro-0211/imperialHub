<template>
  <div id="indexApp">
    <Navbar />
    <Inicio />
    <Sobre />
    <Preco />
    <Duvidas />
    <Contatos />
    <Footer />
    <a href="#home" class="buttomHome">
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
  z-index: 999;
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
.buttomHome.show {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}
:target {
  scroll-margin-top: 1rem;
}
</style>
