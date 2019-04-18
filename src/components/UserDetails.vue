<template>
  <tr>
    <td>{{id}}</td>
    <td>{{name}}</td>
    <td>{{email}}</td>
    <td>
      <button @click="editUser">Edit</button>
    </td>
  </tr>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class UserDetails extends Vue {
  @Prop() private id!: number;
  @Prop() private name!: string;
  @Prop() private email!: string;

  @Emit('edit')
  private editUser(): number {
    return this.id;
  }
}
</script>

<style>

</style>
