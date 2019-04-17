import Vue from 'vue';
import Router from 'vue-router';
import Users from '@/views/Users.vue';
import Posts from '@/views/Posts.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'users',
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
    {
      path: '/users/:userId/posts',
      name: 'posts',
      component: Posts,
    },
  ],
});
