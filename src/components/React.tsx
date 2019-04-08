import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TemplateLiteralComponent extends Vue {
  private message: string = 'Hello from a React component!';

  public render() {
    return (
      <div class='container'>
        { this.message }
      </div>
    );
  }
}
