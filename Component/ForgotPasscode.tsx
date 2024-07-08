import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, TextInput, StatusBar, Modal, FlatList, Alert, Dimensions } from 'react-native';
import { forgotpasscodebg, Phone, RightArr, SendOTPbtn, questionmark } from "../Component/Assets";
import { Country, State, City } from 'country-state-city';
import Scale from './Scale';



interface Props { }
interface State { }

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
export default class ForgotPasscode extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            isChcekbox: false,
            MobileNum: ''
        };
    }

    handlePhoneNumberChange = (MobileNum) => {
        this.setState({ MobileNum });
    };

    handleSubmit = () => {
        const { otp, isGrey, MobileNum, checkPress } = this.state;

        if (MobileNum.length == '') {
            Alert.alert('Please enter the mobile number');
            return;
        }

        this.props.navigation.navigate("PasscodeOTPVerification");
    };


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={forgotpasscodebg}
                    style={styles.image}>
                    <View style={{ height: 80 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}>
                            <Image source={RightArr}
                                style={styles.RifgthArrowImg} />
                        </TouchableOpacity>
                        <Text style={styles.welcomeText}>Forgot Passcode</Text>
                    </View>
                </ImageBackground>
              
                <ScrollView >
                    <Image source={questionmark}
                        style={styles.quesimage}
                    />
                    <Text style={[styles.ForgotPasscode]}>mobile no</Text>
                    <View style={styles.ContactView}>
                        <TextInput
                            style={[styles.TextInputStyle, { width: Scale(285) }]}
                            maxLength={15}
                            placeholder='9876543210'
                            placeholderTextColor={'gray'}
                            onChange={this.handlePhoneNumberChange}  />
                        <Image source={Phone} />
                    </View>
                    <View style={styles.BlankView} />
                   </ScrollView>
                    <TouchableOpacity style={styles.LoginButton}
                        onPress= { this.handleSubmit}>
                        <Image source={SendOTPbtn}
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
        color:'black'
    },

    image: {
        width:width,
        height:height/4,
        paddingBottom: Scale(20),
    },

    BlankView: {
        height: Scale(150)
    },

    welcomeText: {
        fontSize: Scale(22),
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
    },

    LoginButton2: {
        width: "98%",
        height: Scale(100),
        alignSelf: 'center'
    },

    quesimage: {
        alignSelf: 'center',
        marginTop: Scale(25)
    }

});
