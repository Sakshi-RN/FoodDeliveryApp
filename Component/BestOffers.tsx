import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList, TextInput } from 'react-native';
import { DishIcon, spclFood, BestOfferBanners, redOffer, greenOffer } from "../Component/Assets";
import Scale, { ScaledFont } from './Scale';
import Swiper from 'react-native-swiper'
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props { }
interface State { }


export default class BestOffers extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            show: false,
            Data: [
                { id: 0 },
                { id: 1 },
                { id: 2 },
                { id: 3 }

            ],

        };
    }

    renderTodaySpclItem = ({ item }) => {
        return (
            <View style={styles.RectangleStyle}>
                <Image source={spclFood} />
                <View style={styles.BiryaniParent}>
                    <Text style={[styles.BiryaniText]}>Best Veg Dum Biryani</Text>
                    <Text style={styles.PriceText}>₹100 ₹200</Text>
                    <View style={styles.BiryaniView}>
                        <Image source={DishIcon} />
                        <Text style={styles.goldenText}>Golden Fish Restaurant</Text>
                    </View>
                </View>
            </View>
        );
    };



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.RestaurantStyle}>
                    <Text style={styles.SpecialText}>Best Offers</Text>
                </View>
                <ScrollView>
                    <View style=
                        {{ alignItems: 'center' }}>
                        <Image source={redOffer}
                            style={{ marginTop: Scale(20) }} />
                        <Image source={greenOffer}
                            style={{ marginTop: Scale(20) }} />
                        <Image source={BestOfferBanners}
                            style={{ marginTop: Scale(20) }} />
                    </View>

                    <Text style={styles.SpecialText2}>Nearby Restaurant Offers</Text>

                    <FlatList
                        data={this.state.Data}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderTodaySpclItem}
                    />
                </ScrollView>

            </View >
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#faf3eb'
    },

    SpecialText: {
        fontSize: Scale(20),
        fontWeight: 'bold',


    },

    RestaurantStyle: {
        height: Scale(100),
        backgroundColor: '#ffff',
        justifyContent: 'flex-end',
        padding: Scale(20)
    },

    SpecialText2: {
        fontSize: Scale(18),
        fontWeight: 'bold',
        marginLeft: Scale(20),
        marginTop: Scale(20)

    },

    BiryaniText: {
        fontWeight: 'bold'
    },

    BiryaniParent: {
        marginLeft: Scale(10),
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
        marginTop: Scale(5),
        //marginLeft: Scale(10)
    },

    goldenText: {
        color: 'grey',
        marginLeft: Scale(5)
    },

    AddressText: {
        color: 'gray',
        marginLeft: Scale(20),
        //backgroundColor:'red',
        width: Scale(250)
    },

    RectangleStyle: {
        width: "90%",
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffff',
        alignSelf: 'center',
        marginHorizontal: Scale(20),
        marginTop: Scale(10),
        borderRadius: Scale(15),
        shadowOpacity: Scale(3),
        shadowRadius: Scale(10),
        shadowColor: '#fce5cc',
        elevation: 2,
        shadowOffset: { width: 3, height: 3 },
        borderWidth: 0.5,
        borderColor: '#fce5cc',
    },



});
