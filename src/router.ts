import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import UserDetails from './views/UserDetails.vue';
import UserList from './views/UserList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/users',
      name: 'userList',
      component: UserList,
    },
    {
      path: '/users/:id',
      name: 'userDetails',
      component: UserDetails,
    },
  ],
});
