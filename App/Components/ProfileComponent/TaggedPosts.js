import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';

import Style from '../../Styles/ProfileStyles'
import { Images, Colors } from '../../Themes/'

 
export default function TaggedPosts() {
    return (
      <View>
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
      </View>
    );
}
