import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Button, } from 'react-native';

import { Header, Left, Icon, Right, Body, Title } from 'native-base';
import { ScrollableTabView } from '@valdio/react-native-scrollable-tabview'

import HeaderStyle from '../../Styles/Header'
import Style from '../../Styles/ProfileStyles'
import { Images, } from '../../Themes/'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Styles from '../../Styles/Header';
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
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



                    <View style={{ flexDirection: "row", }} >
                        <Image style={Style.PostImages} source={Images.download} />
                        <Image style={Style.PostImages} source={Images.download} />
                        <Image style={Style.PostImages} source={Images.download} />
                    </View>

                    <View style={{ flexDirection: "row", }} >
                        <Image style={Style.PostImages} source={Images.download} />
                        <Image style={Style.PostImages} source={Images.download} />
                        <Image style={Style.PostImages} source={Images.download} />
                    </View>
                    <View style={{ flexDirection: "row", }} >
                        <Image style={Style.PostImages} source={Images.download} />
                        <Image style={Style.PostImages} source={Images.download} />
                        <Image style={Style.PostImages} source={Images.download} />
                    </View>
                </ScrollView>

            </View>
        );
    }
}
