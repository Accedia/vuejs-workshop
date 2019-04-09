<template>
<div class="root">
  <div>{{ text }}</div>

  <div>A reversed text with JS: {{ text.split('').reverse().join('') }}</div>

  <div>The method says: {{ getMessage() }}</div>

  <div>The sum of {{ a }} and {{ b }} is {{ sum }}</div>

  <div>This text is capitalized: {{ 'some random text' | capitalize }}</div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  filters: {
    capitalize: (value: string) => value.toUpperCase(),
  },
})
export default class InterpolationComponent extends Vue {
  private text: string = 'A sample text';
  private a: number = 10;
  private b: number = 5;

  private getMessage(): string {
    return 'Hello there!!';
  }

  private get sum(): number {
    return this.a + this.b;
  }
}
</script>