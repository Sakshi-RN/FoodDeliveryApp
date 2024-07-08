import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList } from 'react-native';
import { GroupPizza, DeliciousPizza, BackBtn } from "../Component/Assets";
import Scale from './Scale';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props { }
interface State { }


export default class OfferCarousel extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            show: false,
            Data: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
        };
    }

    renderBestChoiceItem = ({ item }) => {
        return (
            <View style={{ padding: Scale(8) }}>
                <Image source={GroupPizza} />
                <View style={{ width: Scale(170), alignItems: 'center' }}>
                    <TouchableOpacity style={styles.LoginButton}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={DeliciousPizza}
                    style={styles.RifgthArrowImg}>
                    <View style={{ height: Scale(20) }} />
                    <TouchableOpacity style={styles.CircleParentView}
                        onPress={() => { this.props.navigation.navigate('BottomTab') }}>

                        <Image source={BackBtn} />
                    </TouchableOpacity>
                    <Text style={styles.ItemText}>Super Veg Delicious Pizza</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Scale(280) }}>
                        <Text style={styles.TextInputStyle}>₹100 ₹200</Text>
                        <View style={styles.CheckboxStyle}>
                            <Text style={styles.OfferText}>50%</Text>
                            <Text style={styles.OFFText}>OFF</Text>
                        </View>
                    </View>

                </ImageBackground>
                <FlatList
                    data={this.state.Data}
                    numColumns={2}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this.renderBestChoiceItem}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    BiryaniText: {
        fontWeight: 'bold'
    },

    BiryaniParent: {
        marginLeft: Scale(10),
    },

    RifgthArrowImg: {
        //width: Scale(40),
        height: Scale(200),
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
    RestaurantStyle: {
        backgroundColor: '#ffff',
        marginHorizontal: Scale(10),
        marginTop: Scale(20),
        borderRadius: Scale(15),
        shadowOpacity: Scale(3),
        shadowRadius: Scale(5),
        shadowColor: '#fadaaa',
        elevation: 2,
        shadowOffset: { width: 1, height: 1 },
        borderWidth: 0.5,
        borderColor: '#fadaaa',
        width: Scale(280),
        height: Scale(280)
    },

    CircleParentView: {
        width: Scale(40),
        height: Scale(40),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff',
        borderRadius: Scale(20),
        margin: Scale(20),

    },

    SpecialText: {
        fontSize: Scale(20),
        fontWeight: 'bold',
    },

    BurgirStyle: {
        width: Scale(150),
        height: Scale(65),
        borderRadius: Scale(10),
        backgroundColor: "#f5bc6c",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: Scale(7),
        marginTop: Scale(15)
    },


    ForgotPasscode: {
        fontSize: Scale(17),
        alignSelf: 'center',
        color: '#ffff',
        marginLeft: Scale(15)
    },

    LoginButton: {
        width: Scale(45),
        height: Scale(45),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Scale(24),
        shadowOpacity: Scale(3),
        shadowRadius: Scale(5),
        shadowColor: '#fadaaa',
        elevation: 2,
        shadowOffset: { width: 3, height: 1 },
        borderWidth: 1,
        borderColor: '#fadaaa',
        bottom: Scale(20),
        backgroundColor: '#ffff'

    },

    BestChoice: {
        fontSize: Scale(20),
        fontWeight: 'bold',
        marginTop: Scale(10),
        marginLeft: Scale(20)
    },

    innerCircle: {
        marginRight: Scale(18),
    },

    horizontalLine: {
        width: "90%",
        height: Scale(2),
        backgroundColor: 'lightgrey',
        marginHorizontal: Scale(20),
        marginTop: Scale(15)
    },

    countrycode: {
        fontWeight: 'bold',
        fontSize: Scale(17),
    },

    title: {
        fontSize: Scale(15),
        marginLeft: Scale(5),
        color: 'grey',
    },



    TextInputStyle: {
        fontWeight: 'bold',
        fontSize: Scale(16),
        color: '#d12e2e',
        marginLeft: Scale(20),
        marginTop: Scale(5)
    },

    OfferText: {
        fontWeight: 'bold',
        fontSize: Scale(20),
        color: '#d12e2e',
    },

    ContactView: {
        flexDirection: 'row',
        marginTop: Scale(10),
        alignItems: 'center'
    },

    TermsparentView: {
        flexDirection: 'row',
        marginTop: Scale(20)
    },

    CheckboxStyle: {
        borderWidth: 2,
        borderColor: '#ffff',
        width: Scale(76),
        height: Scale(58),
        borderRadius: Scale(35),
        alignItems: 'center',
        justifyContent: 'center',
        bottom: Scale(20),
        marginTop: Scale(-10)

    },

    ItemStyling: {
        width: "100%",
        height: Scale(40),
        backgroundColor: '#e8edea',
        marginTop: Scale(10)
    },

    ItemText: {
        fontSize: Scale(20),
        fontWeight: 'bold',
        color: '#ffff',
        width: Scale(180),
        //   marginTop: Scale(2),
        marginLeft: Scale(20),
        lineHeight: Scale(25)
    },

    OFFText: {
        fontSize: Scale(20),
        fontWeight: 'bold',
        color: '#ffff',
    },

    ViewAllParent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: Scale(20)
    }

});
