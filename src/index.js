import { name as appName } from './app/main.module';

require('bootstrap');
import './style.scss';

angular.bootstrap(document.body, [appName], { strictDi: true });
