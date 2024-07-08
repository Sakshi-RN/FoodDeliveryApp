import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList, TextInput } from 'react-native';
import { Delete, hamburger, ChcekoutBtn } from "../Component/Assets";
import Scale, { ScaledFont } from './Scale';
import Swiper from 'react-native-swiper'
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
    navigation: any;
}
interface State {
    count: number;
    Data: any,

}


export default class Cart extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            Data: [
                { id: 0 },
                { id: 1 },
                { id: 2 },
            ],
            count: 0

        };
    }

    handleIncrement = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    handleDecrement = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    }

    OnNavigateFunc = () => {
        this.props.navigation.navigate('CheckoutScreen')
    }

    renderTodaySpclItem = ({ item, index }) => {
        const { count } = this.state;
        return (
            <View style={styles.RectangleStyle}>
                <Image source={hamburger} />
                <View style={styles.BiryaniParent}>
                    <Text style={[styles.BiryaniText]}>Vegeterian Pizza</Text>
                    <Text style={styles.PriceText}>₹100 ₹200</Text>
                    <View style={{ flexDirection: 'row', alignItems: "center", marginTop: Scale(5) }}>
                        <View style={styles.ViewStyle}>
                            <TouchableOpacity
                                testID={"decrementButton-" + index}
                                onPress={this.handleDecrement}>
                                <Text style={styles.quantityText}>-</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.CountView}>
                            <Text
                                style={styles.quantityText}
                                testID={"COUNTTEXT-" + index}>
                                {count}
                            </Text>
                        </View>
                        <View style={styles.ViewStyle}>
                            <TouchableOpacity
                                testID={"incrementButton-" + index}
                                onPress={this.handleIncrement}>
                                <Text style={styles.quantityText}>+</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.BiryaniView}>
                            <Image source={Delete} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.RestaurantStyle}>
                    <Text style={styles.SpecialText}
                           testID="myButton">Cart</Text>
                </View>
                <ScrollView>
                    <FlatList
                        style={{ marginTop: Scale(10) }}
                        data={this.state.Data}
                        horizontal={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderTodaySpclItem}
                    />
                </ScrollView>
                <TouchableOpacity style={styles.LoginButton}
             
                    onPress={this.OnNavigateFunc}>
                    <Image source={ChcekoutBtn}
                        style={styles.LoginButton2} />
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#faf3eb'
    },

    RestaurantStyle: {
        height: Scale(100),
        backgroundColor: '#ffff',
        justifyContent: 'flex-end',
        padding: Scale(20)
    },

    SpecialText: {
        fontSize: Scale(18),
        fontWeight: 'bold',

    },

    BiryaniText: {
        fontWeight: 'bold'
    },

    BiryaniParent: {
        marginLeft: Scale(20),
    },

    BiryaniView: {
        height: Scale(35),
        width: Scale(40),
        justifyContent: 'center',
        backgroundColor: '#d12e2e',
        alignItems: 'center',
        borderRadius: Scale(4),
        marginLeft: Scale(8)
    },

    BiryaniViewnew: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Scale(10)
    },

    PriceText: {
        fontWeight: 'bold',
        color: '#d12e2e',
        marginTop: Scale(5),
    },


    RectangleStyle: {
        width: "90%",
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffff',
        alignSelf: 'center',
        marginHorizontal: Scale(20),
        marginTop: Scale(15),
        borderRadius: Scale(15),
        shadowOpacity: Scale(3),
        shadowRadius: Scale(10),
        shadowColor: '#fce5cc',
        elevation: 2,
        shadowOffset: { width: 3, height: 3 },
        borderWidth: 0.5,
        borderColor: '#fce5cc',
        padding: Scale(15)
    },


    LoginButton: {
        width: "98%",
        shadowOpacity: Scale(2),
        shadowRadius: Scale(1),
        shadowColor: '#7fe602',
        elevation: 2,
        shadowOffset: { width: 2, height: 1 },
        marginBottom: Scale(10)
    },

    LoginButton2: {
        width: "98%",
        height: Scale(100),
        alignSelf: 'center'
    },

    ViewStyle: {
        width: Scale(30),
        backgroundColor: '#f5d3d5',
        height: Scale(35),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Scale(4)

    },

    quantityText: {
        fontSize: Scale(18)
    },

    CountView: {
        width: Scale(40),
        backgroundColor: '#f5d3d5',
        height: Scale(35),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Scale(4),
        borderColor: 'grey',
        borderLeftWidth: Scale(1),
        borderRightWidth: Scale(1)
    }



});
