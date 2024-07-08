import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList } from 'react-native';
import { Address, Bell, BestChoice, ViewAll, MapView, Burgir, DeliciousPizza, DishIcon, ProfilePic, Rating, redLocationIcon, Restraunt, spclFood } from "../Component/Assets";
import Scale from './Scale';
import Swiper from 'react-native-swiper'
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props { }
interface State { }


export default class Dashboard extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            show: false,
            Data: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
            isItem: 'false'
        };
    }

    renderBurgerItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.BurgirStyle}
                onPress={() => { this.props.navigation.navigate("OfferCarousel") }}>
                <Text style={styles.ForgotPasscode}>Burger</Text>
                <Image source={Burgir} />
            </TouchableOpacity>
        );
    };


    renderBestChoiceItem = ({ item }) => {
        return (
            <View style={{ marginTop: Scale(20), marginHorizontal: Scale(5) }}>
                <Image source={BestChoice} />
                <View style={{ width: Scale(170), alignItems: 'center' }}>
                    <TouchableOpacity style={styles.LoginButton}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

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

    renderRestaurantItem = ({ item }) => {
        return (
            <View style={styles.RestaurantStyle}>
                <Image source={Restraunt}
                    style={{ alignSelf: 'center', width: "100%", bottom: Scale(20) }}
                />
                <View style={[styles.BiryaniParent, { marginBottom: Scale(20), marginTop: Scale(-25), paddingHorizontal: Scale(10) }]}>
                    <Text style={[styles.BiryaniText, { fontSize: Scale(17) }]}>Golden Fish Restaurant</Text>
                    <View style={styles.BiryaniViewnew}>
                        <Image source={redLocationIcon} />
                        <Text style={[styles.PriceText, { marginTop: Scale(0), marginLeft: Scale(5) }]}>2.5km</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: Scale(130), marginLeft: Scale(20) }}>
                            <Image source={Rating} />
                            <Image source={Rating} />
                            <Image source={Rating} />
                            <Image source={Rating} />
                            <Image source={Rating} />
                        </View>
                    </View>
                </View>
                <Text style={styles.AddressText}>
                    manish nagar,Ingole nagar,Sonegaon,nagpur
                </Text>
            </View>
        );
    };


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.ContactView}>
                    <TouchableOpacity style={{ marginLeft: Scale(10) }}
                        onPress={() => { this.props.navigation.navigate('ProfileScreen') }}
                    >
                        <Image source={ProfilePic} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.countrycode}>Hi, Sachin</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={Address} />
                            <Text style={styles.title}>nagpur,maharashtra</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('NotificationsScreen') }}>
                        <View style={styles.BlankView}>
                            <View style={styles.CircleParentView}>
                                <Text style={styles.welcomeText}>10+</Text>
                            </View>
                            <Image source={Bell}
                                style={styles.innerCircle} />
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <FlatList
                        data={this.state.Data}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderBurgerItem}
                    />

                    <Swiper
                        style={{ height: Scale(220) }}
                        dot={<View style={{ borderColor: 'green', borderWidth: 1, width: 10, height: 10, borderRadius: 5, marginBottom: Scale(-20), marginTop: Scale(20), marginHorizontal: Scale(3) }} />}
                        activeDot={<View style={{ backgroundColor: 'red', width: 10, height: 10, borderRadius: 5, marginBottom: Scale(-20), marginTop: Scale(20), marginHorizontal: Scale(3) }} />}>
                        <ImageBackground source={DeliciousPizza}
                            style={styles.RifgthArrowImg}>
                            <Text style={styles.ItemText}>Super Veg Delicious Pizza</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={styles.TextInputStyle}>₹100 ₹200</Text>
                                <View style={styles.CheckboxStyle}>
                                    <Text style={styles.OfferText}>50%</Text>
                                    <Text style={styles.OFFText}>OFF</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={DeliciousPizza}
                            style={styles.RifgthArrowImg}>
                            <Text style={styles.ItemText}>Super Veg Delicious Pizza</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={styles.TextInputStyle}>₹100 ₹200</Text>
                                <View style={styles.CheckboxStyle}>
                                    <Text style={styles.OfferText}>50%</Text>
                                    <Text style={styles.OFFText}>OFF</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={DeliciousPizza}
                            style={styles.RifgthArrowImg}>
                            <Text style={styles.ItemText}>Super Veg Delicious Pizza</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={styles.TextInputStyle}>₹100 ₹200</Text>
                                <View style={styles.CheckboxStyle}>
                                    <Text style={styles.OfferText}>50%</Text>
                                    <Text style={styles.OFFText}>OFF</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={DeliciousPizza}
                            style={styles.RifgthArrowImg}>
                            <Text style={styles.ItemText}>Super Veg Delicious Pizza</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={styles.TextInputStyle}>₹100 ₹200</Text>
                                <View style={styles.CheckboxStyle}>
                                    <Text style={styles.OfferText}>50%</Text>
                                    <Text style={styles.OFFText}>OFF</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </Swiper>

                    <Text style={styles.BestChoice}>Best Choice</Text>
                    <FlatList
                        data={this.state.Data}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderBestChoiceItem}
                    />
                    <View style={styles.ViewAllParent}>
                        <Text style={styles.SpecialText}>Today Special</Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('TodaysSpecial') }}>
                            <Image source={ViewAll} />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={this.state.Data}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderTodaySpclItem}
                    />
                    <View style={[styles.ViewAllParent, { marginTop: Scale(20) }]}>
                        <Text style={styles.SpecialText}>Restaurant Nearby</Text>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('RestaurantNearby') }}>

                            <Image source={MapView} />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={this.state.Data}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderRestaurantItem}
                    />
                </ScrollView>
            </SafeAreaView >
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

    },

    goldenText: {
        color: 'grey',
        marginLeft: Scale(5)
    },

    AddressText: {
        color: 'gray',
        marginLeft: Scale(20),
        width: Scale(250)
    },

    RectangleStyle: {

        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffff',
        marginHorizontal: Scale(20),
        borderRadius: Scale(15),
        shadowOpacity: Scale(3),
        shadowRadius: Scale(10),
        shadowColor: '#fce5cc',
        elevation: 2,
        shadowOffset: { width: 3, height: 3 },
        borderWidth: 0.5,
        borderColor: '#fce5cc',
        marginTop: Scale(15),

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
        width: Scale(34),
        height: Scale(20),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c21919',
        borderRadius: Scale(10),
        position: 'absolute',
        zIndex: 99,
        bottom: Scale(15)
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
        margin: Scale(10)
    },


    RifgthArrowImg: {
        width: Scale(340),
        height: Scale(170),
        borderRadius: Scale(10),
        marginHorizontal: Scale(20),
        marginTop: Scale(20)
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

    image: {
        flex: 0.18,
        alignItems: 'flex-end',
        paddingBottom: Scale(40),
        flexDirection: 'row'
    },

    BlankView: {
        width: Scale(110),
        alignItems: 'flex-end'
    },

    welcomeText: {
        fontSize: Scale(14),
        fontWeight: 'bold',
        color: '#ffff',

    },

    bowlImage: {
        width: '65%',
        height: '105%',
        marginTop: Scale(40)
    },

    FlagStyle: {
        marginLeft: Scale(15)
    },

    parentView: {
        flexDirection: 'row',
        marginTop: Scale(20),
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    lineView: {
        width: Scale(2),
        height: Scale(30),
        backgroundColor: 'lightgrey',
        marginRight: Scale(10)
    },

    borderStyleBase: {
        width: 30,
        height: 45
    },


    OTPStyle: {
        width: '100%',
        height: 80,
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
    },

    TextInputStyle: {
        fontWeight: 'bold',
        fontSize: Scale(16),
        color: '#d12e2e',
        marginLeft: Scale(20),
        marginTop: Scale(10)
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
        marginTop: Scale(20),
        marginLeft: Scale(40)
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
        marginTop: Scale(20),
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
