import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList, TextInput } from 'react-native';
import { DishIcon, spclFood, BackBtn } from "../Component/Assets";
import Scale, { ScaledFont } from './Scale';
import Swiper from 'react-native-swiper'
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props { }
interface State { }

export default class TodaysSpecial extends Component<Props, State> {

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

        };
    }

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

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.RestaurantStyle}>
                    <TouchableOpacity style={{ margin: Scale(20) }}
                        onPress={() => { this.props.navigation.navigate('BottomTab') }}>

                        <Image source={BackBtn}
                        />
                    </TouchableOpacity>
                    <Text style={styles.SpecialText}>Today Special</Text>
                </View>
                <ScrollView style={{ marginTop: Scale(10) }}>
                    <FlatList
                        data={this.state.Data}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderTodaySpclItem}
                    />
                </ScrollView>

            </View >
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        //backgroundColor: '#faf3eb'
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

    RectangleStyle: {
        width: "90%",
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffff',
        alignSelf: 'center',
        marginHorizontal: Scale(20),
        marginTop: Scale(10),
        borderRadius: Scale(15),
        shadowOpacity: Scale(3),
        shadowRadius: Scale(10),
        shadowColor: '#fce5cc',
        elevation: 2,
        shadowOffset: { width: 3, height: 3 },
        borderWidth: 0.5,
        borderColor: '#fce5cc',
    },

});

// import React, {Component} from 'react';
// import {View, Text, FlatList, TouchableOpacity} from 'react-native';

// class TodaysSpecial extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
//     };
//   }

//   handleDeleteItem = index => {
//     const updatedItems = [...this.state.items];
//     updatedItems.splice(index, 1);
//     this.setState({items: updatedItems});
//   };

//   renderItem = ({item, index}) => (
//     <View style={{flexDirection: 'row'}}>
//       <TouchableOpacity
//         style={{
//           padding: 10,
//           backgroundColor: 'white',
//         }}>
//         <Text>{item}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={{width: 30, height: 30, backgroundColor: 'red'}}
//         onPress={() => this.handleDeleteItem(index)}>
//         <Text>Cross</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   render() {
//     return (
//       <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
//         <FlatList
//           data={this.state.items}
//           renderItem={this.renderItem}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </View>
//     );
//   }
// }

// export default TodaysSpecial;

// import React, {Component} from 'react';
// import {View, Text, FlatList, TouchableOpacity} from 'react-native';

// class ItemList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: ['Item 1', 'Item 2', 'Item 3'],
//     };
//   }

//   handleDeleteItem = item => {
//     const updatedItems = this.state.items.filter(i => i !== item);
//     this.setState({items: updatedItems});
//   };

//   render() {
//     return (
//       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//         {this.state.items.map((item, index) => (
//           <View style={{flexDirection: 'row'}}>
//             <TouchableOpacity
//               key={index}
              
//               style={{
//                 padding: 10,
//                 backgroundColor: 'white',
//               }}>
//               <Text>{item}</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={{width: 30, height: 30, backgroundColor: 'red'}}
//               onPress={() => this.handleDeleteItem(item)}>
//               <Text>Cross</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </View>
//     );
//   }
// }

// export default ItemList;
