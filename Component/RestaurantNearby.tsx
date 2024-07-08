import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList, TextInput } from 'react-native';
import { DishIcon, spclFood,BackBtn,Rating, redLocationIcon,nearbyRestraunt} from "../Component/Assets";
import Scale, { ScaledFont } from './Scale';
import Swiper from 'react-native-swiper'
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props { }
interface State { }


export default class RestaurantNearby extends Component<Props, State> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            show: false,
            Data: [
                { id: 0 },
                { id: 1 },
                { id: 2 },
                { id: 3 },
                {id:4}

            ],

        };
    }
    renderRestaurantItem = ({ item }) => {
        return (
            <View style={styles.RestaurantStyle}>
                <Image source={nearbyRestraunt}
                    style={{ alignSelf: 'center',  bottom: Scale(12),width:"100%" }}
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
            <View style={styles.container}>
                <View style={styles.RestaurantStyle2}>
                    <TouchableOpacity  style={{margin:Scale(20)}}
                    onPress={()=>{this.props.navigation.navigate('BottomTab')}}>
                    <Image source={BackBtn}
                   />
                    </TouchableOpacity>
                    <Text style={styles.SpecialText}>Restaurant Nearby</Text>
                </View>
                    <FlatList
                        data={this.state.Data}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderRestaurantItem}
                    />
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
        textAlign:'center',
     marginBottom:Scale(14)
    },

    RestaurantStyle2: {
        height: Scale(100),
        backgroundColor: '#ffff',
        flexDirection:'row',
        alignItems:'flex-end',
        //padding:Scale(20)
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

    RestaurantStyle: {
        backgroundColor: '#ffff',
        marginHorizontal: Scale(20),
        marginTop: Scale(15),
        borderRadius: Scale(15),
        shadowOpacity: Scale(3),
        shadowRadius: Scale(5),
        shadowColor: '#f5dbb3',
        elevation: 2,
        shadowOffset: { width: 1, height: 1 },
        borderWidth: 0.5,
        borderColor: '#f5dbb3',
        width: "90%",
        height: Scale(300),
        alignSelf:'center'
    },
 
  



});
