import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  Dimensions,
  Modal,
  FlatList,
  Alert,
} from 'react-native';
import {
  Register,
  Phone,
  dropdown,
  Flag,
  RightArr,
  Contact,
  Email,
  DOWN,
  Checkbox,
} from '../Component/Assets';
import Scale from './Scale';
import OtpInputs from 'react-native-otp-inputs';
import {CountryPicker} from 'react-native-country-codes-picker';
import {getAllStates} from 'country-state-city/lib/state';
import {Country, State, City} from 'country-state-city';


interface Props {}
interface State {}

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class SignUp extends Component<Props, State> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      isChcekbox: false,
      state: '',
      show: false,
      countryCode: '',
      flagImage: '',
      selectedState: '',
      states: false,
      isStateModalVisible: false,
      isStateShow: false,
      stateList: [],
      checkPress: false,
      Passcode: '',
      MobileNum: '',
      confirmPasscode: '',
      name: '',
      emailId: '',
      StateName: 'State',
      StateCode: '',
    };
  }

  componentDidMount() {
    const {selectedState
    } = this.state;
    const states = getAllStates(selectedState);
    this.setState({states});
    State.getStatesOfCountry('IN');
    this.setState({stateList: State.getStatesOfCountry('IN')});
  }

  handleStateChange = item => {
    console.log(item.stateCode, '----------');
    console.log(State.getStatesOfCountry('IN'));
    console.log('==============');
    this.setState({
      selectedState: item.stateCode,
      isStateModalVisible: false,
      StateName: item.name,
    });
  };

  toggleStateModal = () => {
    this.setState({isStateModalVisible: !this.state.isStateModalVisible});
  };

  handlePhoneNumberChange = MobileNum => {
    this.setState({MobileNum});
  };

  handlePasscodeChange = Passcode => {
    this.setState({Passcode});
  };

  handleconfirmPasscodeChange = confirmPasscode => {
    this.setState({confirmPasscode});
  };

  handlenameChange = name => {
    this.setState({name});
  };

  handleemailIdChange = emailId => {
    this.setState({emailId});
  };

  handleSubmit = () => {
    const {
      Passcode,
      confirmPasscode,
      MobileNum,
      checkPress,
      name,
      emailId,
      isChcekbox,
      isStateModalVisible,
    } = this.state;

    if (MobileNum.length == '') {
      Alert.alert('Please enter the mobile number');
      return;
    }
    if (name.length == '') {
      Alert.alert('Please enter the name');
      return;
    }
    if (emailId.length == '') {
      Alert.alert('Please enter the emailId');
      return;
    }

    if (checkPress !== true) {
      Alert.alert('Please select CountryCode');
      return;
    }

    if (Passcode.length !== 6) {
      Alert.alert('Please enter the 6-digit of Passcode');
      return;
    }

    if (confirmPasscode !== Passcode) {
      Alert.alert('Please enter the correct confrimPasscode');
      return;
    }

    if (isStateModalVisible !== true) {
      Alert.alert('Please select Terms & Conditions');
      return;
    }
    if (isChcekbox !== true) {
      Alert.alert('Please select State');
      return;
    }

    this.props.navigation.navigate('OtpVerification');
  };

  render() {
    const {show, countryCode, flagImage} = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground source={Register} style={styles.image}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            <Image source={RightArr} style={styles.RifgthArrowImg} />
          </TouchableOpacity>
          <Text style={styles.welcomeText}>Register</Text>
        </ImageBackground>
        <ScrollView>
          <View style={styles.ContactView}>
            <TextInput
              style={[styles.TextInputStyle, {width: Scale(290)}]}
              maxLength={15}
              placeholder="name"
              placeholderTextColor={'black'}
              onChange={this.handlenameChange}
            />
            <Image source={Contact} style={{marginRight: Scale(20)}} />
          </View>
          <View style={styles.horizontalLine} />
          <View style={{flex: 0.2}}>
            <View style={styles.parentView}>
              {this.state.checkPress == true ? (
                <Text style={styles.FlagStyle}>{flagImage}</Text>
              ) : (
                <Image source={Flag} style={styles.FlagStyle} />
              )}
              {this.state.checkPress == true ? (
                <Text style={styles.countrycode}>{countryCode}</Text>
              ) : (
                <Text style={styles.countrycode}>+91</Text>
              )}
              <TouchableOpacity
                onPress={() => this.setState({show: true})}
                style={{marginRight: Scale(15)}}>
                <Image source={dropdown} />
              </TouchableOpacity>
              <CountryPicker
                show={show}
                pickerButtonOnPress={item => {
                  this.setState({
                    countryCode: item.dial_code,
                    flagImage: item.flag,
                    show: false,
                    checkPress: true,
                  });
                }}
              />
              <View style={styles.lineView} />
              <TextInput
                style={{
                  width: Scale(160),
                  fontWeight: 'bold',
                  fontSize: Scale(17),
                }}
                maxLength={15}
                placeholder="Mobile no"
                placeholderTextColor={'black'}
                onChange={this.handlePhoneNumberChange}
              />

                <Image source={Phone} style={{marginRight: Scale(35)}} />
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.ContactView}>
              <TextInput
                style={[styles.TextInputStyle, {width: Scale(285)}]}
                placeholder="Email Id"
                placeholderTextColor={'black'}
                onChange={this.handleemailIdChange}
              />

              <Image source={Email} style={{marginRight: Scale(20)}} />
            </View>
            <View style={styles.horizontalLine} />
            <Text
              style={[
                styles.countrycode,
                {marginLeft: Scale(20), marginTop: Scale(15)},
              ]}>
              Passcode
            </Text>
            <OtpInputs
              style={styles.OTPStyle}
              handleChange={this.handlePasscodeChange}
              numberOfInputs={6}
              autofillFromClipboard={false}
              inputStyles={styles.inputStyle}
              placeholder="*"
              placeholderTextColor={'black'}
            />
            <Text
              style={[
                styles.countrycode,
                {marginLeft: Scale(20), marginTop: Scale(5)},
              ]}>
              Confirm Passcode
            </Text>
            <OtpInputs
              style={styles.OTPStyle}
              handleChange={this.handleconfirmPasscodeChange}
              numberOfInputs={6}
              autofillFromClipboard={false}
              inputStyles={styles.inputStyle}
              placeholder="*"
              placeholderTextColor={'black'}
            />
            <View style={styles.ContactView}>
              <Text style={styles.countrycode}>{this.state.StateName}</Text>

              <TouchableOpacity onPress={this.toggleStateModal}>
                <Image source={DOWN} style={{marginRight: Scale(10)}} />
              </TouchableOpacity>
            </View>
            {this.state.isStateModalVisible == true ? (
              <View>
                <Modal animationType="slide">
                  <View>
                    <FlatList
                      style={{width: '100%'}}
                      data={this.state.stateList}
                      keyExtractor={item => item.stateCode}
                      renderItem={({item}) => (
                        <TouchableOpacity
                          onPress={() => this.handleStateChange(item)}
                          style={styles.ItemStyling}>
                          <Text style={styles.ItemText}>{item.name}</Text>
                        </TouchableOpacity>
                      )}
                    />
                  </View>
                </Modal>
              </View>
            ) : null}
            <View style={styles.horizontalLine} />
            <View style={styles.TermsparentView}>
              <TouchableOpacity
                style={[
                  styles.CheckboxStyle,
                  {backgroundColor: this.state.isChcekbox ? 'red' : 'white'},
                ]}
                onPress={() => {
                  this.setState({isChcekbox: !this.state.isChcekbox});
                }}>
                {this.state.isChcekbox == true ? (
                  <Image source={Checkbox} />
                ) : null}
              </TouchableOpacity>
              <Text style={styles.countrycode}>Agree Terms & Conditions</Text>
            </View>
            <View style={{height: Scale(30)}} />
            <TouchableOpacity
              style={styles.LoginButton}
              onPress={this.handleSubmit}>
              <Text style={[styles.welcomeText, {fontSize: Scale(18)}]}>
                REGISTER NOW
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  CircleParentView: {
    flexDirection: 'row',
    marginTop: Scale(20),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: Scale(260),
    marginLeft: Scale(10),
  },

  RifgthArrowImg: {
    marginHorizontal: Scale(20),
    marginBottom: Scale(10),
  },

  ForgotPasscode: {
    fontWeight: 'bold',
    fontSize: Scale(17),
    alignSelf: 'flex-end',
    color: 'red',
    marginRight: Scale(10),
  },

  LoginButton: {
    width: '90%',
    height: Scale(60),
    marginHorizontal: Scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Scale(20),
    alignSelf: 'center',
    backgroundColor: '#86a80c',
    borderRadius: Scale(40),
    shadowOpacity: Scale(3),
    shadowRadius: Scale(5),
    shadowColor: '#86a80c',
    elevation: 2,
    shadowOffset: {width: 3, height: 1},
  },

  OuterCircle: {
    borderWidth: Scale(2.5),
    borderColor: 'red',
    width: Scale(20),
    height: Scale(20),
    borderRadius: Scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerCircle: {
    backgroundColor: 'red',
    width: Scale(10),
    height: Scale(10),
    borderRadius: Scale(5),
  },

  horizontalLine: {
    width: '90%',
    height: Scale(2),
    backgroundColor: 'lightgrey',
    marginHorizontal: Scale(20),
    marginTop: Scale(15),
  },
  countrycode: {
    fontWeight: 'bold',
    fontSize: Scale(15),
    color:'black'
  },

  title: {
    fontSize: Scale(35),
    fontWeight: 'bold',
    marginTop: Scale(30),
    color: '#ffff',
  },

  image: {
    height: height/4,
    width: width,
    alignItems: 'flex-end',
    paddingBottom: Scale(40),
    flexDirection: 'row',
  },

  BlankView: {
    height: Scale(150),
  },

  welcomeText: {
    fontSize: Scale(24),
    fontWeight: 'bold',
    color: '#ffff',
  },

  bowlImage: {
    width: '65%',
    height: '105%',
    marginTop: Scale(40),
  },

  FlagStyle: {
    marginLeft: Scale(15),
  },

  parentView: {
    flexDirection: 'row',
    marginTop: Scale(20),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  lineView: {
    width: Scale(2),
    height: Scale(30),
    backgroundColor: 'lightgrey',
    marginRight: Scale(10),
  },

  borderStyleBase: {
    width: 30,
    height: 45,
  },

  inputStyle: {
    width: Scale(45),
    height: Scale(60),
    borderRadius: Scale(8),
    borderColor: 'lightgrey',
    borderWidth: Scale(2),
    fontSize: Scale(25),
    textAlign: 'center',
  },

  OTPStyle: {
    width: '100%',
    height: 80,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },

  TextInputStyle: {
    width: Scale(160),
    fontWeight: 'bold',
    fontSize: Scale(15),
  },

  ContactView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Scale(30),
    marginTop: Scale(20),
  },

  TermsparentView: {
    flexDirection: 'row',
    marginTop: Scale(20),
  },

  CheckboxStyle: {
    borderWidth: 1,
    borderColor: 'grey',
    width: Scale(18),
    height: Scale(18),
    borderRadius: Scale(4),
    marginHorizontal: Scale(15),
    alignItems: 'center',
    justifyContent: 'center',
  },

  ItemStyling: {
    height: Scale(40),
    backgroundColor: '#f2f5f3',
    margin: Scale(5),
    borderRadius:Scale(10),
    justifyContent:'center'
  },

  ItemText: {
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
