<template>
  <!-- Todo - 13: Use the @submit.prevent binding on the form to pass the recently created `save`
                  function with the @Emit decorator -->
  <form>
    <h3>Edit User's Details</h3>
    <div>
      <label>Name:</label>
      <!-- Todo - 10: Use `v-model` to bind this input to the recently created prop `name`  -->
      <input type="text" name="name" />
    </div>

    <div>
      <label>Email:</label>
      <!-- Todo - 11: Use `v-model` to bind this input to the recently created prop `email`  -->
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
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { User } from '../data/User';

@Component
export default class EditUserForm extends Vue {
  // Todo - 9: Use @Prop to define the input props for this component: id (number), name (string) and email (string)

  // Todo - 12: Define a function using the @Emit decorator. The name of the output event should be `save`
  //            The function's name is up to you. (A good name is `save`)
  //            The function should create a new User instance with the user id and the edited name and email
  //            The function should return this User instance

  // Todo - 14: Define a function using the @Emit decorator. The name of the output event should be `cancel`
  //            The function's name is up to you. (A good name is `cancel`)
  //            The function should have an empty body,
  //            because we do not want to pass anything to the parent, just the event
}
</script>

<style>

</style>
