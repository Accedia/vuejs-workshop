<template>
  <div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Inject } from 'vue-typedi';
// Services
import { LoggerService } from './services/LoggerService';
import { PostsService } from './services/PostsService';
// Models
import { Post } from './models/Post';
import { IPostsService, IPostsToken } from './services/IPostsService';

@Component
export default class App extends Vue {

  @Inject()
  private logger!: LoggerService;

  @Inject(IPostsToken)
  private postsService!: IPostsService;

  public mounted() {
    this.logger.log('Fetching posts');
    this.fetchPosts();
  }

  private async fetchPosts() {
    try {
      const posts: Post[] = await this.postsService.getPosts();
      this.logger.log(posts);
    } catch (e) {
      this.logger.error(e);
    }
  }
}
</script>
