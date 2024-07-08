import React, {Component, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ImageSourcePropType,
  Alert,
  Dimensions,
} from 'react-native';
import {FOOD, SKIP, LEFTARR, CHEF, PIZZA, PIZZABOY} from '../Component/Assets';
import Scale from './Scale';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const ENTRIES = [
  {
    id: 1,
    image: CHEF,
    text: ' we have Quality Chef',
  },
  {
    id: 2,
    image: PIZZABOY,
    text: 'Swift Delivery',
  },
  {
    id: 3,
    image: FOOD,
    text: 'Choose your Tasty Food',
  },
  {
    id: 4,
    image: PIZZA,
    text: ' 10% Discount on first Order',
  },
];

interface Props {
  navigation: any;
}
interface State {
  activeSlide: number;
}

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class CarouselScreen extends Component<Props, State> {
  flatListRef: any;

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      activeSlide: 0,
    };

    this.flatListRef = React.createRef();
  }
  Carousel: any;
  ENTRIES: any;

  handleMarker = (index: any) => {
    this.flatListRef.snapToItem({index, animated: true});
  };

  renderItem = ({item}) => {
    return (
      <View style={{flex:1,backgroundColor:'#ffff'}}>
        <ImageBackground source={item.image} style={styles.image}>
          <TouchableOpacity
            style={{marginTop: Scale(20)}}
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            <Image source={SKIP} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.semiCircleView}>
          <TouchableOpacity
            style={styles.redView}
            onPress={() => {
              this.refs.flatListRef.snapToNext();
            }}>
            <Image source={LEFTARR} />
          </TouchableOpacity>
          <Text style={styles.subtitle}>{item.text} </Text>
          <Text style={styles.title} testID={'carousel'}>
            It IS A long Established Fact That A Reader will be Distracted
          </Text>
        </View>
      </View>
    );
  };

  incrementCount = () => {
    const {activeSlide} = this.state;
    const nextIndex = (activeSlide + 1) % ENTRIES.length;
    this.setState({activeSlide: nextIndex});
    this.handleMarker(activeSlide);
  };

  get pagination() {
    const {activeSlide} = this.state;
    return (
      <Pagination
        dotsLength={ENTRIES.length}
        activeDotIndex={activeSlide}
        containerStyle={{backgroundColor: 'white', width: '100%'}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 5,
          backgroundColor: 'red',
        }}
        inactiveDotStyle={{
          backgroundColor: 'white',
          width: 15,
          height: 15,
          borderRadius: 8,
          marginHorizontal: 5,
          borderWidth: Scale(2),
          borderColor: 'green',
        }}
        inactiveDotOpacity={0.8}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Carousel
          data={ENTRIES}
          renderItem={this.renderItem}
          onSnapToItem={(index: any) => this.setState({activeSlide: index})}
          sliderWidth={400}
          itemWidth={400}
          ref={'flatListRef'}
        />
        {this.pagination}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: Scale(15),
    color: 'grey',
    width: Scale(230),
    alignSelf: 'center',
    marginTop: Scale(10),
    textAlign: 'center',
    lineHeight: Scale(23),
  },

  image: {
    width: width,
    height: height / 1.4,
    alignItems: 'flex-end',
    paddingRight: Scale(20),
    paddingTop: Scale(30),
  },

  subtitle: {
    fontSize: 23,
    fontWeight: 'bold',
    alignSelf: 'center',
    width: Scale(220),
    textAlign: 'center',
  },

  redView: {
    width: Scale(60),
    height: Scale(60),
    borderRadius: Scale(30),
    backgroundColor: 'red',
    borderColor: '#ffff',
    borderWidth: Scale(4),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: height / 16,
  },

  parentCircleView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  CircleView: {
    width: Scale(10),
    height: Scale(10),
    borderRadius: Scale(5),
    borderColor: 'green',
    borderWidth: Scale(1),
    marginHorizontal: Scale(10),
  },

  semiCircleView: {
    width: width,
    height: height / 3,
    justifyContent: 'center',
    borderTopRightRadius: width / 2,
    borderTopLeftRadius: width / 2,
    backgroundColor: '#ffff',
  bottom: height / 6,
    alignSelf: 'center',
  },
});
