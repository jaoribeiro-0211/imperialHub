<template>
  <div class="styleSobre" id="sobre">
    <span class="subTitle">SOBRE</span>
    <p class="description">
      Os recursos da imperialHub estão em constante expansão e são divididos em
      três grandes categorias.
    </p>
    <div class="gridSobre">
      <div class="gridWifi card" v-scroll-reveal.reset="{ delay: 100 }">
        <wifi-icon size="3x" class="icon_costum"></wifi-icon>
        <span>Conecte seu WhatsApp</span>
        <p>
          Sincronize com seu smartphone através do QR Code no painel e pronto, é
          só começar a disparar menssagens. Tudo de forma simples, segura e com
          privacidade!
        </p>
      </div>
      <div class="gridCampanha card" v-scroll-reveal.reset="{ delay: 200 }">
        <list-icon size="3x" class="icon_costum"></list-icon>
        <span>Multiplas campanhas</span>
        <p>Ganhe agilidade ao ter vários Whatsapps disparando mensagens.</p>
      </div>
      <div class="gridIntervalo card" v-scroll-reveal.reset="{ delay: 100 }">
        <clock-icon size="3x" class="icon_costum"></clock-icon>
        <span>Intervalos Definidos</span>
        <p>Você consegue definir o intervalo de envios entre as mensagens.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { WifiIcon, ListIcon, ClockIcon } from "vue-feather-icons";
export default {
  components: {
    WifiIcon,
    ListIcon,
    ClockIcon,
  },
};
</script>

<style scoped>
.styleSobre {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 130px 0px 160px 0px;
}
.subTitle {
  color: white;
  font-size: 2.225rem;
  font-family: var(--title-font);
  font-weight: bold;
  margin-top: 3rem;
  border-bottom: 2px solid #0070f3;
}
.description {
  margin: 2rem 0rem 3rem 0rem;
  color: white;
  font-size: 1.3rem;
  text-align: center;
  width: 90%;
}
.gridSobre {
  display: grid;
  grid-template-areas: "gridCampanha gridWifi  gridIntervalo";
  grid-template-columns: 340px 340px 340px;
  /*  grid-template-rows: 362px 320px 362px; */
  gap: 32px;
  max-width: 1200px;
}
.gridWifi {
  grid-area: gridWifi;
  height: 330px;
}
.gridCampanha {
  grid-area: gridCampanha;
  height: 250px;
  margin-top: 40px;
}
.gridIntervalo {
  grid-area: gridIntervalo;
  height: 250px;
  margin-top: 40px;
}
.card {
  background-color: #394d68;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  border-bottom: 2px solid #0070f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0rem 2rem;
  color: white;
  text-align: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: transform 0.2s;
  cursor: pointer;
}
.card:hover {
  transform: scale(1.1);
}
.card span {
  margin: 1.5rem 0rem 1rem 0rem;
  font-size: 1.5rem;
  font-family: var(--title-font);
  font-weight: bold;
}
.card p {
  font-size: 1rem;
  font-family: var(--body-font);
}

.icon_costum {
  color: #0070f3;
}

@media (max-width: 1200px) {
  .styleSobre {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-bottom: 300px; */
  }
  .description {
    margin: 2rem 0rem 0rem 0rem;
    color: white;
    font-size: 1.3rem;
    text-align: center;
    width: 90%;
  }
  .gridSobre {
    display: grid;
    grid-template-areas: ". gridCampanha ." ". gridWifi ." ". gridIntervalo .";
    grid-template-columns: 90% 90% 90%;
    gap: 2rem;
    max-width: 1200px;
    justify-content: center;
    align-items: center;
  }
  .gridCampanha {
    margin-top: 40px;
  }
  .gridIntervalo {
    margin-top: 0px;
  }
}
</style>