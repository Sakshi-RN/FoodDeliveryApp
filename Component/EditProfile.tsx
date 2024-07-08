import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, TextInput, StatusBar, Modal, FlatList, Alert } from 'react-native';
import { Phone, imagePicker, RightArr, Contact, Email, SaveProfileBtn, BackBtn } from "../Component/Assets";
import { Country, State, City } from 'country-state-city';
import Scale from './Scale';
import OtpInputs from 'react-native-otp-inputs';
import { CountryPicker } from "react-native-country-codes-picker";
import { getAllStates } from 'country-state-city/lib/state';


interface Props { }
interface State { }


export default class EditProfile extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            isChcekbox: false,
            state: '',
            show: false,
            countryCode: "",
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
            newPasscode: ''
        };

    }

    componentDidMount() {
        const { selectedState } = this.state;
        const states = getAllStates(selectedState);
        this.setState({ states });
        State.getStatesOfCountry('IN');
        this.setState({ stateList: State.getStatesOfCountry('IN') });
    }



    handlePhoneNumberChange = (MobileNum) => {
        this.setState({ MobileNum });
    };

    handlePasscodeChange = (Passcode) => {
        this.setState({ Passcode });
    };

    handleconfirmPasscodeChange = (confirmPasscode) => {
        this.setState({ confirmPasscode });
    };


    handleNewPasscodeChange = (newPasscode) => {
        this.setState({ newPasscode });
    };

    handlenameChange = (name) => {
        this.setState({ name });
    };

    handleemailIdChange = (emailId) => {
        this.setState({ emailId });
    };

    handleSubmit = () => {
        const { Passcode, newPasscode, confirmPasscode, MobileNum, checkPress, name, emailId, isChcekbox, isStateModalVisible } = this.state;

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

        if (newPasscode !== true) {
            Alert.alert('Please enter new  Passcode');
            return;
        }

        if (Passcode.length !== 6) {
            Alert.alert('Please enter the 6-digit of Old Passcode');
            return;
        }


        if (confirmPasscode !== newPasscode) {
            Alert.alert('Please enter the correct confrimPasscode');
            return;
        }

        this.props.navigation.navigate("ProfileScreen");
    };


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.RestaurantStyle}>
                    <TouchableOpacity style={{ margin: Scale(20) }}
                        onPress={() => { this.props.navigation.navigate('ProfileScreen') }}>
                        <Image source={BackBtn}
                        />
                    </TouchableOpacity>
                    <Text style={styles.SpecialText}>Edit Profile </Text>
                </View>
                <ScrollView>
                    <TouchableOpacity style={{ marginTop: Scale(20), alignSelf: 'center' }}>
                        <Image source={imagePicker} />
                    </TouchableOpacity>

                    <View style={styles.ContactView}>
                        <TextInput
                            style={[styles.TextInputStyle, { width: Scale(290) }]}
                            maxLength={15}
                            placeholder='Sachin Singh'
                            placeholderTextColor={'black'}
                            onChange={this.handlenameChange} />
                        <Image source={Contact}
                            style={{ marginRight: Scale(20) }} />
                    </View>
                    <View style={styles.horizontalLine} />

                    <View style={styles.ContactView}>
                        <TextInput
                            style={[styles.TextInputStyle, { width: Scale(285) }]}

                            maxLength={15}
                            placeholder='1234567890'
                            placeholderTextColor={'black'}
                            onChange={this.handlePhoneNumberChange} />
                        <Image source={Phone}
                        />
                    </View>

                    <View style={styles.horizontalLine} />
                    <View style={styles.ContactView}>
                        <TextInput
                            style={[styles.TextInputStyle, { width: Scale(285) }]}
                            maxLength={15}
                            placeholder='sachinexample@gmail.com'
                            placeholderTextColor={'black'}
                            onChange={this.handleemailIdChange} />

                        <Image source={Email}
                            style={{ marginRight: Scale(20) }} />

                    </View>
                    <View style={styles.horizontalLine} />
                    <Text style={[styles.countrycode, { marginLeft: Scale(20), marginTop: Scale(15) }]}>Old Passcode</Text>
                    <OtpInputs
                        style={styles.OTPStyle}
                        handleChange={this.handlePasscodeChange}
                        numberOfInputs={6}
                        autofillFromClipboard={false}
                        inputStyles={styles.inputStyle}
                        placeholder='*'
                        placeholderTextColor={'black'}
                    />
                    <Text style={[styles.countrycode, { marginLeft: Scale(20), marginTop: Scale(5) }]}>new Passcode</Text>
                    <OtpInputs
                        style={styles.OTPStyle}
                        handleChange={this.handleNewPasscodeChange}
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
                    <Image source={SaveProfileBtn}
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

    SpecialText: {
        fontSize: Scale(20),
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: Scale(14)
    },

    RestaurantStyle: {
        height: Scale(100),
        backgroundColor: '#ffff',
        flexDirection: 'row',
        alignItems: 'flex-end',
        shadowOpacity: Scale(3),
        shadowRadius: Scale(10),
        shadowColor: '#fce5cc',
        elevation: 2,
        shadowOffset: { width: 3, height: 3 },
    },


    LoginButton: {
        width: "98%",
        shadowOpacity: Scale(2),
        shadowRadius: Scale(1),
        shadowColor: '#7fe602',
        elevation: 2,
        shadowOffset: { width: 2, height: 1 },
        marginBottom: Scale(10)
    },

    LoginButton2: {
        width: "98%",
        height: Scale(100),
        alignSelf: 'center'
    },

    horizontalLine: {
        width: "90%",
        height: Scale(2),
        backgroundColor: 'lightgrey',
        marginHorizontal: Scale(20),
        marginTop: Scale(15)
    },

    countrycode: {
        fontWeight: 'bold',
        fontSize: Scale(15),

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
        marginRight: Scale(10)
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

    TextInputStyle: {
        width: Scale(160),
        fontWeight: 'bold',
        fontSize: Scale(15),
    },

    ContactView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: Scale(30),
        marginTop: Scale(20)
    },





});
