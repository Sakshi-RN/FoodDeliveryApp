import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList, TextInput } from 'react-native';
import { BackBtn, NotificationBurger } from "./Assets";
import Scale, { ScaledFont } from './Scale';
import Swiper from 'react-native-swiper'
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props { }
interface State { }


export default class EditProfileScreen extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            show: false,
            Data: [
                { id: 0 },
                { id: 1 },

            ],

        };
    }


    renderTodaySpclItem = ({ item }) => {
        return (
            <View style={styles.RectangleStyle}>
                <Image source={NotificationBurger} />
                <View style={styles.BiryaniParent}>
                    <View style={styles.BiryaniView}>
                        <Text style={[styles.BiryaniText]}>Get 30% Off Burger</Text>
                        <Text style={styles.TimeText}>12:20pm</Text>
                    </View>
                    <Text style={styles.goldenText}>There are many variations of passages of Lorem Ipsum</Text>
                </View>
            </View>
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
                    <Text style={styles.SpecialText}>Notifications</Text>
                </View>
                <FlatList
                    data={this.state.Data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this.renderTodaySpclItem}
                />

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

    BiryaniView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        width:Scale(235)
    },
    BiryaniText: {
        fontWeight: 'bold'
    },

    BiryaniParent: {
        marginLeft: Scale(10)
    },

    RectangleStyle: {
        margin: Scale(20),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF3E5',
        borderRadius: Scale(10),
        borderWidth: 2,
        borderColor: '#fce5cc',
        padding: Scale(10)
    },

    goldenText: {
        color: '#919592',
        fontWeight: '500',
        width: Scale(220),
        marginTop: Scale(5)
    },

    TimeText: {
        color: '#919592',
        fontWeight: '500',
    }

});
