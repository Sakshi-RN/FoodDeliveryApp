
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import { getAllCountries, getStatesOfCountry, getCitiesOfState } from 'country-state-city';
import { getAllStates } from 'country-state-city/lib/state';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedState: '',
      states: [],
      isStateModalVisible: false,
    };
  }

  componentDidMount() {
    const { selectedState } = this.state;
    const states = getAllStates(selectedState);
    this.setState({ states });
  }

  handleStateChange = (stateCode) => {
    const states = getAllStates(this.state.selectedState, stateCode);
    this.setState({
      selectedState: stateCode,
      states,
      isStateModalVisible: false,
    });
    
  };

  toggleStateModal = () => {
    this.setState({ isStateModalVisible: !this.state.isStateModalVisible });
   
  };

  render() {
    const { selectedState } = this.state;
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.toggleStateModal}>
          <Text>Select a state</Text>
        </TouchableOpacity>

        {this.state.isStateModalVisible == true ?
          <View>
            <Modal animationType="slide">
              <View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                <FlatList
                  style={{ width: 100, backgroundColor: 'black' }}
                  data={this.state.states}
                  keyExtractor={(item) => item.stateCode}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => this.handleStateChange(item.stateCode)
                    }>
                      <Text style={{ fontSize: 18, color: '#ffff' }}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </Modal>
          </View> : null}
      </View>
    );
  }
}

export default App;

