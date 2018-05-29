import Vue from 'vue';
import UI from '@/components/packages/index';
import router from './router';
import * as filters from './filters';
import App from './App';
import '@/components/packages/theme/lib/default/index.css';

Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key]);
});

Vue.use(UI);

/* eslint-disable-next-line */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
});
