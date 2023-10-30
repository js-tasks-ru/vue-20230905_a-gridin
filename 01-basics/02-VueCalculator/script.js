// import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
import {createApp,defineComponent} from "./vendor/vue.esm-browser";
const App = defineComponent({
  name:'App',
  data() {
    return {
      num1:0,
      num2:0,
      operator: 'sum'
    };
  },
  computed : {
    calc() {
      switch (this.operator) {
        case 'sum':
          return this.num1 + this.num2;
        case 'subtract':
          return this.num1 - this.num2;
        case 'multiply':
          return this.num1 * this.num2;
        case 'divide':
          return this.num1 / this.num2;
        default:
          return 0;
      }
    }
  },

  template:
    `<div class="row">
    <div class="col">
      <input type="number" v-model="num1"/>
    </div>

    <div class="col" style="display: flex; flex-direction: column; font-family: emoji">
      <label><input type="radio" name="operator" value="sum" v-model="operator"/> ➕</label>
      <label><input type="radio" name="operator" value="subtract" v-model="operator"/> ➖</label>
      <label><input type="radio" name="operator" value="multiply" v-model="operator"/> ✖</label>
      <label><input type="radio" name="operator" value="divide" v-model="operator"/> ➗</label>
    </div>

    <div class="col">
      <input type="number" v-model="num2"/>
    </div>

    <div class="col">=</div>

    <output class="col">{{ calc }}</output>
    </div>`
});

const app = createApp(App);
const vm = app.mount('#app');
window.vm = vm;
