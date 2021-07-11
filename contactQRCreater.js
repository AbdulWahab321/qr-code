import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  CameraRoll,
  Image,
  Platform,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { ToastAndroid } from 'react-native';
var RNFS = require('react-native').NativeModules.RNFS;
import * as WebBrowser from 'expo-web-browser';
import * as Sharing from 'expo-sharing';
import QRCode from 'qrcode';
import colors from './colors';
import * as FileSystem from 'expo-file-system';
var history = [];
var value1;
var text = 'please enter some text';
var supportedValue = '';
export default class QRContactCreater extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '_',
      phoneticName: '_',
      phoneNumber: 0,
      company: '_',
      imageURL: '_',
      generate: false,
      jobTitle: '_',
      email: '_',
      homeAddress: '_',
      birthDay: '_',
      nickname: '_',
      all: '_',
    };
  }
  render() {
    var setName = async (e) => {
      var text = e;
      var addedText = text;
      if (text !== null) {
        if (text !== '' && text !== 'your value for qr code') {
          await this.setState({ usersvalue: addedText });
          var qr = await QRCode.toDataURL(this.state.usersvalue);
          this.setState({ imageURL: qr });
        }
      }
    };
    var setNumber = function (uri, filename, callback) {
      request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    var setPhoneticName = async (e) => {
      var addedText;
      if (text !== null) {
        if (text !== '' && text !== 'your value for qr code') {
          await this.setState({ usersvalue: addedText });
          var qr = await QRCode.toDataURL(this.state.usersvalue);
          this.setState({ imageURL: qr });
        }
      }
    };

    var setCompany = (e) => {
      var text = e.toLowerCase().trim();
      if (colors.includes(text)) {
        if (text !== '' && text !== 'your value for qr code') {
          this.setState({ userscodestyle: text });
        }
      } else {
        this.setState({ userscodestyle: 'black' });
      }
    };
    var setJobTitle = (e, state) => {
      var text = e.toLowerCase().trim();
      if (colors.includes(text)) {
        if (text !== '' && text !== 'your value for qr code') {
          this.setState({ usersbackgroundcolor: text });
        }
      } else {
        this.setState({ usersbackgroundcolor: 'white' });
      }
    };
    var setEmail = (e) => {
      var text = e.toLowerCase().trim();
      if (colors.includes(text)) {
        if (text !== '' && text !== 'your value for qr code') {
          this.setState({ usersbackgroundcolor: text });
        }
      } else {
        this.setState({ usersbackgroundcolor: 'white' });
      }
    };

    var setHomeAddress = (e) => {
      var text = e.toLowerCase().trim();
      if (colors.includes(text)) {
        if (text !== '' && text !== 'your value for qr code') {
          this.setState({ usersbackgroundcolor: text });
        }
      } else {
        this.setState({ usersbackgroundcolor: 'white' });
      }
    };

    var setBirthday = (e) => {
      var text = e.toLowerCase().trim();
      if (colors.includes(text)) {
        if (text !== '' && text !== 'your value for qr code') {
          this.setState({ usersbackgroundcolor: text });
        }
      } else {
        this.setState({ usersbackgroundcolor: 'white' });
      }
    };

    var setNickname = (e) => {
      var text = e.toLowerCase().trim();
      if (colors.includes(text)) {
        if (text !== '' && text !== 'your value for qr code') {
          this.setState({ usersbackgroundcolor: text });
        }
      } else {
        this.setState({ usersbackgroundcolor: 'white' });
      }
    };

    var setEverythingTogether = async () => {
      var s = this.state;
      var name = s.name;
      var number = s.phoneNumber;
      var pname = s.phoneticName;
      var email = s.email;
      var company = s.company;
      var jobtitle = s.jobTitle;
      var address = s.homeAddress;
      var birthday = s.birthDay;
      var nickname = s.nickname;
      var contactContents = [
        s,
        name,
        number,
        pname,
        email,
        company,
        jobtitle,
        address,
        birthday,
        nickname,
      ];
      var mixedValue = `Name: ${name}.\nPhone Number: ${number}.\nPhonetic Name: ${pname}.\nEmail: ${email}.\nCompany: ${company}.\nJob Title: ${jobtitle}.\nHome Address: ${address}.\nBirthday: ${birthday}.\nNickname: ${nickname}`;
      this.setState({ all: mixedValue });

      var url = await QRCode.toDataURL(mixedValue);
      console.log(url);
      this.setState({ imageURL: url });
    };

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.subContainer}>
            <Text style={styles.displayTextS}>Type the Contact Name</Text>
            <TextInput
              style={styles.input}
              placeholder={'contact Name'}
              onChange={(e) => {
                this.setState({ generate: false });
                if (Platform.OS !== 'web') {
                  setName(e.nativeEvent.text);
                } else {
                  setName(e.target.value);
                }
              }}
            />

            <Text style={styles.displayTextS}>
              Type the Contact Phone Number
            </Text>
            <TextInput
              placeholder={'Phone Number'}
              style={styles.input}
              onChange={(e) => {
                this.setState({ generate: false });
                if (Platform.OS !== 'web') {
                  setNumber(e.nativeEvent.text);
                } else {
                  setNumber(e.target.value);
                }
              }}
            />

            <Text style={styles.displayTextS}>Type the Phonetic Name</Text>
            <TextInput
              placeholder={'phonetic name'}
              style={styles.input}
              onChange={(e) => {
                this.setState({ generate: false });
                if (Platform.OS !== 'web') {
                  setPhoneticName(e.nativeEvent.text);
                } else {
                  setPhoneticName(e.target.value);
                }
              }}
            />

            <Text style={styles.displayTextS}>Type the Company Name</Text>
            <TextInput
              placeholder={'company name'}
              style={styles.input}
              onChange={(e) => {
                this.setState({ generate: false });
                if (Platform.OS !== 'web') {
                  setCompany(e.nativeEvent.text);
                } else {
                  setCompany(e.target.value);
                }
              }}
            />

            <Text style={styles.displayTextS}>Type the JobTitle</Text>
            <TextInput
              placeholder={'job titke'}
              style={styles.input}
              onChange={(e) => {
                this.setState({ generate: false });
                if (Platform.OS !== 'web') {
                  setJobTitle(e.nativeEvent.text);
                } else {
                  setJobTitle(e.target.value);
                }
              }}
            />

            <Text style={styles.displayTextS}>Type the Email</Text>
            <TextInput
              placeholder={'email'}
              style={styles.input}
              onChange={(e) => {
                this.setState({ generate: false });
                if (Platform.OS !== 'web') {
                  setEmail(e.nativeEvent.text);
                } else {
                  setEmail(e.target.value);
                }
              }}
            />

            <Text style={styles.displayTextS}>Type the Home Address</Text>
            <TextInput
              placeholder={'home address'}
              style={styles.input}
              onChange={(e) => {
                this.setState({ generate: false });
                if (Platform.OS !== 'web') {
                  setHomeAddress(e.nativeEvent.text);
                } else {
                  setHomeAddress(e.target.value);
                }
              }}
            />

            <Text style={styles.displayTextS}>Type the Birthday</Text>
            <TextInput
              placeholder={'birthday'}
              style={styles.input}
              onChange={(e) => {
                this.setState({ generate: false });
                if (Platform.OS !== 'web') {
                  setBirthday(e.nativeEvent.text);
                } else {
                  setBirthday(e.target.value);
                }
              }}
            />

            <Text style={styles.displayTextS}>Type the Nickname</Text>
            <TextInput
              placeholder={'nickname'}
              style={styles.input}
              onChange={(e) => {
                this.setState({ generate: false });
                if (Platform.OS !== 'web') {
                  setNickname(e.nativeEvent.text);
                } else {
                  setNickname(e.target.value);
                }
              }}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setEverythingTogether();
                this.setState({ generate: true });
              }}>
              <Text style={styles.buttonText}>Generate</Text>
            </TouchableOpacity>
            <View style={[styles.qrcode, { marginLeft: -2, marginBottom: 80 }]}>
              {this.state.generate === true ? (
                <Image
                  style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: 50,
                    width: 200,
                    height: 200,
                  }}
                  alt={'change the value so you can see the qr code here'}
                  source={{ uri: this.state.imageURL }}
                />
              ) : null}

              {Platform.OS !== 'web' ? (
                <TouchableOpacity
                  onPress={() => {
                    console.log(this.state.imageURL);
                    FileSystem.downloadAsync(this.state.imageURL);
                  }}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Download QRCode</Text>
                </TouchableOpacity>
              ) : (
                <a href={this.state.imageURL.toString()} download>
                  Download QRCode
                </a>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 3,
    borderRadius: 15,
    backgroudColor: 'red',
    borderColor: 'darkgreen',
    marginTop: 50,
    width: 200,
    height: 50,
  },
  button1: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 3,
    borderRadius: 15,
    backgroudColor: 'red',
    borderColor: 'darkgreen',
    marginTop: 600,
    width: 200,
    height: 50,
  },
  subContainer: {
    marginTop: 50,
    flex: 1,
    borderWidth: 2,
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  qrcode: {
    marginTop: 15,
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    width: 250,
    marginTop: 13,
    height: 25,
    textAlign: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'darkblue',
  },
  displayTextS: {
    color: 'black',
    fontWeight: 'bolder',
    fontSize: 20,
    marginTop: 50,
    textAlign: 'center',
  },
  title: {
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
});
