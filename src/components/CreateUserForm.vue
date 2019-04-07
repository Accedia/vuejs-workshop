<template>
  <form @submit.prevent="createUser">
    <div>
      <label>Email: </label>
      <input v-model="user.email" />
      <!-- <input :value="user.email" @input="user.email = $event.target.value" /> -->
    </div>
    <div>
      <label>Firstname: </label>
      <input v-model="user.firstName" />
    </div>
    <div>
      <label>Lastname: </label>
      <input v-model="user.lastName" />
    </div>

    <button type="submit">Create User</button>
  </form>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator';
// Models
import { User } from '../models/User';

@Component
export default class CreateUser extends Vue {
  public user: User = new User('', '', '');

  public createUser() {
    if (!this.isUserValid()) {
      alert('Please fill all fields');
      return;
    }

    const userCopy: User = {...this.user};
    this.user = new User('', '', '');
    this.$emit('create', userCopy);
  }

  private isUserValid() {
    return (
      this.user.email.trim() !== ''
      && this.user.firstName.trim() !== ''
      && this.user.lastName.trim() !== ''
    );
  }
}
</script>
