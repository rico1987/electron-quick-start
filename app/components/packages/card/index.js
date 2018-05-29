import FxCard from './src/main';

FxCard.load = (Vue) => {
    Vue.component(FxCard.name, FxCard);
};

export default FxCard;
