<template>
  <users-component></users-component>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UsersComponent from './components/UsersComponent.vue';

@Component({
  components: {
    UsersComponent,
  },
})
export default class App extends Vue {}
</script>
