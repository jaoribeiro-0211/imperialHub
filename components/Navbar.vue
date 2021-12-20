<template>
  <header id="header">
    <nav class="container">
      <img
        class="logoImperialHub"
        src="/Logo ImperialHub - Dark.svg"
        alt="ImperialHub"
      />
      <!-- menu -->
      <div class="menu">
        <ul class="grid">
          <li><a class="title" @click="listMenu" href="#home">Início</a></li>
          <li><a class="title" @click="listMenu" href="#sobre">Sobre</a></li>
          <li><a class="title" @click="listMenu" href="#preco">Preço</a></li>
          <li>
            <a class="title" @click="listMenu" href="#duvidas">Dúvidas</a>
          </li>
          <li>
            <a class="title" @click="listMenu" href="#contatos">Contatos</a>
          </li>
        </ul>
      </div>
      <!-- Menu mobile -->
      <div class="toggle icon-menu" @click="menu">
        <AlignJustifyIcon class="icon"></AlignJustifyIcon>
      </div>
      <div class="toggle icon-close" @click="menu">
        <XIcon class="icon"></XIcon>
      </div>
    </nav>
  </header>
</template>

<script>
import { AlignJustifyIcon, XIcon } from "vue-feather-icons";
export default {
  data() {
    return {};
  },
  methods: {
    menu() {
      /* Abrir Menu */
      const nav = document.querySelector("#header nav");
      const toggle = document.querySelectorAll("nav .toggle");

      nav.classList.toggle("show");
    },
    listMenu() {
      /* Fechar Menu */
      var navHide = document.querySelector("#header nav");
      const links = document.querySelectorAll("nav ul li a");
      navHide.classList.remove("show");
    },
  },
  components: {
    AlignJustifyIcon,
    XIcon,
  },
};
</script>

<style scoped>
.v-application .title {
  font-size: 1.1rem !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
  font-family: "Poppins", sans-serif !important;
}
/*====  LAYOUT ============================ */
.icon {
  color: white;
}
.icon:hover {
  color: #0070f3;
}

.logoImperialHub {
  width: 200px;
}

.grid {
  display: grid;
  gap: 2rem;
}
.container {
  max-width: 1200px;
}
#header {
  border-bottom: 1px solid #808080;
  margin-bottom: 2rem;
  display: flex;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: #202938;
  align-items: center;
  justify-content: center;
  padding: 12px;
}

#header.scroll {
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
}

/*====  NAVIGATION ============================ */
nav {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: var(--title-font);
}

nav ul li {
  text-align: center;
}

nav ul li a {
  color: white !important;
  transition: color 0.2s;
  position: relative;
}

nav ul li a:hover,
nav ul li a.active {
  color: #0070f3 !important;
}

nav ul li a::after {
  content: "";
  width: 0%;
  height: 2px;
  background: #0070f3;

  position: absolute;
  left: 0;
  bottom: -1.5rem;

  transition: width 0.2s;
}

nav ul li a:hover::after,
nav ul li a.active::after {
  color: #0070f3;
  width: 100%;
}

nav .menu {
  opacity: 0;
  visibility: hidden;
  top: -20rem;
  transition: 0.2s;
}

nav .menu ul {
  display: none;
}

/* Mostrar menu */
nav.show .menu {
  opacity: 1;
  visibility: visible;

  background: #202938;

  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;

  display: grid;
  place-content: center;
  font-family: var(--title-font);
}

nav.show .menu ul {
  display: grid;
  font-family: var(--title-font);
}

nav.show ul.grid {
  gap: 4rem;
}

/* toggle menu */
.toggle {
  color: var(--base-color);
  font-size: 1.5rem;
  cursor: pointer;
}

nav .icon-close {
  visibility: hidden;
  opacity: 0;

  position: absolute;
  top: -1.5rem;
  right: 1.5rem;

  transition: 0.2s;
}

nav.show div.icon-close {
  visibility: visible;
  opacity: 1;
  top: 1.5rem;
}

.v-application nav.show .title {
  font-size: 2.1rem !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
  font-family: "Poppins", sans-serif !important;
}

/*========= MEDIA QUERIES =========*/
/* extra large devices: 1200 > */
@media (min-width: 1200px) {
  /* navigation */
  nav .menu {
    opacity: 1;
    visibility: visible;
    top: 0;

    font-family: var(--title-font);
  }

  nav .menu ul {
    display: flex;
    gap: 2rem;
  }

  nav .menu ul li a.title {
    font: 400 rem var(--body-font);
    -webkit-font-smoothing: antialiased;
    font-family: var(--title-font);
  }

  nav .menu ul li a.title.active {
    font-weight: bold;
    -webkit-font-smoothing: auto;
  }

  nav .icon-menu {
    display: none;
  }
}
</style>