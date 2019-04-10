import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ReactComponent extends Vue {
  private message: string = 'Hello from a React component!';

  public render() {
    return (
      <div class='container'>
        { this.message }
      </div>
    );
  }
}
