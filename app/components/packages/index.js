import FxMain from './main/index';
import FxHeader from './header/index';

const components = [
    FxMain,
    FxHeader,
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
    FxHeader,
};
