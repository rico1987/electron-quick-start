import FxHeader from './src/main.vue';

FxHeader.load = (Vue) => {
    Vue.component(FxHeader.name, FxHeader);
};

export default FxHeader;