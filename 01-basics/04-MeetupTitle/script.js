import { createApp, defineComponent } from './vendor/vue.esm-browser';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение
const App = defineComponent({
  name: 'App',
  data() {
    return {
      selectedMeetup: null,
      meetup: null,
    };
  },
  computed: {},
  methods: {
    async loadSelectedMeetup(meetupId) {
      this.meetup = await fetchMeetupById(meetupId);
    },
  },
  watch: {
    selectedMeetup(newValue) {
      this.loadSelectedMeetup(newValue);
    },
  },
  template: `
    <div>
    <label v-for="n in 5"><input type="radio"  name="meetupId" v-model="selectedMeetup" :value="n" /> {{ n }}</label>
    <hr />

    <h3 v-if="meetup">{{ meetup.title }}</h3>
    </div>`,
});

const app = createApp(App);
const vm = app.mount('#app');
window.vm = vm;
