import Vue from 'vue';
import router from './router';

// import * as filters from './filters';
import App from './App.vue';

// Object.keys(filters).forEach((key) => {
//     Vue.filter(key, filters[key]);
// });

/* eslint-disable-next-line */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
});
