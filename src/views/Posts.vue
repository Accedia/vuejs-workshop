<template>
  <div>
    <h1>Posts for <span class="username">{{ user.username }}</span></h1>
    <router-link to="/users">Back to users</router-link>

    <article v-for="post in posts" :key="post.id">
      <header>{{ post.title }}</header>
      <section>{{ post.body }}</section>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Post } from '@/models/Post';
import { PostService } from '../services/PostService';
import { Inject } from 'vue-typedi';
import { User } from '../models/User';
import { UserService } from '../services/UserService';

@Component
export default class PostsComponent extends Vue {
  private user: User = new User(0, '', '', '');
  private posts: Post[] = [];

  @Inject()
  private postService!: PostService;

  @Inject()
  private userService!: UserService

  public mounted(): void {
    const userId: number = parseInt(this.$route.params.userId);

    this.postService.getByUser(userId)
      .then((posts) => this.posts = posts);

    this.userService.getById(userId)
      .then((user) => this.user = user);
  }
}
</script>

<style scoped>
  article {
    margin-bottom: 2rem;
    text-align: left;
  }

  header {
    font-size: 2rem;
    font-weight: bold;
  }

  .username {
    color: red;
  }
</style>



