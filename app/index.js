import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/scss/index.scss';
import router from './router';
import * as filters from './filters';
import App from './App';

Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key]);
});

Vue.use(ElementUI);

/* eslint-disable-next-line */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
});
