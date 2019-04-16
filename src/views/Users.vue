<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>
            <router-link :to="{ name: 'posts', params: { userId: user.id } }">
              View posts
            </router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Inject } from 'vue-typedi';
import { User } from '../models/User';
import { UserService } from '../services/UserService';

@Component
export default class UsersComponent extends Vue {
  private users: User[] = [];

  @Inject()
  private service!: UserService;

  public mounted(): void {
    this.service.getAll()
      .then((users) => this.users = users);
  }
}
</script>

<style scoped>
  table {
    border-collapse: collapse;
  }

  th, td {
    padding: 3px;
    border: 1px solid black;
  }
</style>
