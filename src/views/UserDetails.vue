<template>
  <div>
    <h1>User Details</h1>

    <p>This is data for the user with ID {{ user.id }}</p>
    <dl>
      <dt>Name</dt>
      <dd>{{ user.name }}</dd>

      <dt>Age</dt>
      <dd>{{ user.age }}</dd>
    </dl>

    <button @click="backToList">Back to user list</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import UsersService from '../services/UsersService';
import { User } from '@/data/data';

@Component
export default class UserDetails extends Vue {
  private service: UsersService = new UsersService();
  private user: User = new User(0, '', 0);

  private mounted(): void {
    const userId: number = parseInt(this.$route.params.id, 10);
    this.user = this.service.get(userId);
  }

  private backToList(): void {
    this.$router.push({ name: 'userList' });
  }
}
</script>
