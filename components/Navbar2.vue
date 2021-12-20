<template>
  <header id="header">
    <nav class="container">
      <a class="logo" href="#">beauty<span>salon</span>.</a>
      <!-- menu -->
      <div class="menu">
        <ul class="grid">
          <li><a class="title" @click="link" href="#home">Início</a></li>
          <li><a class="title" @click="link" href="#about">Sobre</a></li>
          <li><a class="title" @click="link" href="#services">Serviços</a></li>
          <li>
            <a class="title" @click="link" href="#testimonials">Depoimentos</a>
          </li>
          <li><a class="title" @click="link" href="#contact">Contato</a></li>
        </ul>
      </div>
      <!-- /menu -->
      <div class="toggle icon-menu" @click="element">Abrir</div>
      <div class="toggle icon-close" @click="element">Fechar</div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    element() {
      const nav = document.querySelector("#header nav");
      const toggle = document.querySelectorAll("nav .toggle");

      nav.classList.toggle("show");
    },
    link() {
      const nav = document.querySelector("#header nav");
      const links = document.querySelectorAll("nav ul li a");

      nav.classList.remove("show");
    },
  },
};
</script>

<style scoped>
/*====  LAYOUT ============================ */
.container {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.grid {
  display: grid;
  gap: 2rem;
}

.section {
  padding: calc(5rem + var(--header-height)) 0;
}

.section .title {
  margin-bottom: 1rem;
}

.section .subtitle {
  font-size: var(--subtitle-font-size);
}

.section header {
  margin-bottom: 4rem;
}

.section header strong {
  color: var(--base-color);
}

#header {
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 2rem;
  display: flex;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: var(--body-color);
  width: 100%;
}

#header.scroll {
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
}

/*====  LOGO ============================ */
.logo {
  font: 700 1.31rem var(--title-font);
  color: var(--title-color);
}

.logo span {
  color: var(--base-color);
}

.logo-alt span {
  color: var(--body-color);
}

/*====  NAVIGATION ============================ */
nav {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

nav ul li {
  text-align: center;
}

nav ul li a {
  transition: color 0.2s;
  position: relative;
}

nav ul li a:hover,
nav ul li a.active {
  color: var(--base-color);
}

nav ul li a::after {
  content: "";
  width: 0%;
  height: 2px;
  background: var(--base-color);

  position: absolute;
  left: 0;
  bottom: -1.5rem;

  transition: width 0.2s;
}

nav ul li a:hover::after,
nav ul li a.active::after {
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

  background: var(--body-color);

  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;

  display: grid;
  place-content: center;
}

nav.show .menu ul {
  display: grid;
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

/*========= MEDIA QUERIES =========*/
/* extra large devices: 1200 > */
@media (min-width: 1200px) {
  /* reusable classes */
  .container {
    max-width: 1120px;
    margin-left: auto;
    margin-right: auto;
  }

  .section {
    padding: 10rem 0;
  }

  .section header,
  #testimonials header {
    max-width: 32rem;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .button {
    height: 3.125rem;
  }

  /* navigation */
  nav .menu {
    opacity: 1;
    visibility: visible;
    top: 0;
  }

  nav .menu ul {
    display: flex;
    gap: 2rem;
  }

  nav .menu ul li a.title {
    font: 400 1rem var(--body-font);
    -webkit-font-smoothing: antialiased;
  }

  nav .menu ul li a.title.active {
    font-weight: bold;
    -webkit-font-smoothing: auto;
  }

  nav .icon-menu {
    display: none;
  }

  /* layout */
  main {
    margin-top: var(--header-height);
  }

  /* home */
  #home .container {
    grid-auto-flow: column;
    justify-content: space-between;
    margin: 0 auto;
  }

  #home .image {
    order: 1;
  }

  #home .text {
    order: 0;
    max-width: 24rem;
    text-align: left;
  }

  /* about */
  #about .container {
    margin: 0 auto;
    grid-auto-flow: column;
  }

  /* services */
  .cards {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .card {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  /* testimonials */
  #testimonials .container {
    margin-left: auto;
    margin-right: auto;
  }

  /* contact */
  #contact .container {
    grid-auto-flow: column;
    align-items: center;
  }

  #contact .text {
    max-width: 25rem;
  }

  /* footer */
  footer.section {
    padding: 3.75rem 0;
  }

  footer .container {
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-between;
  }

  footer .logo {
    font-size: 2.25rem;
  }
}
/* large devices: 1023 > */
/* large devices: 992 > */
@media (min-width: 992px) {
  :root {
    --title-font-size: 2.25rem;
    --subtitle-font-size: 1.125rem;
  }
}
/* medium devices: 767 > */
</style>