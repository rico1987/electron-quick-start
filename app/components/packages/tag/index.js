import FxTag from './src/main';

FxTag.load = (Vue) => {
    Vue.component(FxTag.name, FxTag);
};

export default FxTag;
