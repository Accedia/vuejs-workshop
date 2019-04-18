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
        <UserDetails
          v-for="user in users"
          :key="user.id"
          :id="user.id"
          :name="user.name"
          :email="user.email"
          @edit="selectUserForEdit"
        />
      </tbody>
    </table>

    <EditUserForm
      v-if="selectedUserForEdit !== null"
      :id="selectedUserForEdit.id"
      :name="selectedUserForEdit.name"
      :email="selectedUserForEdit.email"
      @save="editUserDetails"
      @cancel="cancelEdit"
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

  private mounted() {
    this.users = users;
  }

  private selectUserForEdit(id: number) {
    const foundUser = this.users.find((user) => user.id === id);
    this.selectedUserForEdit = (foundUser) ? foundUser : null;
  }

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
