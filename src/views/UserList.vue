<template>
<div>
  <h1>Users</h1>

  <table>
    <thead>
      <th>ID</th>
      <th>Name</th>
      <th></th>
    </thead>

    <tbody>
      <tr v-for="user in users" v-bind:key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>
          <router-link :to="{ name: 'userDetails', params: { id: user.id } }">
            View details
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import UsersService from '../services/UsersService';
import { User } from '@/data/data';

@Component
export default class UserList extends Vue {
  private service: UsersService = new UsersService();
  private users: User[] = [];

  private mounted(): void {
    this.users = this.service.getAll();
  }
}
</script>

<style scoped>
  table {
    margin: auto;
  }
</style>


