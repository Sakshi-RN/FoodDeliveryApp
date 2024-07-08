

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from "./Component/Splash";
import CarouselScreen from "./Component/CarouselScreen";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import CountryCode from "./Component/CountryCode";
import OtpVerification from "./Component/OtpVerification";
import Location from "./Component/Location";
import PasscodeOTPVerification from "./Component/PasscodeOTPVerification";
import SetNewPasscode from "./Component/SetNewPasscode";
import ForgotPasscode from "./Component/ForgotPasscode";
import Dashboard from "./Component/Dashboard";
import SearchScreen from "./Component/SearchScreen";
import Cart from "./Component/Cart";
import BestOffers from "./Component/BestOffers";
import BottomTab from "./Component/BottomTab";
import TodaysSpecial from "./Component/TodaysSpecial";
import OfferCarousel from "./Component/OfferCarousel";
import RestaurantNearby from "./Component/RestaurantNearby";
import ProfileScreen from "./Component/ProfileScreen";
import NotificationsScreen from "./Component/NotificationsScreen";
import SearchLocation from "./Component/SearchLocation";
import SearchedRestaurants from "./Component/SearchedRestaurants";
import Favourite from "./Component/Favourite";
import EditProfile from "./Component/EditProfile";
import MyOrder from "./Component/MyOrder";
import TrackOrderScreen from "./Component/TrackOrderScreen";
import TrackOrderLocation from "./Component/TrackOrderLocation";
import CheckoutScreen from "./Component/CheckoutScreen";
import AddNewAddress from "./Component/AddNewAddress";
import AddSecondNewAddress from "./Component/AddSecondNewAddress";
import MapNearbyRestaurant from "./Component/MapNearbyRestaurant";
import NearByRestaurant from "./Component/NearByRestaurant";
import ReviewScreen from "./Component/ReviewScreen";
import CreditCardScreen from "./Component/CreditCardScreen";
import BankAcountScreen from "./Component/BankAcountScreen";
import UPIScreen from "./Component/UPIScreen";




const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash"
          screenOptions={{
            headerShown: false
          }}  >
          <Stack.Screen
            name="Splash"
            component={Splash}
          />
          <Stack.Screen
            name="CarouselScreen"
            component={CarouselScreen}
          />
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="CountryCode"
            component={CountryCode}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
          />

          <Stack.Screen
            name="OtpVerification"
            component={OtpVerification}
          />

          <Stack.Screen
            name="Location"
            component={Location}
          />
          <Stack.Screen
            name="SetNewPasscode"
            component={SetNewPasscode}
          />

          <Stack.Screen
            name="ForgotPasscode"
            component={ForgotPasscode}
          />
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
          />

          <Stack.Screen
            name="PasscodeOTPVerification"
            component={PasscodeOTPVerification}
          />

          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
          />

          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
          />

          <Stack.Screen
            name="Cart"
            component={Cart}
          />

          <Stack.Screen
            name="BestOffers"
            component={BestOffers}
          />


          <Stack.Screen
            name="TodaysSpecial"
            component={TodaysSpecial}
          />

          <Stack.Screen
            name="RestaurantNearby"
            component={RestaurantNearby}
          />

          <Stack.Screen
            name="OfferCarousel"
            component={OfferCarousel}
          />

          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
          />

          <Stack.Screen
            name="NotificationsScreen"
            component={NotificationsScreen}
          />

          <Stack.Screen
            name="SearchLocation"
            component={SearchLocation}
          />

          <Stack.Screen
            name="SearchedRestaurants"
            component={SearchedRestaurants}
          />

          <Stack.Screen
            name="Favourite"
            component={Favourite}
          />

          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
          />

          <Stack.Screen
            name="MyOrder"
            component={MyOrder}
          />

          <Stack.Screen
            name="TrackOrderScreen"
            component={TrackOrderScreen}
          />

          <Stack.Screen
            name="TrackOrderLocation"
            component={TrackOrderLocation}
          />


          <Stack.Screen
            name="CheckoutScreen"
            component={CheckoutScreen}
          />


          <Stack.Screen
            name="AddNewAddress"
            component={AddNewAddress}
          />

          <Stack.Screen
            name="AddSecondNewAddress"
            component={AddSecondNewAddress}
          />

          <Stack.Screen
            name="MapNearbyRestaurant"
            component={MapNearbyRestaurant}
          />

          <Stack.Screen
            name="NearByRestaurant"
            component={NearByRestaurant}
          />

          <Stack.Screen
            name="ReviewScreen"
            component={ReviewScreen}
          />

          <Stack.Screen
            name="CreditCardScreen"
            component={CreditCardScreen}
          />

          <Stack.Screen
            name="BankAcountScreen"
            component={BankAcountScreen}
          />

          <Stack.Screen
            name="UPIScreen"
            component={UPIScreen}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


