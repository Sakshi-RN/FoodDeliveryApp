import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground,Dimensions } from 'react-native';
import { SPLASH, CAR } from "../Component/Assets";
import Scale from './Scale';

interface Props { }
interface State { }

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
export default class MyComponent extends Component<Props, State> {
    
    componentDidMount() {
        setTimeout(() => {
          this.props.navigation.navigate('CarouselScreen'); 
        }, 3000);
      }
    
    render() {
        return (
            <ImageBackground
                source={SPLASH}
                style={styles.container}>
                <Image source={CAR}
                    style={styles.image} />
                <TouchableOpacity
                >
                    <Text style={styles.title}
                         testID={"splash-text"}>Food Delivery</Text>
                    <View style=
                        {styles.BlankView} />
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width:width,
        height:height
    },
    title: {
        fontSize: Scale(30),
        fontWeight: 'bold',
        marginTop: Scale(20),
        color: '#ffff',
        fontStyle: 'italic',
    },
    image: {
       marginRight: Scale(30),
        //backgroundColor:'black'
      
    },

    BlankView: {
        height: Scale(150)
    }

});