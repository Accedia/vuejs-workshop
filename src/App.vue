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
        <!-- Todo - 1: Loop through each user using for key the id of the user (v-for for UserDetails component) -->
        <!-- Todo - 2: Add the following input bindings to the UserDetails component: id, email, name -->
        <!--           Hint: use either `v-bind:` or `:` -->
        <!-- Todo - 7: Add event listener for the `edit` event and pass the recently created function `selectUserForEdit` as reference. -->
        <!--           Hint: user either `v-on:` or `@` -->
        <UserDetails />
      </tbody>
    </table>

    <!-- Todo - 8: Add the following input bindings to the EditUserForm component: id, email, name -->
    <!--           Hint: user either `v-bind:` or `:` -->
    <!-- Todo - 16: Add an `save` event listener passing as reference the `editUserDetails` function -->
    <!-- Todo - 17: Add an `cancel` event listener passing as reference the `cancelEdit` function -->
    <EditUserForm
      v-if="selectedUserForEdit !== null"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { User } from './data/User';
import { users } from './data/users';
import UserDetails from './components/UserDetails.vue';
import EditUserForm from './components/EditUserForm.vue';

@Component({
  components: {
    UserDetails,
    EditUserForm,
  },
})
export default class App extends Vue {
  private users: User[] = [];
  private selectedUserForEdit: User | null = null;

  /**
   * Todo - 0: Use the Vue lifecycle hook `mounted` to initialize the `users` variable
   *           Use the already imported list
   */

  /**
   * Todo - 6: Create a function `selectUserForEdit`, that will receive the user id as param
   *    This function should find the user with that id and save it in `this.selectedUserForEdit`
   *    Hint: Use .find function of ES6
   */

  private editUserDetails(updatedUser: User) {
    this.users = this.users.map((user) => (user.id === updatedUser.id) ? updatedUser : user);
  }

  private cancelEdit() {
    this.selectedUserForEdit = null;
  }
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
