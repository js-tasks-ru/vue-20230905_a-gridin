// import { createApp } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

// Требуется создать Vue приложение

import { createApp, defineComponent } from './vendor/vue.esm-browser';
const App = defineComponent({
  name: 'App',
  data() {
    return {
      filter: '',
      Emails: emails,
    };
  },
  computed: {
    filtredEmails() {
      return Array.from(this.Emails, (v) => {
        return { email: v, filtered: this.filter !== '' && v.includes(this.filter) };
      });
    },
  },
  template: `
    <div class="container">
    <div class="form-group">
      <input type="search" v-model="filter"/>
    </div>
    <ul>
      <li v-for="value in filtredEmails" :class="{'marked':value.filtered}"> {{ value.email }}</li>
    </ul>
    </div>`,
});

const app = createApp(App);
const vm = app.mount('#app');
window.vm = vm;
