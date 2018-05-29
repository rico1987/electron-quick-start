import FxHeader from './src/main';

FxHeader.load = (Vue) => {
    Vue.component(FxHeader.name, FxHeader);
};

export default FxHeader;
