import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList, TextInput } from 'react-native';
import { favouriteDishIcon, BackBtn } from "../Component/Assets";
import Scale, { ScaledFont } from './Scale';

interface Props { }
interface State { }


export default class Favourite extends Component<Props, State> {

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

    renderTodaySpclItem = ({ item }) => {
        return (
            <View style={styles.RectangleStyle}>
                <Image source={favouriteDishIcon} />
                <View style={styles.BiryaniParent}>
                    <Text style={[styles.BiryaniText]}>Best Veg Dum Biryani</Text>
                    <Text style={styles.PriceText}>₹100</Text>
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
                    <Text style={styles.SpecialText}>Favorite</Text>
                </View>
                <ScrollView style={{ marginTop: Scale(10) }}>
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
        marginTop: Scale(5)
    },

    RectangleStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffff',
        marginTop: Scale(10),
        borderRadius: Scale(10),
        shadowOpacity: Scale(3),
        shadowRadius: Scale(10),
        shadowColor: '#fce5cc',
        elevation: 2,
        shadowOffset: { width: 3, height: 3 },
        borderWidth: 0.5,
        borderColor: '#fce5cc',
    },
});
