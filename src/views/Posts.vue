<template>
  <div>
    <h1>Posts for 
      <span class="username">
        <!-- TODO - 14: Display the username of the current user -->
      </span>
    </h1>
    <!-- TODO - 15: Create a link to the user list page 
      Use <router-link to="..."></router-link>
    -->

    <!-- TODO - 16: Add an article for each post. 
      Display the post title and post body.
      Use v-for.
    -->
    <article>
      <header></header>
      <section></section>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Post } from '@/models/Post';
import { PostService } from '../services/PostService';
import { User } from '../models/User';
import { UserService } from '../services/UserService';
import { Inject } from 'vue-typedi';

@Component
export default class PostsComponent extends Vue {
  private user: User = new User(0, '', '', '');
  private posts: Post[] = [];

  // TODO - 11: Inject properly the two services
  private postService!: PostService;
  private userService!: UserService;

  public mounted(): void {

    // TODO - 12: Retrieve all the posts for the current user
    // and assign the `posts` field to the result

    // TODO - 13: Retrieve the details of the current user
    // and assign the `user` field to the result
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
