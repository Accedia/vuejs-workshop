import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MultiFileComponent extends Vue {
  private message: string = 'Hello from a multi-file component';
}
