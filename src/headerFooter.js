import { createApp } from 'vue';
import ThirdParty from './ThirdParty.vue';
import './assets/tailwind.css';
import naive from 'naive-ui';
createApp(ThirdParty).use(naive).mount('#headerComponent');
