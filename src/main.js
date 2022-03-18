import naive from 'naive-ui';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';

createApp(App).use(naive).use(store).use(router).mount('#app');
