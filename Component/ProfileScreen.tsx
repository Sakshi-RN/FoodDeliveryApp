import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList, TextInput } from 'react-native';
import { BackBtn, Address, ProfileScreenIcon, ProfilePic, Order, EditProfile, Favourite, ProflHome, profileOffers, PrivacyPolicy, Logout, TermsConditions } from "./Assets";
import Scale, { ScaledFont } from './Scale';

interface Props { }
interface State { }


export default class ProfileScreen extends Component<Props, State> {

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

            isVisible: true,
            isOffer: false

        };
    }

    handlePress = () => {
        this.setState({ isVisible: true, isOffer: false });
        this.props.navigation.navigate('BottomTab');
    }

    handleOfferPress = () => {
        this.setState({ isOffer: true, isVisible: false });
        this.props.navigation.navigate('BottomTab');
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.RestaurantStyle2}>
                    <TouchableOpacity style={{ margin: Scale(20) }}
                        onPress={() => { this.props.navigation.navigate('BottomTab') }}>
                        <Image source={BackBtn}
                        />
                    </TouchableOpacity>
                    <Text style={styles.SpecialText}>Profile</Text>
                </View>
                <View style={styles.ContactView}>
                    <TouchableOpacity style={{ marginHorizontal: Scale(10) }}>
                        <Image source={ProfileScreenIcon} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.countrycode}>Hi, Sachin</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Scale(3) }}>
                            <Image source={Address}
                                style={{ marginRight: Scale(4) }} />
                            <Text style={styles.title}>nagpur,maharashtra</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.ViewStyle, { marginTop: Scale(10) }]}>
                    <View>
                        <TouchableOpacity style={{ alignSelf: 'center' }}
                        onPress={() => { this.props.navigation.navigate('MyOrder') }}>
                            <Image source={Order} />
                        </TouchableOpacity >
                        <Text style={styles.OrderStyle}>Order</Text>
                    </View>
                    <View style={styles.LinewView} />
                    <View>
                        <TouchableOpacity style={{ alignSelf: 'center' }}
                        onPress={() => { this.props.navigation.navigate('EditProfile') }}>
                            <Image source={EditProfile} />
                        </TouchableOpacity>
                        <Text style={styles.OrderStyle}>Edit Profile</Text>
                    </View>
                    <View style={styles.LinewView} />

                    <View>
                        <TouchableOpacity style={{ alignSelf: 'center' }}
                            onPress={() => { this.props.navigation.navigate('Favourite') }}>

                            <Image source={Favourite} />
                        </TouchableOpacity>
                        <Text style={styles.OrderStyle}>Favorite</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.HomeParent}>
                        <TouchableOpacity style={[styles.homeElipse, { backgroundColor: this.state.isVisible ? '#DF201F' : '#fac8ce' }]}
                            onPress={this.handlePress}>
                            <Image source={ProflHome} />
                        </TouchableOpacity>
                        <Text style={styles.homeText}>Home</Text>
                    </View>
                    <View style={styles.Homeline} />
                    <View style={styles.HomeParent}>
                        <TouchableOpacity style={[styles.homeElipse, { backgroundColor: this.state.isOffer ? '#DF201F' : '#fac8ce' }]}
                            onPress={this.handleOfferPress}>
                            <Image source={profileOffers} />
                        </TouchableOpacity>
                        <Text style={styles.homeText}>Offers</Text>
                    </View>
                    <View style={styles.Homeline} />
                    <View style={styles.HomeParent}>
                        <TouchableOpacity style={[styles.homeElipse, { backgroundColor: '#fac8ce' }]}>
                            <Image source={PrivacyPolicy} />
                        </TouchableOpacity>
                        <Text style={styles.homeText}>Privacy Policy</Text>
                    </View>
                    <View style={styles.Homeline} />
                    <View style={styles.HomeParent}>
                        <TouchableOpacity style={[styles.homeElipse, { backgroundColor: '#fac8ce' }]}>
                            <Image source={TermsConditions} />
                        </TouchableOpacity>
                        <Text style={styles.homeText}>Terms and Condition</Text>
                    </View>
                    <View style={styles.Homeline} />
                    <View style={styles.HomeParent}>
                        <TouchableOpacity style={[styles.homeElipse, { backgroundColor: '#fac8ce' }]}>
                            <Image source={Logout} />
                        </TouchableOpacity>
                        <Text style={styles.homeText}>Logout</Text>
                    </View>
                    <View style={styles.Homeline} />
                </ScrollView>
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
        marginTop: Scale(10),
        alignItems: 'center'
    },


    countrycode: {
        fontWeight: 'bold',
        fontSize: Scale(20),
    },

    title: {
        fontSize: Scale(16),
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
        paddingHorizontal: Scale(10)
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
        marginLeft: Scale(10),
        fontSize: Scale(16)

    }




});
