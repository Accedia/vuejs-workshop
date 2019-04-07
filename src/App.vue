<template>
  <div>
    <h2>Passing data between components</h2>
    <UserProfile
      v-for="user in users"
      v-bind:key="user.email"
      v-bind:email="user.email"
      v-bind:firstName="user.firstName"
      v-bind:lastName="user.lastName"
      v-on:edit="editUser"
    />

    <!-- <UserProfile
      v-for="user in users"
      :key="user.email"
      :email="user.email"
      :firstName="user.firstName"
      :lastName="user.lastName"
      @edit="editUser"
    /> -->

    <h2>Create User Form</h2>
    <CreateUserForm
      @create="createUser"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// Models
import { User } from './models/User';
// Components
import UserProfile from './components/UserProfile.vue';
import CreateUserForm from './components/CreateUserForm.vue';

@Component({
  components: {
    UserProfile,
    CreateUserForm,
  },
})
export default class App extends Vue {
  public users: User[] = [
    new User('user1@accedia.com', 'Boris', 'Mavrodiev'),
    new User('user2@accedia.com', 'Gerogi', 'Yolovski'),
    new User('user3@accedia.com', 'Vue.js', 'Workshop'),
  ];

  public editUser(newUser: User) {
    this.users = this.users.map((user) => (user.email === newUser.email) ? newUser : user);
  }

  public createUser(newUser: User) {
    this.users.push(newUser);
  }
}
</script>
