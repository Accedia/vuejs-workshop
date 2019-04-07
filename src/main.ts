import 'reflect-metadata';
import Vue from 'vue';
import VueTypedi from 'vue-typedi';
import App from './App.vue';

Vue.use(VueTypedi);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
