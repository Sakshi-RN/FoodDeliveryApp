import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CART, Home, Offer, SearchBar, whiteOffer, whiteCart, whiteSearch, whiteHome, Search } from "../Component/Assets";
import Scale from './Scale';

import Dashboard from './Dashboard';
import SearchScreen from './SearchScreen';
import Cart from './Cart';
import BestOffers from './BestOffers';



const Tab = createBottomTabNavigator();

class BottomTab extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props)
    this.state = {
      isHome: true,
      isSearch: false,
      isCart: false,
      isOffer: false
    }
  }

  setHomeValues = (home: any, search: any, cart: any, offer: any) => {
    console.log('****************Home', home);

    this.setState({ isHome: home, isSearch: search, isCart: cart, isOffer: offer });
  }

  setSearchValues = (home: any, search: any, cart: any, offer: any) => {

    console.log('****************Search', search);

    this.setState({ isHome: home, isSearch: search, isCart: cart, isOffer: offer });
  }

  setCartValues = (home: any, search: any, cart: any, offer: any) => {

    console.log('****************Card', cart);

    this.setState({ isHome: home, isSearch: search, isCart: cart, isOffer: offer });
  }

  setOfferValues = (home: any, search: any, cart: any, offer: any) => {
    console.log('****************Offer', offer);
    this.setState({ isHome: home, isSearch: search, isCart: cart, isOffer: offer });
  }



  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: Scale(90),
        // backgroundColor: 'blue',
            width: '100%',
            alignItems: 'center',
            paddingHorizontal:Scale(10)
          },
        }}

      >

        <Tab.Screen
          name="Home"
          component={Dashboard}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <>
                  <View style={{ backgroundColor: focused ? "red" : "#fff", height: focused ? 40:20, justifyContent: "center", alignItems: 'center', width: focused ? 100:80,borderRadius:30,flexDirection:'row' }}>
                    <Image source={focused ?whiteHome:Home}
                   
                    />
                    <Text style={styles.TextStyle}>Home</Text>
                  </View>
                </>
              )
            }
          }}

        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <>
                  <View style={{ backgroundColor: focused ? "red" : "#fff", height: focused ? 40:20, justifyContent: "center", alignItems: 'center', width: focused ? 100:50,borderRadius:30,flexDirection:'row' }}>
                    <Image source={focused ?whiteSearch:SearchBar}
                     
                    />
                    <Text style={styles.TextStyle}>Search</Text>
                  </View>
                </>
              )
            }
          }}
         
         

        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <>
                  <View style={{ backgroundColor: focused ? "red" : "#fff", height: focused ? 40:20, justifyContent: "center", alignItems: 'center', width: focused ? 100:80,borderRadius:30,flexDirection:'row' }}>
                  <Image source={focused ?whiteCart:CART}
                 
                  />
                  <Text style={styles.TextStyle}>Cart</Text>
                </View>
              </>
              )
            }
          }}
           
          

           />
        <Tab.Screen
          name="Offer"
          component={BestOffers}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused }) => {
              return (
            
                 <>
                  <View style={{ backgroundColor: focused ? "red" : "#fff", height: focused ? 40:20, justifyContent: "center", alignItems: 'center', width: focused ? 100:70,borderRadius:30,flexDirection:'row' }}>
                   <Image source={focused ?whiteOffer:Offer}
                  
                   />
                   <Text style={styles.TextStyle}>Offer</Text>
                 </View>
               </>
              )
            }
            
          }

          } />
      </Tab.Navigator>
    );
  }
}

export default BottomTab;


const styles = StyleSheet.create({

  container: {
    width: Scale(100),
    height: Scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Scale(30),
    flexDirection: 'row',
    bottom: Scale(10)

  },

  TextStyle: {
    color: '#ffff',
    marginLeft: Scale(10),
    fontWeight: 'bold'
  },


  OfferTabIcon: {
    marginHorizontal: Scale(10),
    marginTop: Scale(25)
  },


})







