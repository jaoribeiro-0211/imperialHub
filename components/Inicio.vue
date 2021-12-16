<template>
  <div id="home">
    <div class="gridHome1" v-scroll-reveal.reset="{ delay: 100 }">
      <h1>
        DISPARO EM MASSA
        <span>
          <br />
          DE WHATSAPP</span
        >
      </h1>
      <p>
        Com a imperialhub voce aumenta seus lucros, disparando mensagens com uma
        <span>taxa de abertura acima de 95%.</span>
      </p>
      <button>Agende uma demonstração</button>
    </div>
    <div class="gridHome2" v-scroll-reveal.reset="{ delay: 250 }">
      <img src="/Robo Home.svg" class="imgRobo" alt="Robo Imagem" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
#home {
  width: 100%;
  display: grid;
  grid-template-areas: "gridHome1 gridHome2";
  grid-template-columns: 50% 50%;
  /*   grid-template-rows: 400px 400px; */
  /*  padding: 20px 40px; */
}
.gridHome1 {
  grid-area: gridHome1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
}
.gridHome1 h1 {
  color: white;
  font-size: 2.2rem;
}
.gridHome1 p {
  color: white;
  font-size: 1.125rem;
}
.gridHome1 p span {
  font-weight: bold;
}
.gridHome1 h1 span {
  color: #f0d10c;
}
.gridHome1 button {
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
}
.gridHome1 button:hover {
  background-image: linear-gradient(to right, #d643bb, #5b6df7);
}
.gridHome2 {
  grid-area: gridHome2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imgRobo {
  width: 400px;
}
@media (min-width: 1200px) {
  #home {
    max-width: 1200px;
    padding: 50px 80px 20px 80px;
    margin-top: calc(4.5rem + 2rem);
    margin-left: auto;
    margin-right: auto;
    grid-template-rows: 60vh;
  }
  .gridHome1 {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
  }
  .gridHome1 h1 {
    color: white;
    font-size: 2.5rem;
  }
  .gridHome1 p {
    color: white;
    font-size: 1.4rem;

    width: 80%;
  }
  .gridHome1 p span {
    font-weight: bold;
  }
  .gridHome1 h1 span {
    color: #f0d10c;
  }
}
@media (max-width: 1024px) {
  #home {
    width: 100%;
    margin-top: calc(4.5rem + 2rem);
    display: grid;
    grid-template-areas: "gridHome2" "gridHome1";
    grid-template-columns: 100% 100%;
    /* grid-template-rows: 350px 350px; */
    padding: 20px 40px;
    gap: 30px;
  }
  .imgRobo {
    width: 200px;
  }
  .gridHome1 {
    align-items: center;
    text-align: center;
  }
  .gridHome1 h1 {
    color: white;
    font-size: 2rem;
  }
  .gridHome1 p {
    font-size: 1.2rem;
  }
  .gridHome1 button {
    font-size: 1rem;
    width: 300px;
  }
}

@media (max-width: 350px) {
  .imgRobo {
    width: 240px;
  }
}
</style>