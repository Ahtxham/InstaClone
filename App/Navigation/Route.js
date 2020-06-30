import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon  from 'react-native-vector-icons/FontAwesome';



// -------------------- Screens to be used in navgation -----------------------------------------
import Home from '../Containers/MainScreens/Home'
import Search from '../Containers/MainScreens/Search'
import AddPicture from '../Containers/MainScreens/AddPicture'
import Followers from '../Containers/MainScreens/Followers'
import Profile from '../Containers/MainScreens/Profile'
// ----------------------------------------------------------------------------------------------

import HeaderStyle from "../Styles/Header"
import { Images, } from '../Themes'


// +++++++++++++++++++++    Navigations types   +++++++++++++++++++++++++++++++++
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const BottomTabNavigator = createBottomTabNavigator();
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


export default class Route extends React.Component {
    render() {

        MainStack = () => {
            return (
                <Stack.Navigator initialRouteName="HomeScreen" headerMode="none">
                    <Stack.Screen name="HomeScreen" component={BottomTab} />
                </Stack.Navigator>
            );
        }

        BottomTab = () => {
            return (
                <BottomTabNavigator.Navigator tabBarOptions={{
                    showLabel:false
                  }}>
                    <BottomTabNavigator.Screen name="HomeScreen" component={Home}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => (
                                <Image style={HeaderStyle.logo} source={Images.Home} />
                            ),
                        }}
                    />
                    <BottomTabNavigator.Screen name="SearchScreen" component={Search}
                        options={{
                            tabBarLabel: 'Search',
                            showLabel: false,
                            tabBarIcon: ({ color, size }) => (
                                <Image style={HeaderStyle.logo} source={Images.SearchBlack} />
                            ),

                        }} />
                    <BottomTabNavigator.Screen name="AddPictureScreen" component={AddPicture}
                        options={{
                            tabBarLabel: 'Add',
                            tabBarIcon: ({ color, size }) => (
                                <Image style={HeaderStyle.logo} source={Images.plus} />
                            ),

                        }} />
                    <BottomTabNavigator.Screen name="FollowersScreen" component={Followers}
                        options={{
                            tabBarLabel: 'Follow',
                            tabBarIcon: ({ color, size }) => (
                                <Image style={HeaderStyle.logo} source={Images.Following} />
                            ),

                        }} />
                    <BottomTabNavigator.Screen name="ProfileScreen" component={Profile}
                        options={{
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color, size }) => (
                                <Image style={HeaderStyle.logo} source={Images.download} />
                            ),
                        }} />
                </BottomTabNavigator.Navigator>
            );
        }

        return (
            <NavigationContainer>
                <MainStack />
            </NavigationContainer>
        );
    }
}
