import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  RightArr,
  Mails,
  verifybtn,
  otpmails,
  otpverificationBg,
  resendCaptcha,
} from '../Component/Assets';
import Scale from './Scale';
import OtpInputs from 'react-native-otp-inputs';

interface Props {}
interface State {}
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class PasscodeOTPVerification extends Component<Props, State> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      Passcode: '',
    };
  }

  handlePasscodeChange = Passcode => {
    this.setState({Passcode});
  };

  handleSubmit = () => {
    const {Passcode} = this.state;

    if (Passcode.length !== 4) {
      Alert.alert('Please enter the 4-digit of Passcode');
      return;
    }

    this.props.navigation.navigate('SetNewPasscode');
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={otpverificationBg} style={styles.BgImg}>
          <View style={styles.CircleParentView} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ForgotPasscode');
              }}>
              <Image source={RightArr} style={styles.RifgthArrowImg} />
            </TouchableOpacity>
            <Text style={styles.OTPText}>OTP Verification</Text>
          </View>
          <View style={styles.FlagStyle}>
            <Image source={Mails} style={styles.image} />
            <Text style={[styles.welcomeText, {fontSize: Scale(15)}]}>
              Enter The OTP Sent To
            </Text>
            <Text style={styles.title}>+91 987654321</Text>
          </View>
        </ImageBackground>

        <OtpInputs
          style={styles.OTPStyle}
          handleChange={this.handlePasscodeChange}
          numberOfInputs={4}
          autofillFromClipboard={false}
          inputStyles={styles.inputStyle}
        />
        <ScrollView>
        <TouchableOpacity>
          <Image source={resendCaptcha} />
        </TouchableOpacity>
               </ScrollView>
        <TouchableOpacity
          style={styles.LoginButton}
          onPress={this.handleSubmit}>
          <Image source={verifybtn} style={styles.LoginButton2} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#e60202',
    alignItems: 'center',
  },
  BgImg: {
    width: width,
    height: height / 1.7,
  },

  RifgthArrowImg: {
    marginHorizontal: Scale(15),
  },

  CircleParentView: {
    height: Scale(60),
  },

  ForgotPasscode: {
    fontWeight: 'bold',
    fontSize: Scale(17),
    alignSelf: 'flex-end',
    color: 'red',
    marginRight: Scale(10),
  },

  LoginButton: {
    width: '98%',
    shadowOpacity: Scale(2),
    shadowRadius: Scale(2),
    shadowColor: '#7fe602',
    elevation: 2,
    shadowOffset: {width: 3, height: 1},
marginVertical:Scale(10)
  },

  LoginButton2: {
    width: '98%',
    height: Scale(100),
    alignSelf: 'center',
  },

  countrycode: {
    fontWeight: 'bold',
    fontSize: Scale(23),
    color: '#ffff',
  },

  title: {
    fontSize: Scale(18),
    fontWeight: 'bold',
    marginTop: Scale(6),
    color: '#ffff',
  },

  image: {
    marginTop: Scale(20),
    height: Scale(110),
    width: Scale(110),
  },

  BlankView: {
    height: Scale(150),
  },

  welcomeText: {
    fontSize: Scale(20),
    fontWeight: 'bold',
    marginTop: Scale(30),
    color: '#ffff',
  },

  FlagStyle: {
    alignItems: 'center',
    marginTop: Scale(30),
  },

  inputStyle: {
    width: Scale(45),
    height: Scale(55),
    borderRadius: Scale(5),
    backgroundColor: '#ffff',
    fontSize: Scale(20),
    textAlign: 'center',
  },

  OTPStyle: {
    width: '70%',
    height: 80,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: Scale(20),
    marginTop: Scale(-25),
  },

  OTPText: {
    fontSize: Scale(20),
    fontWeight: 'bold',
    color: '#ffff',
  },
});
