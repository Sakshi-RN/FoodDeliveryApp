import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, TextInput, StatusBar, Modal, FlatList, Alert } from 'react-native';
import {
    BackBtn, 
 
    OrderConfirm,
    OrderProcessed,
    ReadyPickup,

} from "../Component/Assets";
import Scale from './Scale';

interface Props { }
interface State { }


export default class TrackOrderScreen extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            isChcekbox: false,

        };
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.RestaurantStyle}>
                    <TouchableOpacity style={{ margin: Scale(20) }}
                        onPress={() => { this.props.navigation.navigate('MyOrder') }}>
                        <Image source={BackBtn}
                        />
                    </TouchableOpacity>
                    <Text style={styles.SpecialText}>Track Order</Text>
                </View>

                <View style={{ flexDirection: 'row', marginLeft: Scale(20), marginTop: Scale(20) }}>
                    <View style={styles.ParentLine}>
                        <View style={{ height: Scale(50) }} />
                        <View style={[styles.CircleView]} />
                        <View style={styles.lineView} />
                        <View style={styles.CircleView} />
                        <View style={[styles.lineView, { backgroundColor: '#B9BABB' }]} />
                        <View style={[styles.CircleView, { backgroundColor: '#B9BABB' }]} />
                    </View>
                    <View>
                        <Image source={OrderConfirm} />
                        <Image source={OrderProcessed} />
                        <Image source={ReadyPickup}
                            style={{ marginLeft: Scale(10) }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,

    },

    OrderView: {
        flexDirection: 'row',
        alignItems: 'center'
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
        shadowOffset: { width: 3, height: 3 }
    },

    lineView: {
        height: Scale(80),
        width: Scale(2),
        backgroundColor: '#DF201F',

    },

    CircleView: {
        height: Scale(10),
        width: Scale(10),
        borderRadius: Scale(5),
        backgroundColor: '#DF201F'
    },

    ParentLine: {
        alignItems: 'center'
    }

});
