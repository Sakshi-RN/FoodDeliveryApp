import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,
     ImageBackground, TextInput, Alert, ScrollView,Dimensions} from 'react-native';
import { login, Ellipsebowl, Phone, dropdown, Flag } from "../Component/Assets";
import { RFValue } from "react-native-responsive-fontsize";
import OtpInputs from 'react-native-otp-inputs';
import { CountryPicker } from "react-native-country-codes-picker";
import Scale from './Scale';

interface Props { }
interface State { }

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
export default class Login extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            show: false,
            countryCode: "",
            flagImage: '',
            isGrey: false,
            checkPress: false,
            otp: '',
            MobileNum: '',
            data: [],
            loading: false,
            error: null
        };

    }

    handlePhoneNumberChange = (MobileNum) => {
        this.setState({ MobileNum });
    };

    handleOTPChange = (otp) => {
        this.setState({ otp });
    };

    handleSubmit = () => {
        const { otp, isGrey, MobileNum, checkPress } = this.state;

        if (MobileNum.length == '') {
            Alert.alert('Please enter the mobile number');
            return;
        }

        if (checkPress !== true) {
            Alert.alert('Please select CountryCode');
            return;
        }

        if (otp.length !== 6) {
            Alert.alert('Please enter the 6-digit of Passcode');
            return;
        }

        if (isGrey !== true) {
            Alert.alert('Please select usertype');
            return;
        }

        this.props.navigation.navigate("BottomTab");
    };


    render() {
        const { show, countryCode, flagImage } = this.state;

        return (

            <View style={styles.container}>
                <ImageBackground source={login}
                    style={styles.image}
                    resizeMode='cover'>
                    <View style={{ flexDirection: 'row',justifyContent:'space-between',width:'100%'}}>
                        <View style={{ justifyContent: 'flex-end',marginLeft:Scale(20) }}>
                            <Text style={styles.title}>Login</Text>
                            <Text style={styles.welcomeText}>Welcome Back!</Text>
                            <View style={{ height: RFValue(60) }} />
                        </View>
                        <Image source={Ellipsebowl}
                            style={styles.bowlImage} />
                    </View>
                </ImageBackground>
                <ScrollView>
                <View style={{ flex: 0.5 }}>
                    <View style={styles.parentView}>
                        {this.state.checkPress === true ?
                            <>

                                <Text
                                    style={styles.FlagStyle}>
                                    {flagImage}
                                </Text>

                                <Text style={styles.countrycode} >
                                    {countryCode}
                                </Text>
                            </> :
                            <>

                                <Image source={Flag}
                                    style={styles.FlagStyle} />
                                <Text style={styles.countrycode}>+91</Text>
                            </>}


                        <TouchableOpacity
                            onPress={() => this.setState({ show: true })}
                            style={{ marginRight: RFValue(15) }}
                        >
                            <Image source={dropdown} />
                        </TouchableOpacity>
                        <CountryPicker
                            show={show}
                            pickerButtonOnPress={(item) => {
                                this.setState({
                                    countryCode: item.dial_code,
                                    flagImage: item.flag,
                                    show: false,
                                    checkPress: true
                                });
                                console.log("@@@@@@@@@items", item);
                            }}
                        />
                        <View style={styles.lineView} />
                        <TextInput
                            style={{
                                width: RFValue(160), fontWeight: 'bold',
                                fontSize: RFValue(17),
                            }}
                            maxLength={15}
                            placeholder='Mobile no'
                            placeholderTextColor={'black'}
                            onChange={this.handlePhoneNumberChange} />
                        <TouchableOpacity style={{ marginRight: RFValue(20) }}>
                            <Image source={Phone} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.horizontalLine} />
                    <Text style={[styles.countrycode, { marginLeft: RFValue(20), marginTop: RFValue(15) }]}>Passcode</Text>
                    <OtpInputs
                        style={styles.OTPStyle}
                        handleChange={this.handleOTPChange}
                        numberOfInputs={6}
                        autofillFromClipboard={false}
                        inputStyles={styles.inputStyle}
                        placeholder='*'
                        placeholderTextColor={'black'}
                    />
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ForgotPasscode') }}>
                        <Text style={[styles.ForgotPasscode, { marginLeft: RFValue(15), fontSize: RFValue(15) }]}> Forgot Passcode</Text>
                    </TouchableOpacity>
                    <View style={styles.CircleParentView}>
                        <TouchableOpacity style={[styles.OuterCircle, { borderColor: this.state.isGrey ? 'grey' : 'red' }]}
                            onPress={() => { this.setState({ isGrey: false }) }}>
                            <View style={[styles.innerCircle, { backgroundColor: this.state.isGrey ? 'grey' : 'red' }]} />
                        </TouchableOpacity>
                        <Text style={[styles.countrycode, { marginRight: RFValue(10) }]}>Customer</Text>
                        <TouchableOpacity style={[styles.OuterCircle, { marginLeft: RFValue(20), borderColor: this.state.isGrey ? 'red' : 'grey' }]}
                            onPress={() => { this.setState({ isGrey: true }) }}>
                            <View style={[styles.innerCircle, { backgroundColor: this.state.isGrey ? 'red' : 'grey' }]} />
                        </TouchableOpacity>
                        <Text style={[styles.countrycode, { marginRight: RFValue(22) }]}>Seller</Text>
                    </View>
                    <TouchableOpacity style={styles.LoginButton}
                        onPress={this.handleSubmit}>
                        <Text style={[styles.welcomeText]}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("SignUp") }}>
                        <Text style={[styles.countrycode, { alignSelf: 'center', marginTop: RFValue(15) }]}>Register now?</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View >

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    CircleParentView: {
        flexDirection: 'row',
        marginTop: RFValue(20),
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: RFValue(260),
        marginLeft: RFValue(10),
    },

    ForgotPasscode: {
        fontWeight: 'bold',
        fontSize: RFValue(17),
        alignSelf: 'flex-end',
        color: 'red',
        marginRight: RFValue(10)
    },

    LoginButton: {
        width: "90%",
        height: RFValue(55),
        marginHorizontal: RFValue(20),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: RFValue(20),
        alignSelf: 'center',
        backgroundColor: 'red',
        borderRadius: RFValue(40),
        shadowOpacity: RFValue(3),
        shadowRadius: RFValue(5),
        shadowColor: 'red',
        elevation: 2,
        shadowOffset: { width: 3, height: 1 },
    },

    OuterCircle: {
        borderWidth: RFValue(2.5),
        borderColor: 'red',
        width: RFValue(20),
        height: RFValue(20),
        borderRadius: RFValue(10),
        alignItems: 'center',
        justifyContent: 'center'

    },

    innerCircle: {
        backgroundColor: 'red',
        width: RFValue(10),
        height: RFValue(10),
        borderRadius: RFValue(5)
    },

    horizontalLine: {
        width: "90%",
        height: RFValue(2),
        backgroundColor: 'lightgrey',
        marginHorizontal: RFValue(20),
        marginTop: RFValue(15)
    },

    countrycode: {
        fontWeight: 'bold',
        fontSize: RFValue(17),
        color:'black'

    },

    title: {
        fontSize: RFValue(35),
        fontWeight: 'bold',
        marginTop: RFValue(30),
        color: '#ffff',
    },
    image: {
        width:width,
        height:height/1.6,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingTop: RFValue(30),
       // alignSelf:'center'
    },

    BlankView: {
        height: RFValue(150)
    },

    welcomeText: {
        fontSize: RFValue(20),
        fontWeight: 'bold',
        marginTop: RFValue(10),
        color: '#ffff',

    },

    bowlImage: {
        width:width/2,
        height:height/2,
        marginTop: RFValue(40)
    },

    FlagStyle: {
        marginLeft: RFValue(15)
    },

    parentView: {
        flexDirection: 'row',
        marginTop: RFValue(30),
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    lineView: {
        width: RFValue(2),
        height: RFValue(30),
        backgroundColor: 'lightgrey'
    },

    borderStyleBase: {
        width: 30,
        height: 45
    },

    inputStyle: {
        width: RFValue(45),
        height: RFValue(60),
        borderRadius: RFValue(8),
        borderColor: 'lightgrey',
        borderWidth: RFValue(2),
        fontSize: RFValue(25),
        textAlign: 'center'
    },

    OTPStyle: {
        width: '100%',
        height: RFValue(80),
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
    }



});
