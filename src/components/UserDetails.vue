<template>
  <tr>
    <td>{{id}}</td>
    <td>{{name}}</td>
    <td>{{email}}</td>
    <td>
      <!-- TODO - 5: Add a click event listener on the button that will call the `editUser` function -->
      <button>Edit</button>
    </td>
  </tr>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class UserDetails extends Vue {
  // TODO - 3: Use @Prop to define the input props for this component: id (number), name (string) and email (string)

  // TODO - 4: Define a function using the @Emit decorator. The name of the output event should be `edit`
  //           The function name is up to you. (A good name is `editUser`)
  //           The function should return the id of the user in order to emit it to the parent component
}
</script>

<style>

</style>
