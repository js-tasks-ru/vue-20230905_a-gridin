// Создайте Vue приложение
import { createApp, defineComponent } from './vendor/vue.esm-browser';
const App = defineComponent({
  name: 'App',
  data() {
    return {
      counter: 0,
    };
  },
  template: '<button type="button" @click="counter++">{{ counter }}</button>',
});

const app = createApp(App);
const vm = app.mount('#app');
window.vm = vm;
