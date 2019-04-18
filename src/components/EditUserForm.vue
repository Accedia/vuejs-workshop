<template>
  <form @submit.prevent="save">
    <h3>Edit User's Details</h3>
    <div>
      <label>Name:</label>
      <input type="text" name="nameCopy" v-model="editedName" />
    </div>

    <div>
      <label>Email:</label>
      <input type="email" name="email" v-model="editedEmail" />
    </div>

    <div>
      <button type="submit">Save</button>
      <button type="button" @click="cancel">Cancel</button>
    </div>

  </form>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
import { User } from '../data/User';

@Component
export default class EditUserForm extends Vue {
  private editedName: string = '';
  private editedEmail: string = '';

  @Prop() private readonly id!: number;
  @Prop() private readonly name!: string;
  @Prop() private readonly email!: string;

  @Watch('name', { immediate: true })
  private nameChanged(newValue: string) {
    this.editedName = newValue;
  }

  @Watch('email', { immediate: true })
  private emailChanged(newValue: string) {
    this.editedEmail = newValue;
  }

  @Emit('save')
  private save(): User {
    const user: User = new User(this.id, this.editedEmail, this.editedName);
    this.cancel();
    return user;
  }

  @Emit('cancel')
  private cancel() {
    return;
  }
}
</script>

<style>

</style>
