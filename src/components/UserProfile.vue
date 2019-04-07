<template>
  <div>
    <strong>Email: </strong> {{ email }}
    <strong>Name: </strong> {{ firstName }} {{ lastName }};

    <button @click="editUser">Edit me!</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { User } from '../models/User';

@Component
export default class UserProfile extends Vue {
  @Prop()
  public email!: string;

  @Prop()
  public firstName!: string;

  @Prop()
  public lastName!: string;

  @Emit('edit')
  public editUser(): User {
    const newFirstName: string = `${this.firstName}+`;
    const newLastName: string = `${this.lastName}+`;
    const editedUser: User = new User(this.email, newFirstName, newLastName);
    return editedUser;
  }

  /**
   * Without using the @Emit decorator
   * We need to call this.emit(EVENT_NAME, VALUE_TO_PASS);
   */
  // public editUser() {
  //   const newFirstName: string = `${this.firstName}Edited`;
  //   const newLastName: string = `${this.lastName}Edited`;
  //   const editedUser: User = new User(this.email, newFirstName, newLastName);
  //   this.$emit('edit', editedUser);
  // }
}
</script>
