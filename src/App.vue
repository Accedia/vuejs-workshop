<template>
  <div>

    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <!-- Todo - 1: Loop through each user using for key the id of the user (v-for in UserDetails) -->
        <!-- Todo - 2: Add the following input bindings to the UserDetails component: id, email, name -->
        <!--           Hint: use either `v-bind:` or `:` -->
        <!-- Todo - 7: Add event listener for the `edit` event and pass the recently created function `selectUserForEdit` as reference. -->
        <!--           Hint: user either `v-on` or `@` -->
        <UserDetails />
      </tbody>
    </table>

    <EditUserForm
      v-if="selectedUserId !== null"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { User } from './data/User';
import { users } from './data/users';
import UserDetails from './components/UserDetails.vue';

@Component({
  components: {
    UserDetails,
  }
})
export default class App extends Vue {
  private users: User[] = users;
  private selectedUserForEdit: User | null = null;

  /**
   * Todo - 6: Create a function `selectUserForEdit`, that will receive the user id as param
   *    This function should find the user with that id and save it in `selectedUserForEdit`
   *    Hint: Use .find function of ES6
   */
}
</script>

<style>
.table {
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 3px;
  border: 1px solid black;
}
</style>
