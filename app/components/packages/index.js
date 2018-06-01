import FxMain from './main/index';
import FxHeader from './header/index';
import FxFooter from './footer/index';
import FxCard from './card/index';
import FxAside from './aside/index';

const components = [
    FxMain,
    FxHeader,
    FxFooter,
    FxCard,
    FxAside,
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
    FxFooter,
    FxCard,
    FxAside,
};
