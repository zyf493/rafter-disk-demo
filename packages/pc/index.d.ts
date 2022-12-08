import type { App } from 'vue';
import RaButton from './button/index';
declare const BimccUI: {
    version: string;
    install: (app: App) => void;
};
export { RaButton };
export default BimccUI;
