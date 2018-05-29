import FxMain from './src/main';

FxMain.load = (Vue) => {
    Vue.component(FxMain.name, FxMain);
};

export default FxMain;
