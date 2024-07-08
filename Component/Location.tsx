import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { Mails, Resend, Locations, locationbtn } from "../Component/Assets";
import Scale from './Scale';
import MapView, { Marker } from 'react-native-maps';


interface Props { }
interface State { }

export default class Location extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            markers: [
                {
                    title: 'Marker 1',
                    description: 'This is Marker 1',
                    coordinate: {
                        latitude: 37.78825,
                        longitude: -122.4324,
                    },
                },
                {
                    title: 'Marker 2',
                    description: 'This is Marker 2',
                    coordinate: {
                        latitude: 37.7794,
                        longitude: -122.4142,
                    },
                },
            ],

            islocation: false
        };

    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.islocation == true ?
                    <MapView style={styles.mapStyle}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}>
                        {this.state.markers.map((marker, index) => (
                            <Marker
                                key={index}
                                coordinate={marker.coordinate}
                                title={marker.title}
                                description={marker.description} />
                        ))}
                    </MapView> : null}

                <View style={styles.CircleParentView} />
                <TouchableOpacity >
                    <Image source={Locations}
                    />
                </TouchableOpacity>
                <Text style={[styles.countrycode]}>Allow Location</Text>
                <Text style={styles.welcomeText}>We need your Permission To Access Your Location</Text>
                <View style={styles.BlankView} />
                <TouchableOpacity style={styles.LoginButton}
                    onPress={() => { this.setState({ islocation: true }) }}>
                    <Image source={locationbtn}
                        style={styles.LoginButton2} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.ForgotPasscode} onPress={()=>{this.props.navigation.navigate('Dashboard')}}>Don't allow</Text>
                </TouchableOpacity>
            </View >

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffff'
    },

    mapStyle: {
        width: '100%',
        height: '100%',
    },

    CircleParentView: {
        height: Scale(80)
    },

    ForgotPasscode: {
        fontWeight: 'bold',
        fontSize: Scale(15),
        alignSelf: 'center',
        marginRight: Scale(10)
    },

    LoginButton: {
        width: "95%",
        shadowOpacity: Scale(2),
        shadowRadius: Scale(1),
        shadowColor: '#7fe602',
        elevation: 2,
        shadowOffset: { width: 2, height: 1 },

    },

    LoginButton2: {
        width: "95%",
        height: Scale(100),
        alignSelf: 'center'
    },

    countrycode: {
        fontWeight: 'bold',
        fontSize: Scale(23),
        marginTop: Scale(20)

    },

    title: {
        fontSize: Scale(20),
        fontWeight: 'bold',
        marginTop: Scale(10),
        color: '#ffff',
    },

    image: {
        marginTop: Scale(20),
        height: Scale(110),
        width: Scale(110)
    },

    BlankView: {
        height: Scale(120)
    },

    welcomeText: {
        fontSize: Scale(15),
        fontWeight: 'bold',
        marginTop: Scale(15),
        color: 'lightgray',
        textAlign: 'center',
        width: Scale(280),
        lineHeight: Scale(22)

    },


    FlagStyle: {
        height: Scale(150),
        marginTop: Scale(20)
    },

    parentView: {
        marginTop: Scale(30),
    },


    inputStyle: {
        width: Scale(50),
        height: Scale(60),
        borderRadius: Scale(10),
        backgroundColor: '#ffff',
        fontSize: Scale(25),
        textAlign: 'center'
    },

    OTPStyle: {
        width: '100%',
        height: 80,
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Scale(20)
    }



});
