import FxMain from './main/index';

const components = [
    FxMain,
];

const install = (Vue) => {
    components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    FxMain,
};
