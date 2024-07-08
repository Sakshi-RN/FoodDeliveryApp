import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList, TextInput } from 'react-native';
import { Search, biryani, Cross } from "../Component/Assets";
import Scale, { ScaledFont } from './Scale';
import Swiper from 'react-native-swiper'
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props { }
interface State { }


export default class SearchScreen extends Component<Props, State> {

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

            historyData: [
                { id: 0, Food: 'Food Shop' },
                { id: 1, Food: 'Best Biryani Nearby ' },
                { id: 2, Food: 'Best Resytaurant' },
                { id: 3, Food: 'Food' },
                { id: 4, Food: 'Chicken' }
            ]

        };
    }


    renderTodaySpclItem = ({ item }) => {
        return (
            <View style={styles.RectangleStyle}>
                <Image source={biryani} />
                <Text style={[styles.BiryaniText]}>Best Veg Dum Biryani Rise</Text>
            </View>
        );
    };



    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.ContactView}>
                    <Image source={Search}
                    />
                    <TextInput
                        style={[styles.TextInputStyle]}
                        placeholder='Search'
                        multiline
                    />
                    <Image source={Cross}
                    />
                </View>
                <Text style={styles.SpecialText}>History</Text>

                {/* <FlatList
                        data={this.state.historyData}
                       // numColumns={this.state.historyData.length / 2}
                        horizontal={true}
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderHistorylItem}
                        style={{width:"100%"}}
                    /> */}
                <View style={{ width: "95%", alignSelf: "center" }}>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ width: "95%" }}>
                        {this.state.historyData.map((item) => {
                            return (
                                <TouchableOpacity style={[styles.RestaurantStyle]}>
                                    <Text style={[styles.goldenText]}>{item.Food}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>

                </View>
                    <FlatList
                        data={this.state.Data}
                        horizontal={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderTodaySpclItem}
                       showsVerticalScrollIndicator={false}
                    />

            </SafeAreaView >
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        //backgroundColor: 'blue'
    },
    TextInputStyle: {
        width: Scale(220),
        fontSize: Scale(20),
        color: 'black',
        //  backgroundColor:'red',
    },

    ContactView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: Scale(20),
        marginHorizontal: Scale(20),
        marginTop: Scale(20),
        width: "90%",
        height: Scale(55),
        borderRadius: Scale(10),
        shadowOpacity: Scale(3),
        shadowRadius: Scale(4),
        shadowColor: '#f5d29d',
        elevation: 2,
        shadowOffset: { width: 2, height: 2 },
        borderWidth: 2,
        borderColor: 'lightgrey',
        alignSelf: 'center',
        alignItems: 'center'

    },

    BiryaniText: {
        fontWeight: '600',
        fontSize: Scale(15),
        width: Scale(190),
        marginLeft: ScaledFont(15)
    },



    goldenText: {
        color: 'grey',
        fontSize: Scale(15),
        fontWeight: 'bold',


    },


    RectangleStyle: {
        width: "90%",
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffff',
        alignSelf: 'center',
        marginHorizontal: Scale(20),
        marginTop: Scale(20),
        borderRadius: Scale(10),
        shadowOpacity: Scale(3),
        shadowRadius: Scale(10),
        shadowColor: '#fce5cc',
        elevation: 2,
        shadowOffset: { width: 3, height: 3 },
        borderWidth: 0.5,
        borderColor: '#fce5cc',

    },

    RestaurantStyle: {
        padding: Scale(10),
        backgroundColor: '#e3e3e3',
        margin: Scale(5),
        borderRadius: Scale(8),
        justifyContent: 'center',
        alignItems: 'center',

    },

    SpecialText: {
        fontSize: Scale(18),
        fontWeight: 'bold',
        marginLeft: Scale(20),
        marginTop: Scale(15)
    },

});
