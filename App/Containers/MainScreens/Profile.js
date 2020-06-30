import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Button, TouchableHighlight, ScrollView } from 'react-native';
import { Header, Left, Icon, Right, Body, Title } from 'native-base';

import HeaderStyle from '../../Styles/Header'
import Style from '../../Styles/ProfileStyles'
import { Images, Colors } from '../../Themes/'

// --------------------     Handling Of Top Bar     -------------------------------------------
// Top Bar Screens to be displayed
import NormalPosts from '../../Components/ProfileComponent/NormalPosts'
import IGTVPosts from '../../Components/ProfileComponent/IGTVPosts'
import TaggedPosts from '../../Components/ProfileComponent/TaggedPosts'
// Top Bar Naviagator
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const TopTab = createMaterialTopTabNavigator();
// ---------------------------------------------------------------------------------------------


export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        //  Top Navigator Stack that can be used to display any where in the screen 
        TopTabStack = () => {
            return (
                <TopTab.Navigator initialRouteName="NormalPosts" >
                    <TopTab.Screen
                        name="NormalPosts"
                        component={NormalPosts}
                        options={{
                            tabBarLabel: 'Posts',
                            
                        }}
                    />
                    <TopTab.Screen
                        name="IGTVPosts"
                        component={IGTVPosts}
                        options={{
                            tabBarLabel: 'IGTV',
                            
                        }}
                    />
                    <TopTab.Screen
                        name="TaggedPosts"
                        component={TaggedPosts}
                        options={{
                            tabBarLabel: 'Tagged',
                            
                        }}
                    />
                </TopTab.Navigator>
            );
        }
        return (
            <View style={{ backgroundColor: Colors.silver }}>
                <Header style={HeaderStyle.header} >
                    <Left>
                        <Image style={HeaderStyle.logo} source={Images.backBlackArrow} />
                    </Left>
                    <Body>
                        <Text style={[HeaderStyle.title]}>Profile Name</Text>
                    </Body>
                    <Right>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("HomeScreen")}>
                            <Image style={HeaderStyle.rightImage} source={Images.Ellipses} />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <ScrollView>
                    <View style={{ flexDirection: "row", margin: 20, marginBottom: 10 }}>
                        <Image style={Style.ProfileImage} source={Images.download} />

                        <View style={[Style.ProfileDataHeading, { paddingLeft: 30, alignItems: 'center', }]}>
                            <Text style={{ fontSize: 18, fontWeight: "bold", }}>7879</Text>
                            <Text style={{ fontSize: 15, }}>Posts</Text>
                        </View>
                        <View style={[Style.ProfileDataHeading, { alignItems: 'center', }]}>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>396 k</Text>
                            <Text style={{ fontSize: 15, }}>Followers</Text>
                        </View>
                        <View style={[Style.ProfileDataHeading, { alignItems: 'center', }]}>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>40</Text>
                            <Text style={{ fontSize: 15, }}>Following</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginLeft: 10, }}>
                        <View style={Style.ProfileDataHeading}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Apple Hub</Text>
                            <Text style={{ fontSize: 15, color: "grey" }}>Blogger</Text>
                            <Text style={{ fontSize: 15, }}>Apple news and rumors</Text>
                            <Text style={{ fontSize: 15, }}>Not affiliated with Apple Inc</Text>
                            <Text style={{ fontSize: 15, }}>Apple news and rumors</Text>
                            <Text style={{ fontSize: 15, }}>Not affiliated with Apple Inc</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginLeft: 20, }}>

                        <TouchableHighlight style={[Style.Button, { marginLeft: 0 }]}>
                            <View style={{ flexDirection: "row", }}>
                                <Text style={{ fontSize: 14, fontWeight: "bold" }}>Following</Text>
                                <Image style={Style.ButtonIcon} source={Images.ArrowDown} />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={Style.Button}>
                            <Text style={{ fontSize: 14, fontWeight: "bold" }}>Message</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={Style.Button}>
                            <Text style={{ fontSize: 14, fontWeight: "bold" }}>Email</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[Style.Button, { width: 40 }]}>
                            <Image style={Style.ButtonIcon} source={Images.ArrowDown} />
                        </TouchableHighlight>

                    </View>

                    <View style={{ flexDirection: "row", marginLeft: 10, }}>

                        <View style={Style.PostsBorder}>
                            <Image style={Style.RecentPostsImage} source={Images.download} />
                        </View>
                        <View style={Style.PostsBorder}>
                            <Image style={Style.RecentPostsImage} source={Images.download} />
                        </View>
                        <View style={Style.PostsBorder}>
                            <Image style={Style.RecentPostsImage} source={Images.download} />
                        </View>
                        <View style={Style.PostsBorder}>
                            <Image style={Style.RecentPostsImage} source={Images.download} />
                        </View>

                    </View>
                    < TopTabStack />

                </ScrollView>


            </View>
        );
    }
}
