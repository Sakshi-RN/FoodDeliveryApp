import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList, TextInput } from 'react-native';
import {  BackBtn, PayNowBtn} from "./Assets";
import Scale, { ScaledFont } from './Scale';

interface Props { }
interface State { }


export default class UPIScreen extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            show: false,
        };
    }

    onBack =()=>{
        this.props.navigation.navigate('CheckoutScreen')
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.RestaurantStyle2}>
                    <TouchableOpacity style={{ margin: Scale(20) }}
                    onPress={this.onBack}>
                        <Image source={BackBtn}
                        />
                    </TouchableOpacity>
                    <Text style={styles.SpecialText}>Bank Account</Text>
                </View>
                <ScrollView style={{ paddingHorizontal: Scale(20), marginTop: Scale(20) }}>
                <Text style={styles.TitleStyle}>IFSC Code</Text>
                    <TextInput
                        style={[styles.NewTextInputStyle]}
                        placeholder='XXXX XXXX XXXX'

                    />

                </ScrollView>

                <TouchableOpacity style={styles.LoginButton}>
                    <Image source={PayNowBtn}
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



});
