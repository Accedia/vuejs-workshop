<template>
<div>
  <p v-bind:class="{ success: isSuccess, error: !isSuccess }">This text has a dynamic class</p>
  <p v-bind:class="classObject">This text has a class object</p>
  <p v-bind:class="[italicClass, isBold ? boldClass : '']">This text has an array of classes</p>
  
  <p v-bind:style="{ color: textColor, fontSize: '16px' }">This text has a dynamic style</p>
  <p v-bind:style="styleObject">This text has a style object</p>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class StylingComponent extends Vue {
  private isSuccess: boolean = true;
  private boldClass: string = 'bold';
  private italicClass: string = 'italic';
  private isBold: boolean = true;
  private classObject: any = {
    bold: true,
    italic: false,
    underline: true,
  };

  private textColor = 'blue';
  private styleObject: any = {
    color: 'orange',
    textAlign: 'right',
  };
}
</script>

<style scoped>
  .success {
    color: green;
  }

  .error {
    color: red;
  }

  .bold {
    font-weight: bold;
  }

  .italic {
    font-style: italic;
  }

  .underline {
    text-decoration: underline;
  }
</style>
