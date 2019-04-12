<template>
<div>
  <span v-if="num % 2 === 0">
    even
  </span>
  <span v-else-if="num % 2 === 1">
    odd
  </span>
  <span v-else>
    negative
  </span>

  <div v-if="showElement">This one is hidden</div>
  <button v-on:click="showElement = !showElement">Toggle element</button>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ConditionalRenderingComponent extends Vue {
  private num: number = 0;
  private showElement: boolean = false;
}
</script>
