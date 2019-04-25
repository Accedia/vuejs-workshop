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
        <!-- TODO - 9: Add a row for each user. Display the following properties:
          1. Name
          2. Username
          3. Email
         -->
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <!-- TODO - 10: Add a link to the page displaying all the posts
              for the current user -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { User } from '../models/User';
import { UserService } from '../services/UserService';
import { Inject } from 'vue-typedi';

@Component
export default class UsersComponent extends Vue {
  private users: User[] = [];

  // TODO - 7: Properly inject the service
  private service!: UserService;

  public mounted(): void {
    // TODO - 8: Retrieve all users
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
