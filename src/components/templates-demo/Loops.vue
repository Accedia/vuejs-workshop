<template>
<div>
  <h2>Users:</h2>
  <ul>
    <li v-for="user in users" 
      v-bind:key="user.id">
      {{ user.firstName }} {{ user.lastName }} {{ user.age }}
    </li>
  </ul>

  <h2>Values:</h2>
  <ul>
    <li v-for="value in singleUser"
      v-bind:key="value">
      {{ value }}
    </li>
  </ul>

  <h2>Keys/Values:</h2>
  <ul>
    <li v-for="(value, key) in singleUser"
      v-bind:key="key">
      {{ key }}: {{ value }}
    </li>
  </ul>

  <h2>Range:</h2>
  <ul>
    <li v-for="n in 10" v-bind:key="n">
      {{ n }}
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import User from './User';

@Component
export default class LoopsComponent extends Vue {
  private users: User[] = [
    new User(1, 'John', 'Doe', 20),
    new User(2, 'Peter', 'Pan', 13),
    new User(3, 'Gosho', 'Goshov', 25),
  ];

  private singleUser: User = this.users[0];

  constructor() {
    super();

    setInterval(() => {
      this.users[0] = new User(1, 'John', 'Doe', this.users[0].age + 1); // ??
    }, 1000);

    setTimeout(() => {
      (this.singleUser as any).newProp = 'newValue'; // ??
    }, 1000);
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    text-align: left;
  }

  h2 {
    text-align: left;
  }
</style>

