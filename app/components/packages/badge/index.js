import FxBadge from './src/main';

FxBadge.load = (Vue) => {
    Vue.component(FxBadge.name, FxBadge);
};

export default FxBadge;
