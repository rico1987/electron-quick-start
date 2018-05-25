import FxMain from './src/main.vue';

FxMain.load = (Vue) => {
    Vue.component(FxMain.name, FxMain);
};

export default FxMain;
