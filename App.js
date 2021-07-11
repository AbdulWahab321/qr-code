import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import QRCodeGenerator from './qr-generator';
import ScanScreen from './scanner';
import MainScreen from './mainScreen';
import ScanScreenWEB from './scannerWeb';
import QRCodeGeneratorCom from './qr-generatorWComputerMode';
import QRPlainTextCreater from './plainTextQRcode'
import QRContactCreater from './contactQRCreater'

var AppNavigator = createSwitchNavigator({
  M: MainScreen,
  S: ScanScreen,
  G: QRCodeGenerator,
  CG: QRCodeGeneratorCom,
  SW: ScanScreenWEB,
  PlainTextCreater:QRPlainTextCreater,
  ContactsQR:QRContactCreater
});
const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
