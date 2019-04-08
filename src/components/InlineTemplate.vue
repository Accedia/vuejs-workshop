<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class InlineTemplateComponent extends Vue {
  private message: string = 'Hello from an inline template component';
}
</script>

