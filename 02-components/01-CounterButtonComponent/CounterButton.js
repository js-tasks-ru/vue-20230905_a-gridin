import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр и порождать событие
  props: {
    count: { type: Number, default: 0 },
  },
  emits: ['update:count'],

  template: `
    <button type="button" @click="this.$emit('update:count', this.count + 1)">{{ count }}</button>
  `,
});
