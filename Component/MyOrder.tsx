import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, TextInput, StatusBar, Modal, FlatList, Alert } from 'react-native';
import { BackBtn, MyOrderCall, Rating, myOrderHaqmburger, myOrderResataurant, redLocationIcon } from "../Component/Assets";
import Scale from './Scale';

interface Props { }
interface State { }


export default class MyOrder extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            isChcekbox: false,
            Data: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],


        };
    }

    renderRestaurantItem = ({ item }) => {
        return (

            <Image source={myOrderResataurant}
                style={styles.RestaurantStyl2}
            />
        );
    };

    renderHamBurgerItem = ({ item }) => {
        const { count } = this.state;
        return (
            <View style={styles.RectangleStyle}>
                <Image source={myOrderHaqmburger} />
                <View style={styles.BiryaniParent}>
                    <Text style={[styles.hamBurgerText]}>Hamburger</Text>
                    <Text style={styles.PriceText2}>₹100</Text>
                </View>
            </View>
        );
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
                    <Text style={styles.SpecialText}>Order</Text>
                </View>
                <ScrollView style={{ marginHorizontal: Scale(20) }}
                    showsVerticalScrollIndicator={false}>
                    <View style={[styles.OrderView, { marginTop: Scale(20) }]}>
                        <Text style={styles.OrderedText}>Order# ORD000003</Text>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('TrackOrderScreen')}}>
                            <Text style={styles.trackOrder}>Track Order</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.AddressText}>25 march, 03:25 pm</Text>
                    <Text style={styles.restaurantDetails}>Ordered Items</Text>
                    <FlatList
                        data={this.state.Data}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderHamBurgerItem}
                    />
                    <View style={[styles.OrderView]}>
                        <Text style={styles.restaurantDetails}>Total Bill</Text>
                        <Text style={styles.restaurantDetails}>₹300</Text>
                    </View>
                    <View style={styles.DashedlineView} />
                    <View style={[styles.OrderView]}>
                        <Text style={styles.delievryCharge}>Delievery Charge</Text>
                        <Text style={styles.delievryCharge}>₹0.00</Text>
                    </View>
                    <View style={styles.lineView} />
                    <View style={[styles.OrderView]}>
                        <Text style={styles.delievryCharge}>Packing Charge</Text>
                        <Text style={styles.delievryCharge}>₹ 9</Text>
                    </View>
                    <View style={styles.lineView} />

                    <View style={[styles.OrderView]}>
                        <Text style={styles.delievryCharge}>Tax Amount(5.0%)</Text>
                        <Text style={styles.delievryCharge}>₹15</Text>
                    </View>
                    <View style={styles.lineView} />
                    <View style={[styles.OrderView]}>
                        <Text style={styles.delievryCharge}>Total Discount</Text>
                        <Text style={styles.delievryCharge}>₹0.00</Text>
                    </View>
                    <View style={styles.DashedlineView} />
                    <View style={[styles.OrderView,]}>
                        <Text style={[styles.restaurantDetails, { marginTop: 0 }]}>Grand Total</Text>
                        <Text style={[styles.delievryCharge, { color: '#DF201F', marginTop: 0 }]}>₹324</Text>
                    </View>

                    <Text style={[styles.restaurantDetails, { marginTop: Scale(30) }]}>Restaurant Details</Text>
                    <FlatList
                        data={this.state.Data}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderRestaurantItem}
                    />

                    <Text style={[styles.BiryaniText]}>Golden Fish Restaurant</Text>
                    <View style={styles.BiryaniViewnew}>
                        <Image source={redLocationIcon} />
                        <Text style={[styles.PriceText]}>2.5km</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: Scale(130), marginLeft: Scale(20) }}>
                            <Image source={Rating} />
                            <Image source={Rating} />
                            <Image source={Rating} />
                            <Image source={Rating} />
                            <Image source={Rating} />
                        </View>
                    </View>
                    <Text style={styles.AddressText}> 
                    manish nagar,Ingole nagar,Sonegaon,nagpur
                    </Text>
                </ScrollView>
                <TouchableOpacity style={styles.navigationView}>
                    <Image source={MyOrderCall} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,

    },

    BiryaniParent: {
        marginLeft: Scale(15),
    },

    OrderView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    OrderedText: {
        fontSize: Scale(20),
        fontWeight: 'bold',
    },

    trackOrder: {
        color: '#94CD00',
        fontWeight: 'bold',
        fontSize: Scale(15),
    },

    navigationView: {
        width: Scale(50),
        height: Scale(50),
        borderRadius: Scale(25),
        backgroundColor: '#94CD00',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        margin: Scale(20),
    },

    SpecialText: {
        fontSize: Scale(20),
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: Scale(14)
    },

    restaurantDetails: {
        fontSize: Scale(16),
        fontWeight: 'bold',
        marginTop: Scale(20)
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

    BiryaniText: {
        fontWeight: 'bold',
        fontSize: Scale(18),
        marginTop: Scale(10)
    },

    hamBurgerText: {
        fontWeight: 'bold',
        fontSize: Scale(16),
        marginTop: Scale(10)
    },


    BiryaniView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Scale(5)
    },

    BiryaniViewnew: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Scale(10)
    },

    PriceText: {
        fontWeight: 'bold',
        fontSize: Scale(15),
        color: '#d12e2e',
        marginLeft: Scale(6)
    },

    PriceText2: {
        fontWeight: 'bold',
        color: '#d12e2e',
        marginTop: Scale(5),
    },

    goldenText: {
        color: 'grey',
        marginLeft: Scale(5)
    },

    AddressText: {
        color: 'gray',
        marginTop: Scale(8),
        fontSize: Scale(15),
        // width: "90%",
        // backgroundColor: 'red'
    },

    RestaurantStyl2: {
        marginHorizontal: Scale(5),
        marginTop: Scale(15),
        borderRadius: Scale(10),
    },

    RectangleStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffff',
        marginTop: Scale(10),
        borderRadius: Scale(10),
        borderWidth: 1.5,
        borderColor: 'lightgray',
        padding: Scale(15),
        marginRight: Scale(8)
    },

    delievryCharge: {
        color: '#A2A3A5',
        fontWeight: 'bold',
        fontSize: Scale(15),
    },

    DashedlineView: {
        marginVertical: Scale(15), 
        borderWidth:2,
        borderStyle:"dashed",
        borderColor:'#C4C4C4'

    },

    lineView: {
        height: Scale(0.5),
        backgroundColor: '#C4C4C4',
        marginVertical: Scale(15), 
       
    }

});
