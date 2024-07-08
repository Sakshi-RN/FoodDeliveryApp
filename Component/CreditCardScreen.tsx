import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList, TextInput, Modal } from 'react-native';
import { AdressSaveBtn, BackBtn, Creditcard, DOWN, PayNowBtn, icon } from "./Assets";
import Scale, { ScaledFont } from './Scale';

interface Props { }
interface State { }


export default class CreditCardScreen extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            modalVisible: false,
        };
    }

    toggleModal = () => {
        this.setState(() => ({
            modalVisible: true,
        }));
    };


    closeModal = () => {
        this.setState({ modalVisible: false });
    };

    onBack =()=>{
        this.props.navigation.navigate('CheckoutScreen')
    }

    rendermodal = () => (
           
                <Modal
                    visible={this.state.modalVisible}
                    transparent={true}
                >

                    <View style={styles.modalParent}>
                        <View style={styles.modalView}>
                            <TouchableOpacity style={styles.LoginButton}
                                onPress={this.closeModal}>
                                <Image source={icon} />
                            </TouchableOpacity>
                            <Text style={[styles.TitleStyle, {  fontSize: Scale(18) }]}>Order Successful</Text>
                        </View>
                    </View>
                </Modal>

        )
    

    render() {
        const { modalVisible } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.RestaurantStyle2}>
                    <TouchableOpacity style={{ margin: Scale(20) }}
                    onPress={this.onBack}>
                        <Image source={BackBtn}
                        />
                    </TouchableOpacity>
                    <Text style={styles.SpecialText}>Credit Card</Text>
                </View>
                <View style={{ paddingHorizontal: Scale(20), marginTop: Scale(20) }}>
                    <Text style={styles.TitleStyle}>Card number</Text>
                    <TextInput
                        style={[styles.NewTextInputStyle]}
                        placeholder='XXXX XXXX XXXX'

                    />
                    <View style={
                        styles.CardCodeView
                    }>
                        <Text style={styles.TitleStyle}>Expire </Text>
                        <Text style={styles.TitleStyle}>CVC Code </Text>
                    </View>
                    <View style={
                        styles.CardCodeView2}>

                        <TextInput
                            style={[styles.CardTextInputStyle]}
                            placeholder='DD/ mm/ yy'

                        />

                        <TextInput
                            style={[styles.CardTextInputStyle]}
                            placeholder='000'

                        />

                    </View>

                    <Text style={styles.TitleStyle}>Card Holder name</Text>

                    <View style={styles.ContactView}>
                        <TextInput
                            style={[styles.TextInputStyle]}
                            placeholder='Rajesh Singh'

                        />
                        <TouchableOpacity>
                            <Image source={Creditcard}
                                style={{ marginRight: Scale(20) }} />
                        </TouchableOpacity>

                    </View>

                </View>
                <TouchableOpacity style={styles.LoginButton}
                    onPress={this.toggleModal}>
                    <Image source={PayNowBtn}
                        style={styles.LoginButton2} />
                </TouchableOpacity>

                {this.rendermodal()}

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },

    modalParent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(130,140,140,0.5)'
    },

    modalView: {
        backgroundColor: 'white',
        paddingHorizontal: Scale(30),
        paddingVertical: Scale(20),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Scale(10),
    },

    SpecialText: {
        fontSize: Scale(20),
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: Scale(14)
    },

    RestaurantStyle2: {
        height: Scale(100),
        backgroundColor: '#ffff',
        flexDirection: 'row',
        alignItems: 'flex-end',
        shadowOpacity: Scale(3),
        shadowRadius: Scale(10),
        shadowColor: '#f5dbb3',
        elevation: 2,
        shadowOffset: { width: 1, height: 1 },
        borderWidth: 0.3,
        borderColor: '#f5dbb3',
    },


    LoginButton: {
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

    TitleStyle: {
        fontWeight: 'bold',

    },

    ContactView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: Scale(10),
        borderRadius: Scale(10),
        height: Scale(60),
        borderWidth: 2,
        borderColor: '#E8E8E8',
        alignItems: 'center',
    },


    TextInputStyle: {
        width: Scale(160),
        fontWeight: 'bold',
        fontSize: Scale(15),
        color: '#E8E8E8',
        paddingLeft: Scale(20)

    },

    NewTextInputStyle: {
        borderRadius: Scale(10),
        height: Scale(60),
        borderWidth: 2,
        borderColor: '#E8E8E8',
        alignItems: 'center',
        paddingLeft: Scale(20),
        marginVertical: Scale(10),
        fontWeight: 'bold',

    },

    CardCodeView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Scale(252)
    },

    CardTextInputStyle: {
        borderRadius: Scale(10),
        width: '47%',
        borderWidth: 2,
        borderColor: '#E8E8E8',
        alignItems: 'center',
        padding: Scale(20),
        marginVertical: Scale(10),
        fontWeight: 'bold',
    },

    CardCodeView2: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },



});
