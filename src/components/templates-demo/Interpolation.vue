<template>
<div class="root">
  <div>{{ text }}</div>

  <div>A reversed text with JS: {{ text.split('').reverse().join('') }}</div>

  <div>The method says: {{ getMessage() }}</div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class InterpolationComponent extends Vue {
  private text: string = 'A sample text';

  private getMessage(): string {
    return 'Hello there!!';
  }
}
</script>