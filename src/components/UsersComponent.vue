<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th v-if="showEmailColumn">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" v-bind:key="user.email" v-bind:class="{'gray-table-cell': index % 2 === 0}">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td v-if="showEmailColumn">{{ user.email }}</td>
        </tr>
      </tbody>
    </table>

    <div class="padding-top-15">
      <button v-on:click="toggleShowEmailColumn()">
        {{ showEmailColumn ? 'Hide Emails' : 'Show Emails' }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { User } from './User';
import users from './users';

@Component
export default class UsersComponent extends Vue {

  private showEmailColumn: boolean = true;
  private users: User[] = users;

  private toggleShowEmailColumn(): void {
    this.showEmailColumn = !this.showEmailColumn;
  }
}
</script>

<style>
.table {
  border-collapse: collapse;
}

.table th, td {
  padding: 3px;
  border: 1px solid black;
}

.gray-table-cell {
  background-color: lightgray;
}

.padding-top-15 {
  padding-top: 15px;
}
</style>
