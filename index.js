/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import routes from "./src/routes";

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => routes);
