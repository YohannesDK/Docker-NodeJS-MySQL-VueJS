import { createApp } from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './services/api';

createApp(App)
  .use(VueAxios, axios)
  .use(store)
  .use(router)
  .mount('#app');
