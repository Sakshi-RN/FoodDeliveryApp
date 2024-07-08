import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList } from 'react-native';
import { Team, fvrtBtn, Gallery, ReveievBtn, BestChoice, ViewAll, Burgir, Rating, redLocationIcon, BackBtn, NearByRestaurant, favouriteDishIcon, MyOrderCall } from "../Component/Assets";
import Scale from './Scale';
import Swiper from 'react-native-swiper'

interface Props { }
interface State { }


export default class NearByRestauranApp extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            show: false,
            Data: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
            isItem: 'false'
        };
    }

    renderBurgerItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.BurgirStyle}
>
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
                <Image source={favouriteDishIcon} />
                <View style={styles.BiryaniParent}>
                    <Text style={[styles.BiryaniText]}>Best Veg Dum Biryani</Text>
                    <Text style={styles.PriceText}>₹100</Text>
                </View>
            </View>
        );
    };

    renderGalleryItem = ({ item }) => {
        return (
            <View style={styles.galleryView}>

                <Image source={Gallery} />

            </View>
        );
    };

    renderTeamItem = ({ item }) => {
        return (
            <View style={styles.TeamView}>
                <View style={styles.TeamImage}>
                    <Image source={Team}
                    />

                    <Text style={styles.NameText}>Prasad Singh</Text>
                    <Text style={styles.ProfileText}>Manager</Text>
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
                    <Text style={styles.SpecialText2}>Nearby Restaurant</Text>
                </View>
                <ScrollView style={{ marginHorizontal: Scale(15) }}
                    showsVerticalScrollIndicator={false}>
                    <Swiper
                        style={{ height: Scale(220), marginTop: Scale(20) }}
                        dot={<View style={{ borderColor: 'green', borderWidth: 1, width: 10, height: 10, borderRadius: 5, marginBottom: Scale(-20), marginTop: Scale(20), marginHorizontal: Scale(3) }} />}
                        activeDot={<View style={{ backgroundColor: 'red', width: 10, height: 10, borderRadius: 5, marginBottom: Scale(-20), marginTop: Scale(20), marginHorizontal: Scale(3) }} />}>
                        <Image source={NearByRestaurant}
                            style={{ width: "98%" }}
                        />
                        <Image source={NearByRestaurant}
                            style={{ width: "98%" }}
                        />
                        <Image source={NearByRestaurant}
                            style={{ width: "98%" }}
                        />
                        <Image source={NearByRestaurant}
                            style={{ width: "98%" }}
                        />
                    </Swiper>
                    <Text style={[styles.BestChoice]}>Golden Fish Restaurant</Text>
                    <View style={styles.BiryaniViewnew}>
                        <Image source={redLocationIcon} />
                        <Text style={[styles.PriceText2]}>2.5km</Text>
                        <View style={styles.starParents}>
                            <Image source={Rating} />
                            <Image source={Rating} />
                            <Image source={Rating} />
                            <Image source={Rating} />
                            <Image source={Rating} />
                        </View>
                    </View>
                    <Text style={styles.AddressText}>
                        manish nagar, Ingole nagar, Sonegaon, nagpur
                    </Text>
                    <View style={styles.reviewView}>
                        <TouchableOpacity>
                            <Image source={fvrtBtn} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={ReveievBtn} />
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.BestChoice]}>Category</Text>
                    <FlatList
                        data={this.state.Data}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderBurgerItem}
                    />
                    <Text style={styles.BestChoice}>Best Choice</Text>
                    <FlatList
                        data={this.state.Data}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderBestChoiceItem}
                    />
                    <View style={styles.ViewAllParent}>
                        <Text style={styles.BestChoice}>Today Special</Text>
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
                    <Text style={styles.BestChoice}>Team</Text>
                    <FlatList
                        data={this.state.Data}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderTeamItem}
                    />
                    <Text style={styles.BestChoice}>Gallery</Text>
                    <FlatList
                        data={this.state.Data}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderGalleryItem}
                    />
                </ScrollView>
                <TouchableOpacity style={styles.navigationView}>
                    <Image source={MyOrderCall} />
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },

    navigationView: {
        width: Scale(50),
        height: Scale(50),
        borderRadius: Scale(25),
        backgroundColor: '#94CD00',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        margin: Scale(20),
        
    },

    TeamView: {
        alignItems: 'center',
        borderRadius: Scale(20),
        backgroundColor: '#FFF3E5',
        marginTop: Scale(40),
        marginRight: Scale(8),
        width: Scale(160),
        height: Scale(130),
    },

    reviewView: {
        flexDirection: 'row',
        marginTop: Scale(20)
    },

    TeamImage: {
        bottom: Scale(30),
        marginTop: Scale(-20),
        alignItems: 'center',
    },

    NameText: {
        fontWeight: 'bold',
    },

    ProfileText: {
        fontWeight: 'bold',
        fontSize: Scale(15),
        color: '#d12e2e',
        marginTop: Scale(5),
    },

    galleryView: {
        flexDirection: 'row',
        margin: Scale(5)
    },

    SpecialText2: {
        fontSize: Scale(20),
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: Scale(14)
    },

    GoldenFish: {
        fontSize: Scale(17),
        fontWeight: 'bold',


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

    },

    PriceText: {
        fontWeight: 'bold',
        fontSize: Scale(15),
        color: '#d12e2e',
        marginTop: Scale(5),
    },


    PriceText2: {
        fontWeight: 'bold',
        fontSize: Scale(15),
        color: '#d12e2e',
        marginLeft: Scale(5)

    },

    goldenText: {
        color: 'grey',
        marginLeft: Scale(5)
    },

    AddressText: {
        color: 'grey',
        marginTop: Scale(10),
        //   backgroundColor:'red',
        width: Scale(320)
    },

    RectangleStyle: {

        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffff',
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
        margin: Scale(5)
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
        marginVertical: Scale(10),

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

    },

    starParents: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: Scale(130),
        marginLeft: Scale(20)
    }



});
