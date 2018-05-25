import FxButton from './src/button.vue';

FxButton.load = (Vue) => {
    Vue.component(FxButton.name, FxButton);
};

export default FxButton;
