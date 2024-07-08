import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, TextInput, StatusBar, Modal, FlatList, Alert, Dimensions } from 'react-native';
import { setpasscodebg, forgotpasscodebtn, RightArr } from "../Component/Assets";
import OtpInputs from 'react-native-otp-inputs';
import Scale from './Scale';



interface Props { }
interface State { }

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
export default class SetNewPasscode extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            isChcekbox: false,
            Passcode: '',
            confirmPasscode: '',
        };

    }

    handlePasscodeChange = (Passcode) => {
        this.setState({ Passcode });
    };

    handleconfirmPasscodeChange = (confirmPasscode) => {
        this.setState({ confirmPasscode });
    };
    handleSubmit = () => {
        const { Passcode, confirmPasscode } = this.state;

        if (Passcode.length !== 6) {
            Alert.alert('Please enter the 6-digit of Passcode');
            return;
        }

        if (confirmPasscode !== Passcode) {
            Alert.alert('Please enter the correct confrimPasscode');
            return;
        }

        this.props.navigation.navigate("Login");
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={setpasscodebg}
                    style={styles.image}>
                    <View style={{ height: 80 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('PasscodeOTPVerification') }}>
                            <Image source={RightArr}
                                style={styles.RifgthArrowImg} />
                        </TouchableOpacity>
                        <Text style={styles.welcomeText}>Set New Passcode</Text>
                    </View>
                </ImageBackground>
                <ScrollView style={{ flex: 0.5, marginTop: Scale(10) }}>
                    <Text style={[styles.countrycode, { marginLeft: Scale(20), marginTop: Scale(15) }]}> new Passcode</Text>
                    <OtpInputs
                        style={styles.OTPStyle}
                        handleChange={this.handlePasscodeChange}
                        numberOfInputs={6}
                        autofillFromClipboard={false}
                        inputStyles={styles.inputStyle}
                        placeholder='*'
                        placeholderTextColor={'black'}
                    />
                    <Text style={[styles.countrycode, { marginLeft: Scale(20), marginTop: Scale(5) }]}>Confirm Passcode</Text>
                    <OtpInputs
                        style={styles.OTPStyle}
                        handleChange={this.handleconfirmPasscodeChange}
                        numberOfInputs={6}
                        autofillFromClipboard={false}
                        inputStyles={styles.inputStyle}
                        placeholder='*'
                        placeholderTextColor={'black'}
                    />
                    
                    </ScrollView>
                    <TouchableOpacity style={styles.LoginButton}
                        onPress={this.handleSubmit}>
                        <Image source={forgotpasscodebtn}
                            style={styles.LoginButton2} />
                    </TouchableOpacity>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    RifgthArrowImg: {
        marginHorizontal: Scale(15),
    },

    ForgotPasscode: {
        fontSize: Scale(16),
        fontWeight: 'bold',
        marginLeft: Scale(20),
        marginTop: Scale(20),
    },

    image: {
        width:width,
        height:height/4,
        paddingBottom: Scale(20),
    },

  

    welcomeText: {
        fontSize: Scale(20),
        fontWeight: 'bold',
        color: '#ffff',
    },

    parentView: {
        flexDirection: 'row',
        marginTop: Scale(20),
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    TextInputStyle: {
        width: Scale(160),
        fontWeight: 'bold',
        fontSize: Scale(15),
    },

    ContactView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: Scale(20),
        marginTop: Scale(10),
        borderWidth: 2,
        borderColor: 'lightgray',
        width: "90%",
        height: Scale(50),
        borderRadius: Scale(8),
        alignSelf: 'center',
        alignItems: 'center'
    },

    LoginButton: {
        width: "98%",
        shadowOpacity: Scale(2),
        shadowRadius: Scale(1),
        shadowColor: '#7fe602',
        elevation: 2,
        shadowOffset: { width: 2, height: 1 },
        marginVertical: Scale(20)
    },

    LoginButton2: {
        width: "98%",
        height: Scale(100),
        alignSelf: 'center'
    },

    quesimage: {
        alignSelf: 'center',
        marginTop: Scale(25)
    },

    inputStyle: {
        width: Scale(45),
        height: Scale(60),
        borderRadius: Scale(8),
        borderColor: 'lightgrey',
        borderWidth: Scale(2),
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
    },

    countrycode: {
        fontWeight: 'bold',
        fontSize: Scale(15),
    },

});
