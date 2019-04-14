<template>
  <tr>
    <td>{{id}}</td>
    <td>{{name}}</td>
    <td>{{email}}</td>
    <td>
      <!-- Todo - 5: Add a click event listener on the button that will call `editUser` -->
      <button>Edit</button>
    </td>
  </tr>
</template>

<script>
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class UserDetails extends Vue {
  // Todo - 3: Use @Prop to define props: id (number), name (string) and email (string)

  // Todo - 4: Use the @Emit decorator. The output event should be called `edit` and the function should be called `editUser`.
  //           The function should return the id of the user in order to emit it to the parent component
}
</script>

<style>

</style>
