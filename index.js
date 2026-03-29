/**
 * @format
 */
import 'react-native-gesture-handler'; //sirve para indicarle al dispositivo movil que tendre una nacvegación y tiene ciertos gestos para navegar entre pantallas
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
