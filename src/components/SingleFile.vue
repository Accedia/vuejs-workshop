<template>
  <div class="container">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SingleFileComponent extends Vue {
  private message: string = 'Hello from a Single file component';
}

</script>

<style scoped>
 .container {
   color: red;
 }
</style>


