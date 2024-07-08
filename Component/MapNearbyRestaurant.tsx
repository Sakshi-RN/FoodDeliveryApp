import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList, TextInput } from 'react-native';
import { Address, AddressMap, AdressSaveBtn, BackBtn, Cross, DOWN, Locations, Rating, Search, leftBackArrow, myOrderResataurant, redLocationIcon } from "./Assets";
import Scale, { ScaledFont } from './Scale';

interface Props { }
interface State { }


export default class MapNearbyRestaurant extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            show: false,
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

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={AddressMap}
                    style={styles.TextInputStyle}>
                    <View style={styles.ContactView}>
                        <View style={{ height: Scale(100) }} />
                        <TouchableOpacity>
                            <Image source={leftBackArrow}
                            />
                        </TouchableOpacity>
                        <View style={styles.ContactView2}>
                            <Image source={Search}
                            />
                            <TextInput
                                style={[styles.TextInputStyle2]}
                                placeholder='Search'
                                multiline
                            />
                            <Image source={Cross}
                            />
                        </View>
                    </View>
                    {/* <Image source={redLocationIcon}
                     /> */}
                </ImageBackground>
                <View style={{ marginHorizontal: Scale(20) }}>
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

                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },

    TextInputStyle: {

        flex: 0.9
    },

    ContactView: {
        flexDirection: 'row',
        marginHorizontal: Scale(20),
        marginTop: Scale(30),
        alignItems: 'center'

    },

    ContactView2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: Scale(20),
        marginLeft: Scale(10),
        backgroundColor: '#ffff',
        width: "82%",
        height: Scale(65),
        borderRadius: Scale(10),
        alignItems: 'center'

    },

    TextInputStyle2: {
        width: Scale(180),
        fontSize: Scale(20),
        color: 'black',
        paddingHorizontal: Scale(20)
    },

    RestaurantStyl2: {
        marginRight: Scale(10),
        marginTop: Scale(20),
        borderRadius: Scale(10),

    },


    BiryaniView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Scale(5)
    },

    BiryaniViewnew: {
        flexDirection: 'row',
        alignItems: 'center',

    },

    PriceText: {
        fontWeight: 'bold',
        fontSize: Scale(15),
        color: '#d12e2e',
        marginLeft: Scale(6),

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
    },


    BiryaniText: {
        fontWeight: 'bold',
        fontSize: Scale(18),
        marginVertical: Scale(10)

    },




});
