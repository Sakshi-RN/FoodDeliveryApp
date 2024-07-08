import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import {PIZZA, SKIP, LEFTARR } from "../Component/Assets";
import Scale from './Scale';

interface Props { }
interface State { }

export default class MyComponent extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={PIZZA}
          style={styles.image}>
          <TouchableOpacity
            style={{ marginTop: Scale(20) }}>
            <Image
              source={SKIP} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.semiCircleView}>
          <TouchableOpacity
            style=
            {styles.redView}>
            <Image
              source={LEFTARR} />
          </TouchableOpacity>
          <Text style={styles.subtitle}>
     10% Discount on first Order
          </Text>
          <Text style=
            {styles.title}>
            It IS A long Established Fact That A
            Reader will be Distracted
          </Text>
          <View style={{ height: Scale(70) }} />
          <View style={styles.parentCircleView}>
            <View style={styles.CircleView} />
            <View style={styles.CircleView} />
            <View style={styles.CircleView} />
            <View style={[styles.CircleView, { backgroundColor: 'red', borderWidth: 0 }]} />
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff'
  },

  title: {
    fontSize: Scale(15),
    color: 'grey',
    width: Scale(230),
    alignSelf: 'center',
    marginTop: Scale(20),
    textAlign: 'center',
    lineHeight: Scale(23)
  },

  image: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: Scale(20),
    paddingTop: Scale(30)
  },

  subtitle: {
    fontSize: 23,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: Scale(20),
    width:Scale(220),
    textAlign:'center'
  },

  redView: {
    width: Scale(60),
    height: Scale(60),
    borderRadius: Scale(30),
    backgroundColor: 'red',
    borderColor: "#ffff",
    borderWidth: Scale(4),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: Scale(35),
    marginTop: Scale(-45)
  },

  parentCircleView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },

  CircleView: {
    width: Scale(10),
    height: Scale(10),
    borderRadius: Scale(5),
    borderColor: 'green',
    borderWidth: Scale(1),
    marginHorizontal: Scale(10)
  },

  semiCircleView: {
    width: Scale(420),
    height: Scale(300),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: Scale(400),
    borderTopLeftRadius: Scale(400),
    backgroundColor: '#ffff',
    bottom: Scale(40),
    marginTop: Scale(-40),
    alignSelf: "center"

  }


});