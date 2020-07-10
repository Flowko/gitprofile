import Vue from 'vue';
import App from './App.vue';
import Header from './components/Header.vue';
import RepoCharts from './components/RepoCharts.vue';
import ReposFilter from './components/ReposFilter.vue';
import router from './routes';
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';
//import 'bootstrap';

import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css';

Vue.use(Chartkick.use(Chart));

Vue.component('profile-header',Header);
Vue.component('repo-charts',RepoCharts);
Vue.component('repos-filter',ReposFilter);
Vue.component("v-select", vSelect);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
