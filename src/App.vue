<template>
  <div id="app">
    <single-file-component></single-file-component>
    <!-- <react-component></react-component> -->
    <!-- <inline-template-component inline-template>
      <div class="container">
        {{ message }}
      </div>
    </inline-template-component> -->
    <!-- <multi-component></multi-component> -->

    <!-- <interpolation-component></interpolation-component> -->
    <!-- <conditional-rendering-component></conditional-rendering-component> -->
    <!-- <loops-component></loops-component> -->
    <!-- <styling-component></styling-component> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SingleFileComponent from './components/SingleFile.vue';
import ReactComponent from './components/React';
import InlineTemplateComponent from './components/InlineTemplate.vue';
import MultiComponent from './components/multi-file/MultiFile';

import InterpolationComponent from './components/templates-demo/Interpolation.vue';
import ConditionalRenderingComponent from './components/templates-demo/ConditionalRendering.vue';
import LoopsComponent from './components/templates-demo/Loops.vue';
import StylingComponent from './components/templates-demo/Styling.vue';

@Component({
  components: {
    SingleFileComponent,
    ReactComponent,
    InlineTemplateComponent,
    MultiComponent,
    InterpolationComponent,
    ConditionalRenderingComponent,
    LoopsComponent,
    StylingComponent,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
