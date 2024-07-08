import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList, TextInput } from 'react-native';
import { Address, AddressMap, AdressSaveBtn, BackBtn, DOWN, Locations, redLocationIcon } from "./Assets";
import Scale, { ScaledFont } from './Scale';

interface Props { }
interface State { }


export default class AddSecondNewAddress extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            show: false,
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.RestaurantStyle2}>
                    <TouchableOpacity style={{ margin: Scale(20) }}

                    onPress={() => { this.props.navigation.navigate('AddNewAddress') }}>

                        <Image source={BackBtn}
                        />
                    </TouchableOpacity>
                    <Text style={styles.SpecialText}>Add New Address</Text>
                </View>

                <ImageBackground source={AddressMap}
                    style={styles.TextInputStyle}>
                    <Image source={redLocationIcon}
                        style={styles.ImageIcon} />
                </ImageBackground>

                <TextInput
                    style={[styles.NewTextInputStyle]}
                    placeholder='Address*'
                    placeholderTextColor={'black'}

                />

                <TextInput
                    style={[styles.NewTextInputStyle]}
                    placeholder='Land Mark*'
                    placeholderTextColor={'black'}

                />
                <View style={styles.ContactView}>

                    <Image source={Address}
                        style={styles.ImageIcon2} />

                    <Text style={styles.TitleStyle}>Manish Nagar, Ingole Nagar, Sonegaon, Nagpur, maharashtra 441004, India
                    </Text>
                </View>


                <TouchableOpacity style={styles.LoginButton}>
                    <Image source={AdressSaveBtn}
                        style={styles.LoginButton2} />
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },

    SpecialText: {
        fontSize: Scale(20),
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: Scale(14),
        color:'black'
    },

    RestaurantStyle2: {
        height: Scale(100),
        backgroundColor: '#ffff',
        flexDirection: 'row',
        alignItems: 'flex-end',
        shadowOpacity: Scale(10),
        shadowRadius: Scale(10),
        shadowColor: '#f5dbb3',
        elevation: 2,
        shadowOffset: { width: 3, height: 3 },

    },


    LoginButton: {
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

    TitleStyle: {
        fontWeight: 'bold',
        color: '#A2A3A5'

    },

    ContactView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: Scale(20),
        alignItems: 'center',
    },


    TextInputStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Scale(2),
        flex: 1
    },

    NewTextInputStyle: {
        height: Scale(60),
        borderBottomWidth: Scale(2),
        borderColor: '#E8E8E8',
        alignItems: 'center',
        paddingLeft: Scale(20),
        marginHorizontal: Scale(20),
        fontWeight: 'bold',
        marginTop: Scale(10)

    },

    ImageIcon: {
        width: Scale(30),
        height: Scale(45)
    },

    ImageIcon2: {
        width: Scale(15),
        height: Scale(25)
    },

});
