<template>
  <div class="stylePreco" id="preco">
    <span class="subTitle" v-scroll-reveal.reset="{ delay: 250 }">Preço</span>
    <p class="description" v-scroll-reveal.reset>
      Aqui você não precisa realizar a contratação de planos mensais, nem manter
      um fluxo pré determinado de envio, basta adquirir um pacote e começar a
      usar.
    </p>
    <div class="table" v-scroll-reveal.reset>
      <v-simple-table class="tablePrice" dark style="background-color: #394d68">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center fr-1">Pacotes</th>
              <th class="text-center fr-1">1K</th>
              <th class="text-center fr-1">30K</th>
              <th class="text-center fr-1">100K</th>
              <th class="text-center fr-1">250K</th>
              <th class="text-center fr-1">+250K</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.pacote }}</td>
              <td>{{ item.pacote1 }}</td>
              <td>{{ item.pacote30 }}</td>
              <td>{{ item.pacote100 }}</td>
              <td>{{ item.pacote250 }}</td>
              <td>{{ item.pacotePlus250 }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <p class="titlePrice">Simulação de preços</p>
    <div style="width: 60%">
      <v-slider
        v-model="qtdMsg"
        max="250000"
        min="0"
        thumb-label="always"
        step="1000"
        thumb-size="45"
      ></v-slider>
    </div>
    <p class="priceDescription">( {{ qtdMsg2 }} x R$ {{ priceUnitary }} )</p>
    <p class="price">R$ {{ price }}</p>
    <!--  <button class="btnContanto">Entrar em contato</button> -->
    <BotaoContato
      textButton="Agende uma demonstração"
      style="margin-top: 32px"
    />
  </div>
</template>

<script>
import BotaoContato from "./BotaoContato.vue";
export default {
  components: { BotaoContato },
  mounted() {
    this.qtdMsg2 = this.qtdMsg.toLocaleString("pt-br", {
      minimumFractionDigits: 0,
    });
  },
  data() {
    return {
      price: 0.09,
      priceUnitary: 0.09,
      qtdMsg: "1000",
      qtdMsg2: null,
      desserts: [
        {
          pacote: "Quantidade",
          pacote1: "1.000",
          pacote30: "30.000",
          pacote100: "100.000",
          pacote250: "250.000",
          pacotePlus250: "+250.000",
        },
        {
          pacote: "Preço Crédito",
          pacote1: "R$ 0,09",
          pacote30: "R$ 0,07",
          pacote100: "R$ 0,06",
          pacote250: "R$ 0,05",
          pacotePlus250: "Consulte",
        },
      ],
    };
  },
  methods: {
    formatarValor() {
      this.qtdMsg2 = this.qtdMsg.toLocaleString("pt-br", {
        minimumFractionDigits: 0,
      });
    },
  },
  watch: {
    qtdMsg() {
      if (this.qtdMsg >= 0 && this.qtdMsg < 30000) {
        this.price = `${Math.round(0.09 * this.qtdMsg).toLocaleString("pt-br", {
          minimumFractionDigits: 2,
        })}`;
        this.formatarValor();

        this.priceUnitary = 0.09;
      } else if (this.qtdMsg >= 30000 && this.qtdMsg < 100000) {
        this.price = `${Math.round(0.07 * this.qtdMsg).toLocaleString("pt-br", {
          minimumFractionDigits: 2,
        })}`;
        this.formatarValor();
        this.priceUnitary = 0.07;
      } else if (this.qtdMsg >= 100000 && this.qtdMsg < 250000) {
        this.price = `${Math.round(0.06 * this.qtdMsg).toLocaleString("pt-br", {
          minimumFractionDigits: 2,
        })}`;
        this.formatarValor();
        this.priceUnitary = 0.06;
      } else if (this.qtdMsg >= 250000) {
        this.price = `${Math.round(0.05 * this.qtdMsg).toLocaleString("pt-br", {
          minimumFractionDigits: 2,
        })}`;
        this.formatarValor();
        this.priceUnitary = 0.05;
      }
    },
  },
};
</script>

<style scoped>
.stylePreco {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 160px; */
  max-width: 1200px;
  margin: 0px auto;
  padding: 100px 0px 100px 0px;
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
  font-family: var(--body-font);
}

.titlePrice {
  color: white;
  font-size: 1.125rem;
  margin: 32px 0px 64px 0px;
  font-weight: bold;
  font-family: var(--body-font);
}
@media (max-width: 768px) {
  .titlePrice {
    margin: 48px 0px 64px 0px;
  }
}
.priceDescription {
  font-family: var(--body-font);
  color: white;
  font-size: 1.2rem;
}
.price {
  font-family: var(--body-font);
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
}
.table {
  width: 100%;
}
.tablePrice {
  width: 90%;
  margin: 0 auto;
  color: white;
  font-family: var(--body-font);
  text-align: center;
  font-size: 1rem;
  background-color: #394d68;
}
.fr-1 {
  font-size: 1rem !important;
}

@media (max-width: 768px) {
  .tablePrice {
    display: none;
  }
  .description {
    margin: 2rem 0rem 1rem 0rem;
  }
}
/* .btnContanto {
  margin-top: 32px;
  width: 300px;
  color: white;
 
  background-image: linear-gradient(to right, #bd3aa4, #5062e3);
  padding: 15px;
  border-radius: 2rem;
  filter: drop-shadow(5px 5px 10px rgba(125, 81, 197, 0.25));
  transition: background-image 4s 2s;
  font-family: var(--body-font);
  font-weight: 600;
  font-size: 1rem;
}
.btnContanto:hover {
  background-image: linear-gradient(to right, #d643bb, #5b6df7);
} */
</style>