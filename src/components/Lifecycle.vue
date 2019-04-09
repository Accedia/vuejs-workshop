<template>
  <div>
    <span>{{ message }}</span>
    <br />

    <button v-on:click="update">Update</button>
    <button v-on:click="destroy">Destroy</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class LifecycleComponent extends Vue {
  private message: string = 'This is a message';

  constructor() {
    super();

    console.log('constructor called');
  }

  private destroy(): void {
    this.$destroy();
  }

  private update(): void {
    this.message += ' updated';
  }

  private beforeCreate(): void {
    console.log('beforeCreate called');
  }

  private created(): void {
    console.log('created called');
  }

  private beforeMount(): void {
    console.log('beforeMount called');
  }

  private mounted(): void {
    console.log('mounted called');
  }

  private beforeUpdate(): void {
    console.log('beforeUpdate called');
  }

  private updated(): void {
    console.log('updated called');
  }

  private beforeDestroy(): void {
    console.log('beforeDestroy called');
  }

  private destroyed(): void {
    console.log('destroyed called');
  }
}
</script>
