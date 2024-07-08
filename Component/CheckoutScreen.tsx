import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  StatusBar,
  Modal,
  FlatList,
  Alert,
} from 'react-native';
import {
  BackBtn,
  hamburger,
  Vectoredit,
  ContinueBtn,
  coupenCode,
  VectorDelt,
  creditcardicon,
  Visa,
  bhmupi,
  cod,
} from '../Component/Assets';
import Scale from './Scale';

interface Props {}
interface State {}

export default class MyOrder extends Component<Props, State> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      show: false,
      Data: [{id: 0}, {id: 1}, {id: 2}],
      count: 0,
      modalVisible: false,
      selectedItemId: null,
      Payment: [
        {id: 0, paymentOption: 'Credit card', card: creditcardicon},
        {id: 1, paymentOption: 'Bank account', card: Visa},
        {id: 2, paymentOption: 'UPI', card: bhmupi},
        {id: 3, paymentOption: 'Cash on delivery', card: cod},
      ],
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
  };

  toggleItemSelection = itemId => {
    this.setState({selectedItemId: itemId});
  };

  navigationFunction = () => {
    const {selectedItemId} = this.state;
    if (selectedItemId === 0) {
      this.props.navigation.navigate('CreditCardScreen') ||
        this.setState({modalVisible: false});
    } else if (selectedItemId === 1) {
      this.props.navigation.navigate('BankAcountScreen')||
        this.setState({modalVisible: false});
    } else if (selectedItemId === 2) {
      this.props.navigation.navigate('UPIScreen')||
      this.setState({modalVisible: false});
    } else if (selectedItemId === 3) {
      this.props.navigation.navigate('TrackOrderLocation')||
      this.setState({modalVisible: false});
    } else {
    }
  };

  renderTodaySpclItem = ({item}) => {
    const {count} = this.state;
    return (
      <View style={styles.RectangleStyle2}>
        <Image source={hamburger} />
        <View style={styles.BiryaniParent2}>
          <Text style={[styles.BiryaniText2]}>Hamburger</Text>
          <Text style={styles.PriceText2}>₹100 ₹200</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: Scale(5),
            }}>
            <View style={styles.ViewStyle2}>
              <TouchableOpacity onPress={this.handleDecrement}>
                <Text style={styles.quantityText2}>-</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.CountView2}>
              <Text style={styles.quantityText2}>{count}</Text>
            </View>
            <View style={styles.ViewStyle2}>
              <TouchableOpacity onPress={this.handleIncrement}>
                <Text style={styles.quantityText2}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  renderDetailsItem = ({item}) => {
    return (
      <View style={styles.outerRectangle}>
        <TouchableOpacity style={styles.buttonCircle}>
          <View style={styles.circle} />
        </TouchableOpacity>
        <Text style={styles.AdressItemText}>
          near Hocky building, raj royal,House no 13, lakadganj nagpur
          Maharashtra 441001
        </Text>
        <View>
          <TouchableOpacity>
            <Image source={Vectoredit} style={{marginVertical: Scale(20)}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={VectorDelt} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  renderRestaurantView = () => {
    return (
      <View style={styles.RestaurantStyle}>
        <TouchableOpacity
          style={{margin: Scale(20)}}
          onPress={() => {
            this.props.navigation.navigate('Cart');
          }}>
          <Image source={BackBtn} />
        </TouchableOpacity>
        <Text style={styles.SpecialText}>Checkout</Text>
      </View>
    );
  };
  renderScrollview = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: Scale(20), marginTop: Scale(20)}}>
          <Text style={styles.restaurantDetails}>Order Items Details</Text>
          <FlatList
            data={this.state.Data}
            horizontal={false}
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderTodaySpclItem}
          />
        </View>
        <View style={styles.backgroundstyle}>
          <Text style={styles.restaurantDetails}>Coupon On code</Text>
          <View style={styles.ContactView}>
            <TextInput
              style={[styles.TextInputStyle]}
              placeholder="PIZZ34"
              placeholderTextColor={'black'}
            />

            <Image source={coupenCode} style={{marginRight: Scale(20)}} />
          </View>
        </View>
        <View style={styles.backgroundstyle}>
          <View style={[styles.OrderView]}>
            <Text style={styles.restaurantDetails}>Total Bill</Text>
            <Text style={styles.restaurantDetails}>₹300</Text>
          </View>
          <View style={styles.DashedlineView} />
          <View style={[styles.OrderView]}>
            <Text style={styles.delievryCharge}>Delivery Charge</Text>
            <Text style={styles.delievryCharge}>₹0.00</Text>
          </View>
          <View style={styles.lineView} />
          <View style={[styles.OrderView]}>
            <Text style={styles.delievryCharge}>Packing Charge</Text>
            <Text style={styles.delievryCharge}>₹ 9</Text>
          </View>
          <View style={styles.lineView} />

          <View style={[styles.OrderView]}>
            <Text style={styles.delievryCharge}>Tax Amount(5.0%)</Text>
            <Text style={styles.delievryCharge}>₹15</Text>
          </View>
          <View style={styles.lineView} />
          <View style={[styles.OrderView]}>
            <Text style={styles.delievryCharge}>Total Discount</Text>
            <Text style={styles.delievryCharge}>₹0.00</Text>
          </View>
          <View style={styles.lineView} />
          <View style={[styles.OrderView]}>
            <Text style={styles.delievryCharge}>Coupen Discount</Text>
            <Text style={styles.delievryCharge}>₹30</Text>
          </View>
          <View style={styles.DashedlineView} />
          <View style={[styles.OrderView]}>
            <Text style={[styles.restaurantDetails, {marginTop: 0}]}>
              Grand Total
            </Text>
            <Text
              style={[styles.delievryCharge, {color: '#DF201F', marginTop: 0}]}>
              ₹324
            </Text>
          </View>
        </View>
        <View style={styles.backgroundstyle}>
          <Text style={styles.restaurantDetails}>Order Items Details</Text>
          <FlatList
            data={this.state.Data}
            horizontal={false}
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderDetailsItem}
          />
          <TouchableOpacity
            style={styles.addAddressBtn}
            onPress={() => {
              this.props.navigation.navigate('AddNewAddress');
            }}>
            <Text style={styles.addAddresstext}>Add New Delivery Address</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
  modalFunction = () => {
    this.setState({modalVisible: true});
  };

  renderCheckOutButton = () => {
    return (
      <TouchableOpacity style={styles.LoginButton} onPress={this.modalFunction}>
        <Image source={ContinueBtn} style={styles.LoginButton2} />
      </TouchableOpacity>
    );
  };

  renderPaymentItem = ({item}) => {
    const isSelected = this.state.selectedItemId === item.id;
    return (
      <View style={styles.cardStyle}>
        <View
          style={{
            flexDirection: 'row',
            width: Scale(200),
            alignItems: 'center',
          }}>
          <Image source={item.card} />
          <Text style={styles.itemText}>{item.paymentOption}</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.toggleItemSelection(item.id)}
          style={isSelected ? styles.buttonCircle : styles.greyCircle}>
          {isSelected && <View style={styles.circle} />}
        </TouchableOpacity>
      </View>
    );
  };

  renderPaymentOptions = () => {
    return (
      <Modal
        visible={this.state.modalVisible}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalParent}>
          <View style={styles.modalView}>
            <FlatList
              data={this.state.Payment}
              horizontal={false}
              keyExtractor={item => item.id.toString()}
              renderItem={this.renderPaymentItem}
              scrollEnabled={false}
            />
            {this.props.navigation && (
              <TouchableOpacity
                style={{marginTop: Scale(20)}}
                onPress={this.navigationFunction}>
                <Image source={ContinueBtn} style={styles.LoginButton2} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {this.renderRestaurantView()}
        {this.renderScrollview()}
        {this.renderCheckOutButton()}
        {this.renderPaymentOptions()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: Scale(16),
    color: 'black',
    marginLeft: Scale(20),
  },
  cardStyle: {
    flexDirection: 'row',
    paddingHorizontal: Scale(30),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: Scale(8),
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: '#FAF8F7',
    marginTop: Scale(10),
    height: Scale(60),
  },
  circle: {
    backgroundColor: '#DF201F',
    width: Scale(10),
    height: Scale(10),
    borderRadius: Scale(5),
  },
  buttonCircle: {
    borderColor: '#DF201F',
    width: Scale(20),
    height: Scale(20),
    borderRadius: Scale(10),
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  greyCircle: {
    borderColor: '#A2A3A5',
    width: Scale(20),
    height: Scale(20),
    borderRadius: Scale(10),
    borderWidth: 2,
  },
  modalParent: {
    flex: 1,
    backgroundColor: 'rgba(130,140,140,0.5)',
  },

  modalView: {
    backgroundColor: 'white',
    padding: Scale(20),
    borderTopLeftRadius: Scale(10),
    borderTopRightRadius: Scale(10),
    flex: 0.5,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  addAddressBtn: {
    alignSelf: 'center',
    marginVertical: Scale(20),
  },

  addAddresstext: {
    fontWeight: 'bold',
    color: '#DF201F',
    textDecorationLine: 'underline',
  },

  OuterCircle: {
    borderWidth: Scale(2.5),
    borderColor: 'red',
    width: Scale(20),
    height: Scale(20),
    borderRadius: Scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerCircle: {
    backgroundColor: 'red',
    width: Scale(10),
    height: Scale(10),
    borderRadius: Scale(5),
  },

  TextInputStyle: {
    width: Scale(160),
    fontWeight: 'bold',
    fontSize: Scale(15),
    borderColor: '#DF201F',
    paddingLeft: Scale(20),
  },

  ContactView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Scale(20),
    borderRadius: Scale(10),
    height: Scale(60),
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#DF201F',
    alignItems: 'center',
  },

  BiryaniParent: {
    marginLeft: Scale(15),
  },

  OrderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  OrderedText: {
    fontSize: Scale(20),
    fontWeight: 'bold',
  },

  trackOrder: {
    color: '#94CD00',
    fontWeight: 'bold',
    fontSize: Scale(15),
  },

  SpecialText: {
    fontSize: Scale(20),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: Scale(14),
  },

  restaurantDetails: {
    fontSize: Scale(16),
    fontWeight: 'bold',
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
    shadowOffset: {width: 3, height: 3},
  },

  BiryaniText: {
    fontWeight: 'bold',
    fontSize: Scale(18),
    marginTop: Scale(10),
  },

  hamBurgerText: {
    fontWeight: 'bold',
    fontSize: Scale(16),
    marginTop: Scale(10),
  },

  BiryaniView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Scale(5),
  },

  BiryaniViewnew: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Scale(10),
  },

  PriceText: {
    fontWeight: 'bold',
    fontSize: Scale(15),
    color: '#d12e2e',
    marginLeft: Scale(6),
  },

  PriceText2: {
    fontWeight: 'bold',
    color: '#d12e2e',
    marginTop: Scale(5),
  },

  goldenText: {
    color: 'grey',
    marginLeft: Scale(5),
  },

  RestaurantStyl2: {
    marginHorizontal: Scale(5),
    marginTop: Scale(15),
    borderRadius: Scale(10),
  },

  RectangleStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginTop: Scale(10),
    borderRadius: Scale(10),
    borderWidth: 1.5,
    borderColor: 'lightgray',
    padding: Scale(15),
    marginRight: Scale(8),
  },

  delievryCharge: {
    color: '#A2A3A5',
    fontWeight: 'bold',
    fontSize: Scale(15),
  },

  DashedlineView: {
    marginVertical: Scale(15),
    borderWidth: 2.5,
    borderStyle: 'dashed',
    borderColor: 'lightgrey',
  },

  lineView: {
    height: Scale(1),
    backgroundColor: 'lightgrey',
    marginVertical: Scale(15),
  },

  RestaurantStyle2: {
    height: Scale(100),
    backgroundColor: '#ffff',
    justifyContent: 'flex-end',
    padding: Scale(20),
  },

  SpecialText2: {
    fontSize: Scale(18),
    fontWeight: 'bold',
  },

  BiryaniText2: {
    fontWeight: 'bold',
  },

  BiryaniParent2: {
    marginLeft: Scale(20),
  },

  BiryaniView2: {
    height: Scale(35),
    width: Scale(40),
    justifyContent: 'center',
    backgroundColor: '#d12e2e',
    alignItems: 'center',
    borderRadius: Scale(4),
    marginLeft: Scale(8),
  },

  BiryaniViewnew2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Scale(10),
  },

  RectangleStyle2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginTop: Scale(15),
    borderRadius: Scale(15),
    shadowOpacity: Scale(3),
    shadowRadius: Scale(10),
    shadowColor: '#fce5cc',
    elevation: 2,
    shadowOffset: {width: 3, height: 3},
    borderWidth: 0.5,
    borderColor: '#fce5cc',
    padding: Scale(15),
  },

  LoginButton: {
    shadowOpacity: Scale(2),
    shadowRadius: Scale(1),
    shadowColor: '#7fe602',
    elevation: 2,
    shadowOffset: {width: 2, height: 1},
    marginBottom: Scale(10),
    backgroundColor: '#ffff',
  },

  LoginButton2: {
    width: '98%',
    height: Scale(100),
    alignSelf: 'center',
  },

  ViewStyle2: {
    width: Scale(30),
    backgroundColor: '#f5d3d5',
    height: Scale(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Scale(4),
  },

  quantityText2: {
    fontSize: Scale(18),
  },

  CountView2: {
    width: Scale(40),
    backgroundColor: '#f5d3d5',
    height: Scale(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'lightgrey',
    borderLeftWidth: Scale(2),
    borderRightWidth: Scale(2),
  },

  outerRectangle: {
    flexDirection: 'row',
    marginTop: Scale(10),
    backgroundColor: '#FFF3E5',
    borderRadius: Scale(10),
    borderWidth: 2,
    borderColor: '#FFE3C1',
    padding: Scale(15),
  },

  AdressItemText: {
    width: Scale(220),
    lineHeight: Scale(20),
    marginHorizontal: Scale(20),
    color: '#161A1D',
  },

  backgroundstyle: {
    backgroundColor: '#ffff',
    paddingHorizontal: Scale(20),
    marginTop: Scale(20),
    paddingVertical: Scale(20),
  },
});
