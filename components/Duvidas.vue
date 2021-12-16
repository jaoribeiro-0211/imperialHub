<template>
  <div class="styleDuvidas" id="duvidas">
    <span class="subTitle" v-scroll-reveal.reset>Dúvidas</span>
    <div class="gridQuestion">
      <div class="imgQuestion" v-scroll-reveal.reset>
        <img class="imgStyle" src="/Duvidas.svg" alt="Dúvidas Imagem" />
      </div>
      <div class="textQuestion" v-scroll-reveal.reset>
        <v-expansion-panels dark>
          <v-expansion-panel v-for="(duvida, i) in duvidas" :key="i">
            <v-expansion-panel-header color="#394d68" class="pt-5 pb-5">
              <span class="titleDuvidas"> {{ duvida.title }}</span>
              <template v-slot:actions>
                <v-icon color="#0070f3"> $expand </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content color="#202938" class="panelContent">
              <span class="contentDuvidas"> {{ duvida.content }}</span>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      duvidas: [
        {
          title: "Posso conectar vários números em apenas uma conta?",
          content:
            "Sim, voce tem a liberdade de conectar quantos números quizer",
        },
        {
          title: "Oque acontece se meu telefone ficar sem internet?",
          content:
            "Os disparos em massa só ocorrerão se seu telefone estiver conectado a internet. Você é o responsável por manter seu telefone carregado, ligado e conectado à internet.",
        },
        {
          title:
            "Porque não posso usar o whatsapp web ao mesmo tempo que disparo as mensagens em massa?",
          content:
            "Pois do contrário nosso robo não será capaz de capaz de realizar os envios, por conta da politica do whatsapp.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.styleDuvidas {
  text-align: center;
  max-width: 1200px;
  width: 90%;
  margin: 0px auto;
  padding: 160px 0px 160px 0px;
}
.subTitle {
  color: white;
  font-size: 2.225rem;
  font-family: var(--title-font);
  font-weight: bold;
  border-bottom: 2px solid #0070f3;
}
.gridQuestion {
  margin-top: 64px;
  display: grid;
  grid-template-areas: "imgQuestion textQuestion";
  gap: 16px;
}
.imgQuestion {
  grid-area: imgQuestion;
  width: 500px;
}
.imgStyle {
  width: 450px;
}
.textQuestion {
  grid-area: textQuestion;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.titleDuvidas {
  font-size: 1rem;
  font-family: var(--title-font);
  font-weight: 600;
}
.panelContent {
  background-color: blue;
  padding-top: 16px;
}
.contentDuvidas {
  font-size: 1rem;
  font-family: var(--body-font);
}
@media (max-width: 1024px) {
  .gridQuestion {
    margin-top: 64px;
    display: grid;
    grid-template-areas: "imgQuestion " "textQuestion";
    gap: 16px;
  }
  .imgQuestion {
    grid-area: imgQuestion;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }
  .imgStyle {
    width: 400px;
  }
}
@media (max-width: 768px) {
  .imgStyle {
    width: 350px;
  }
}
</style>