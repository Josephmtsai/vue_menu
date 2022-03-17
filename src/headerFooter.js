import { createApp } from 'vue';
import ThirdParty from './ThirdParty.vue';
import naive from 'naive-ui';
createApp(ThirdParty).use(naive).mount('#headerComponent');
