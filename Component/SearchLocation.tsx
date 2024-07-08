import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList, TextInput } from 'react-native';
import { BackBtn, Search, SearchLocations, navigation } from "../Component/Assets";
import Scale, { ScaledFont } from './Scale';
import Swiper from 'react-native-swiper'
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props { }
interface State { }


export default class SearchLocation extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            show: false,
            Data: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],



        };
    }
    renderAddressItem = ({ item }) => {
        return (
            <TouchableOpacity style={[styles.ContactView]}>
                <Image source={SearchLocations}
                />
                <View style={{ marginTop: Scale(20), marginLeft: Scale(15) }}>
                    <Text style={styles.countrycode}>Golden Fish Restaurant</Text>
                    <Text style={styles.title}>manish nagar,Ingole nagar,Sonegaon</Text>
                </View>
            </TouchableOpacity>

        );
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.RestaurantStyle2}>
                    <TouchableOpacity style={{ margin: Scale(20) }}
                        onPress={() => { this.props.navigation.navigate('BottomTab') }}>
                        <Image source={BackBtn}
                        />
                    </TouchableOpacity>
                    <Text style={styles.SpecialText}>Search Location</Text>
                </View>
                <View style={[styles.SearchView, { marginBottom: 0 }]}>
                    <TextInput
                        style={[styles.TextInputStyle]}
                        placeholder='Search...'
                        placeholderTextColor={'black'}
                        multiline
                    />
                    <TouchableOpacity onPress={()=>{{this.props.navigation.navigate('SearchedRestaurants')}}}>
                    <Image source={Search}
                    />
                    </TouchableOpacity>
                   
                </View>
                <View style={{ marginHorizontal: Scale(20) }}>
                    <Text style={styles.homeText}>Saved Addresses</Text>
                    <FlatList
                        data={this.state.Data}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderAddressItem}
                    />
                    <View style={{height:Scale(220)}}/>
                    <TouchableOpacity style={styles.navigationView}
                    onPress={()=>{this.props.navigation.navigate('Location')}}>
                        <Image source={navigation} />
                    </TouchableOpacity>
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

    ContactView: {
        flexDirection: 'row',
        alignItems: 'center',

    },


    countrycode: {
        fontWeight: 'bold',
        fontSize: Scale(18),
    },

    title: {
        fontSize: Scale(17),
        color: 'grey',
    },

    ViewStyle: {
        margin: Scale(20),
        flexDirection: 'row',
        borderRadius: Scale(10),
        shadowOpacity: Scale(10),
        shadowRadius: Scale(5),
        shadowColor: '#f5dbb3',
        elevation: 10,
        shadowOffset: { width: 1, height: 3 },
        borderWidth: 0.5,
        borderColor: '#f5dbb3',
        height: Scale(100),
        alignItems: 'center',
        justifyContent: 'space-evenly'

    },

    LinewView: {
        height: Scale(50),
        width: Scale(1),
        backgroundColor: 'lightgrey'
    },

    OrderStyle: {
        fontWeight: 'bold',
        marginTop: Scale(10)
    },

    HomeParent: {
        alignItems: 'center',
        flexDirection: 'row',
        margin: Scale(10),
        width: '100%',
    },

    Homeline: {
        height: Scale(0.5),
        margin: Scale(10),
        backgroundColor: 'lightgrey'
    },

    homeElipse: {
        width: Scale(50),
        height: Scale(50),
        borderRadius: Scale(25),
        backgroundColor: '#DF201F',
        justifyContent: 'center',
        alignItems: 'center'
    },

    homeText: {
        fontWeight: 'bold',
        marginTop: Scale(20),
        fontSize: Scale(18),
        color: '#DF201F',

    },

    TextInputStyle: {
        width: Scale(220),
        fontSize: Scale(20),
        color: 'black',
    },

    SearchView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: Scale(15),
        margin: Scale(20),
        alignItems: 'center',
        backgroundColor: '#F0EFFB',
        borderRadius: Scale(12)

    },

    navigationView: {
        width: Scale(50),
        height: Scale(50),
        borderRadius: Scale(25),
        backgroundColor: '#94CD00',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: Scale(1),
        alignSelf:'flex-end'
    }




});
