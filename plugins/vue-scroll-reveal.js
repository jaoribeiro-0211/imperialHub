import Vue from "vue";
import VueScrollReveal from "vue-scroll-reveal";
/* Vue.use(VueScrollReveal); */

Vue.use(VueScrollReveal, {
  class: "v-scroll-reveal", // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
  interval: 100,
});
