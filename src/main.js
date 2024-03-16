import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "primevue/resources/themes/aura-light-green/theme.css";
import VueApexCharts from "vue3-apexcharts";

createApp(App).use(router).use(VueApexCharts).mount("#app");
