<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <!-- TODO - 10: Use v-if to display User email table heading element if the flag is set to true -->
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <!-- TODO - 1: Use v-for on the table row element to iterate over the users -->
        <!-- TODO - 4: In the v-for definition obtain the index variable -->
        <!-- TODO - 5: Using the above defined index variable to style each odd table row element with 'gray-table-cell' class -->
        <tr>
          <td>
            <!-- TODO - 2: Display the user's ID here -->
          </td>
          <!-- TODO - 3: Display the user's name here -->
          <td></td>
          <!-- TODO - 11: Use v-if to display the user's email if the flag is set to true -->
          <td></td>
        </tr>
      </tbody>
    </table>

    <div class="padding-top-15">
      <!-- TODO - 8: Add on click listener to trigger the toggle flag function defined in the component that will show the users emails -->
      <!-- TODO - 9: Change the button text depending on the flag value('Hide Emails'/'Show Emails') -->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { User } from './User';
import users from './users';

@Component
export default class UsersComponent extends Vue {

  // TODO - 6: Add boolean flag here for toggling the album titles column in the table.
  private users: User[] = users;

  // TODO - 7: Add a function here to toggle the boolean flag value.
}
</script>

<style>
.table {
  border-collapse: collapse;
}

.table th, td {
  padding: 3px;
  border: 1px solid black;
}

.gray-table-cell {
  background-color: lightgray;
}

.padding-top-15 {
  padding-top: 15px;
}
</style>
