import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList, TextInput } from 'react-native';
import { AdressSaveBtn, BackBtn, DOWN } from "./Assets";
import Scale, { ScaledFont } from './Scale';

interface Props { }
interface State { }


export default class AddNewAddress extends Component<Props, State> {

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
                                        onPress={() => { this.props.navigation.navigate('Cart') }}>

                        <Image source={BackBtn}
                        />
                    </TouchableOpacity>
                    <Text style={styles.SpecialText}>Add New Address</Text>
                </View>
                <ScrollView style={{ paddingHorizontal: Scale(20), marginTop: Scale(20) }}>

                    <Text style={styles.TitleStyle}>Country/Region</Text>
                    <View style={styles.ContactView}>
                        <TextInput
                            style={[styles.TextInputStyle]}
                            placeholder='India'

                        />
                        <TouchableOpacity>
                            <Image source={DOWN}
                                style={{ marginRight: Scale(20) }} />
                        </TouchableOpacity>

                    </View>
                    <Text style={styles.TitleStyle}>PIN Code</Text>
                    <TextInput
                        style={[styles.NewTextInputStyle]}
                        placeholder='444001'

                    />
                    <Text style={styles.TitleStyle}>Flat, House, Building, Company, Apartment
                    </Text>
                    <TextInput
                        style={[styles.NewTextInputStyle]}
                        placeholder='Flat....'

                    />
                    <Text style={styles.TitleStyle}>Area, Colony, Street, Sector, Village
                    </Text>
                    <TextInput
                        style={[styles.NewTextInputStyle]}
                        placeholder='Jafar nagar'

                    />
                    <Text style={styles.TitleStyle}>Landmark
                    </Text>
                    <TextInput
                        style={[styles.NewTextInputStyle]}
                        placeholder='Shivaji Putla'

                    />
                    <Text style={styles.TitleStyle}>Town/City
                    </Text>
                    <TextInput
                        style={[styles.NewTextInputStyle]}
                        placeholder='nagpur'

                    />
                </ScrollView>
                <TouchableOpacity style={styles.LoginButton}
                    onPress={() => { this.props.navigation.navigate('AddSecondNewAddress') }}>

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
        marginBottom: Scale(10)
    },

    LoginButton2: {
        width: "98%",
        height: Scale(100),
        alignSelf: 'center'
    },

    TitleStyle: {
        fontWeight: 'bold',
        // marginTop:Scale(10)

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

    }






});
