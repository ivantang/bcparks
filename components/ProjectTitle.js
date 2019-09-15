import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import TitleStyles from './styles/Titles';
import forest from '../assets/images/Forest.png';

export function ProjectTitle(props) {
  return (
    <View style={TitleStyles.info}>
      <View style={{
        flexDirection: 'row',
      }}>
        <View style={TitleStyles.location}>
          <Image source={forest} />
          <Text style={TitleStyles.locationtext}>  {props.location}</Text>
        </View>
      </View>
      <Text style={TitleStyles.title}>{props.title}</Text>
    </View>
  );
}
