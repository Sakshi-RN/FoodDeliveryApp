import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,Alert } from 'react-native';
import { Mails, btn, Resend, otpmails, otpverificationBg, resendCaptcha } from "../Component/Assets";
import Scale from './Scale';
import OtpInputs from 'react-native-otp-inputs';

interface Props { }
interface State { }


export default class OtpVerification extends Component<Props, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            Passcode: '',
        };

    }


    handlePasscodeChange = (Passcode) => {
        this.setState({ Passcode });
    };

    handleSubmit = () => {
        const { Passcode } = this.state;

        if (Passcode.length !== 4) {
            Alert.alert('Please enter the 4-digit of Passcode');
            return;
        }
        
        this.props.navigation.navigate("Location");
    };


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.CircleParentView} />
                <Text style={[styles.countrycode]}>OTP Verification</Text>
                <View style={styles.FlagStyle}>
                    <Image source={Mails}
                        style={styles.image} />
                </View>
                <Text style={styles.welcomeText}>Enter The OTP Sent To</Text>
                <Text style={styles.title}>+91 987654321</Text>
                <OtpInputs
                    style={styles.OTPStyle}
                    handleChange={this.handlePasscodeChange}
                    numberOfInputs={4}
                    autofillFromClipboard={false}
                    inputStyles={styles.inputStyle}
                />
                <TouchableOpacity style={styles.parentView}>
                    <Image source={Resend} />
                </TouchableOpacity>
                <View style={styles.BlankView} />
                <TouchableOpacity style={styles.LoginButton}
                    onPress={this.handleSubmit}>
                    <Image source={btn}
                        style={styles.LoginButton2} />
                </TouchableOpacity>
            </View >

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e60202',
        alignItems: 'center'
    },

    CircleParentView: {
        height: Scale(80)
    },

    ForgotPasscode: {
        fontWeight: 'bold',
        fontSize: Scale(17),
        alignSelf: 'flex-end',
        color: 'red',
        marginRight: Scale(10)
    },

    LoginButton: {
        width: "95%",
        shadowOpacity: Scale(2),
        shadowRadius: Scale(2),
        shadowColor: '#7fe602',
        elevation: 2,
        shadowOffset: { width: 3, height: 1 },

    },

    LoginButton2: {
        width: "95%",
        height: Scale(100),
        alignSelf: 'center'
    },

    countrycode: {
        fontWeight: 'bold',
        fontSize: Scale(23),
        color: '#ffff'
    },

    title: {
        fontSize: Scale(20),
        fontWeight: 'bold',
        marginTop: Scale(10),
        color: '#ffff',
    },

    image: {
        marginTop: Scale(20),
        height: Scale(110),
        width: Scale(110)
    },

    BlankView: {
        height: Scale(140)
    },

    welcomeText: {
        fontSize: Scale(15),
        fontWeight: 'bold',
        marginTop: Scale(30),
        color: '#ffff',

    },


    FlagStyle: {
        height: Scale(150),
        marginTop: Scale(20)
    },

    parentView: {
        marginTop: Scale(30),
    },


    inputStyle: {
        width: Scale(50),
        height: Scale(60),
        borderRadius: Scale(10),
        backgroundColor: '#ffff',
        fontSize: Scale(25),
        textAlign: 'center'
    },

    OTPStyle: {
        width: '100%',
        height: 80,
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Scale(20)
    }



});
