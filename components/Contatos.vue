<template>
  <div class="styleContatos" id="contatos">
    <!-- <span class="subTitle">Contatos</span> -->
    <div class="gridInfo">
      <div class="textContact">
        <p>
          Entre em contato <br />
          com a gente!
        </p>
        <span>
          Entre em contato com a imperialHub, <br />
          queremos tirar suas dúvidas, ouvir <br />
          suas críticas e sugestões.
        </span>
        <br />
        <!--   <button class="btnDuvidas">
          <img src="/WhatsApp.svg" width="22px" alt="Logo WhatsApp" />
          Entrar em contato
        </button> -->
        <BotaoContato
          textButton="Entrar em contato"
          iconButton="true"
          style="margin: 32px auto 0 auto"
        />
      </div>
      <div class="infoContact">
        <div class="tel" v-scroll-reveal.reset>
          <phone-icon size="1.5x" class="iconCustom"></phone-icon>
          <span> <a href="tel:17991077804">(017)99107-7804</a> </span>
        </div>
        <div class="email" v-scroll-reveal.reset="{ delay: 150 }">
          <mail-icon size="1.5x" class="iconCustom"></mail-icon>
          <span
            ><a href="mailto:imperialhub.whats@gmail.com"
              >imperialhub.whats@gmail.com</a
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PhoneIcon, MailIcon } from "vue-feather-icons";
import BotaoContato from "./BotaoContato.vue";
export default {
  components: {
    PhoneIcon,
    MailIcon,
    BotaoContato,
  },
};
</script>

<style scoped>
.styleContatos {
  width: 100%;
  max-width: 1200px;
  text-align: center;
  margin: 64px auto;
}
.subTitle {
  color: white;
  font-size: 2.225rem;
  font-family: var(--title-font);
  font-weight: bold;
  margin-top: 3rem;
  border-bottom: 2px solid #0070f3;
}
.gridInfo {
  display: grid;
  grid-template-areas: "textContact infoContact";
  grid-template-columns: 50% 50%;
  color: white;
  margin: 64px 0px 64px 0px;
}
.textContact {
  grid-area: textContact;
  text-align: center;
}
.textContact p {
  font-family: var(--title-font);
  font-size: 2.225rem;
  font-weight: bold;
}
.textContact span {
  font-family: var(--body-font);
  font-size: 1.125rem;
}
/* .btnDuvidas {
  width: 300px;
  color: white;
  
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
  margin: 32px auto 0 auto;
}
.btnDuvidas:hover {
  background-image: linear-gradient(to right, #d643bb, #5b6df7);
}
.btnDuvidas img {
  margin-right: 10px;
} */
.infoContact {
  grid-area: infoContact;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  font-family: var(--body-font);
  font-size: 1.125rem;
}
.tel {
  display: flex;
  align-items: center;
  justify-content: center;
}
.tel span {
  margin-left: 10px;
}
.email {
  display: flex;
  align-items: center;
  justify-content: center;
}
.email span {
  margin-left: 10px;
}
a {
  text-decoration: none;
  color: white;
}
.iconCustom {
  color: #0070f3;
}
@media (max-width: 768px) {
  .gridInfo {
    display: grid;
    grid-template-areas: "textContact " "infoContact";
    grid-template-columns: 100% 100%;
    color: white;
    margin: 64px 0px 64px 0px;
  }
  .infoContact {
    margin-top: 48px;
  }
}
</style>