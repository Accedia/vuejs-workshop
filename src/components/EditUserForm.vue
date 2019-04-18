<template>
  <!-- Todo - 13: Use the @submit.prevent binding on the form to pass the recently created `save`
                  function with the @Emit decorator -->
  <form>
    <h3>Edit User's Details</h3>
    <div>
      <label>Name:</label>
      <!-- Todo - 10: Bind this input, by using `v-model` to the copy of the name prop `editedName`  -->
      <input type="text" name="name" />
    </div>

    <div>
      <label>Email:</label>
      <!-- Todo - 11: Bind this input, by using `v-model` to the copy of the email prop `editedEmail`  -->
      <input type="email" name="email" />
    </div>

    <div>
      <button type="submit">Save</button>
      <!-- Todo - 15: Attach a click event to the button passing a reference to the `cancel` function -->
      <button type="button">Cancel</button>
    </div>

  </form>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
import { User } from '../data/User';

@Component
export default class EditUserForm extends Vue {
  private nameCopy: string = '';
  private emailCopy: string = '';

  // Todo - 9: Use @Prop to define the input props for this component: id (number), name (string) and email (string)

  /**
   * NOTE: Since we are going to use v-model binding to update dinamically the name and email of the user
   *       and it is NOT a good practice to update the props directly,
   *       we need to make an internal copy of the values of those props.
   *       For that purpose we are using the @Watch decorator that is watching for any change of a given prop
   *       `{ immediate: true }` option is used to execute the watcher when the component is initially created
   */
  @Watch('name', { immediate: true })
  private nameChanged(newValue: string) {
    this.nameCopy = newValue;
  }

  @Watch('email', { immediate: true })
  private emailChanged(newValue: string) {
    this.emailCopy = newValue;
  }

  // Todo - 12: Define a function using the @Emit decorator. The name of the output event should be `save`
  //            The function's name is up to you. (A good name is `save`)
  //            The function should create a new User instance with the user id and the edited name and email
  //            The function should return this User instance

  // Todo - 14: Define a function using the @Emit decorator. The name of the output event should be `cancel`
  //            The function's name is up to you. (A good name is `cancel`)
  //            The function should return `null` since we do not want to return anything to the parent component
}
</script>

<style>

</style>
