<template>

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

