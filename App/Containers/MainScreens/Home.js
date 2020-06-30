import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Profile from "../../Containers/MainScreens/Profile"
import Followers from "../../Containers/MainScreens/Followers"

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const TopTab = createMaterialTopTabNavigator();

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    TopTabStack = () => {
      return (
        <TopTab.Navigator initialRouteName="Home" >
          <TopTab.Screen name="Profile" component={Profile} />
          <TopTab.Screen name="Followers" component={Followers} />
        </TopTab.Navigator>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <Text>Home</Text>
      </View>
    );
  }
}
