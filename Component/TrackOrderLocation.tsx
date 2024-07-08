import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, TextInput, StatusBar, Modal, FlatList, Alert } from 'react-native';
import {
    TrackContact,
    TrackDistance,
    TrackLocationBackBtn,
    TrackLocationLogo,
    TrackMap,
    Userprofile,
    delievryBoy

} from "../Component/Assets";
import Scale from './Scale';


interface Props { }
interface State { }


export default class TrackOrderLocation extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            isChcekbox: false,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ImageBackground source={TrackMap}
                        style={{ padding: 20 }}
                    >
                        <TouchableOpacity style={{ marginTop: Scale(40), }}
                            onPress={() => { this.props.navigation.navigate('CheckoutScreen') }}>
                            <Image source={TrackLocationBackBtn}
                            />
                        </TouchableOpacity>
                        <Image source={Userprofile}
                            style={{ alignSelf: 'center', marginRight: Scale(20) }}

                        />
                        <Image source={TrackDistance}
                            style={{ marginLeft: Scale(30), marginTop: Scale(-30), bottom: Scale(25), }}
                        />
                        <View style={{ alignItems: 'flex-end', marginRight: Scale(10), marginTop: Scale(-25), bottom: Scale(25) }}>
                            <Image source={TrackLocationLogo} />
                        </View>
                    </ImageBackground>
                </ScrollView>

                <View style={{ height: Scale(150) }}>
                    <View style={{ flexDirection: 'row', marginLeft: Scale(20), marginTop: Scale(20), width: Scale(140), justifyContent: 'space-between' }}>
                        <Text style={styles.distanceText}>3.2 Km</Text>
                        <Text style={styles.timeText}>06min</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: Scale(20), marginTop: Scale(20), justifyContent: 'space-between' }}>
                        <Image source={delievryBoy} />
                        <View>
                            <Text style={styles.driverName}>Rajesh ram kapor</Text>
                            <Text style={styles.DriverProfile}>Delivery Man</Text>
                        </View>
                        <TouchableOpacity>
                            <Image source={TrackContact}
                                style={{ marginHorizontal: Scale(20) }}
                            />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,

    },

    distanceText: {
        color: '#DF201F',
        fontSize: Scale(16),
        fontWeight: 'bold'

    },

    timeText: {

        fontSize: Scale(16),
        fontWeight: 'bold'

    },

    driverName: {

        fontSize: Scale(16),
        fontWeight: 'bold'


    },

    DriverProfile: {
        color: '#A2A3A5',
        fontSize: Scale(14),
        fontWeight: 'bold',
        marginTop: Scale(10)

    },

    OrderView: {
        flexDirection: 'row',
        alignItems: 'center'
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
        shadowOpacity: Scale(3),
        shadowRadius: Scale(10),
        shadowColor: '#fce5cc',
        elevation: 2,
        shadowOffset: { width: 3, height: 3 }
    },

    lineView: {
        height: Scale(80),
        width: Scale(2),
        backgroundColor: '#DF201F',

    },

    CircleView: {
        height: Scale(10),
        width: Scale(10),
        borderRadius: Scale(5),
        backgroundColor: '#DF201F'
    },

    ParentLine: {
        alignItems: 'center'
    }

});
