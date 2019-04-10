import 'reflect-metadata';
import Vue from 'vue';
import VueTypedi, { Container } from 'vue-typedi';
import App from './App.vue';
import { PostsService } from './services/PostsService';
import { IPostsToken } from './services/IPostsService';

Vue.use(VueTypedi);

Vue.config.productionTip = false;

Container.set(IPostsToken, Container.get(PostsService));

new Vue({
  render: (h) => h(App),
}).$mount('#app');
