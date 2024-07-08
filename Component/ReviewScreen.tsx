import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList, TextInput } from 'react-native';
import { BackBtn, Rating, redLocationIcon, ReviewFood, ReviewGroupPhoto, ReviewProfile } from "../Component/Assets";
import Scale, { ScaledFont } from './Scale';


interface Props { }
interface State { }


export default class ReviewScreen extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            show: false,
            Data: [
                { id: 0 },
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 }

            ],

        };
    }
    renderRestaurantItem = ({ item }) => {
        return (
            <View style={styles.RestaurantStyle}>
                <Image source={ReviewProfile}
                />
                <Text style={styles.goldenText}>
                    It is a long established fact that
                    a reader will be distracted by the
                    readable content of a page when looking
                    at its layout.
                </Text>
                <View style={styles.ImageView}>
                    <Image source={ReviewFood}
                        style={{ width: Scale(180), height: Scale(70), borderRadius: Scale(6) }}

                    />
                    <Image source={ReviewGroupPhoto}
                        style={{ height: Scale(70), borderRadius: Scale(4), marginLeft: Scale(10) }}

                    />
                </View>
            </View>
        );
    };


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.RestaurantStyle2}>
                    <TouchableOpacity style={{ margin: Scale(20) }}
                    >
                        <Image source={BackBtn}
                        />
                    </TouchableOpacity>
                    <Text style={styles.SpecialText}>Reviews</Text>
                </View>
                <FlatList
                    data={this.state.Data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this.renderRestaurantItem}
                />
            </View >
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

    },

    goldenText: {
        color: '#99959E',
        lineHeight: Scale(20),
        width: Scale(250),
        marginVertical: Scale(10)
    },

    RestaurantStyle: {
        backgroundColor: '#ffff',
        marginHorizontal: Scale(20),
        marginTop: Scale(15),
        borderRadius: Scale(10),
        paddingVertical: Scale(20),
        paddingLeft: Scale(20)
    },

    ImageView: {
        flexDirection: 'row'
    }

});
