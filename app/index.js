import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router';

import * as filters from './filters';


Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key]);
});

new Vue({
    el: '#app',
});
