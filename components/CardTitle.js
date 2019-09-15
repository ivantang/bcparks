import React from 'react';
import { Text, View, Image } from 'react-native';
import TitleStyles from './styles/Titles';
import treePoint from '../assets/images/TreePoint.png';
import forest from '../assets/images/Forest.png';

export function CardTitle(props) {
  return (
    <View style={TitleStyles.info}>
      <View style={{
        flexDirection: 'row',
      }}>
        <View style={TitleStyles.location}>
          <Image source={forest} />
          <Text style={TitleStyles.locationtext}>  {props.location}</Text>
        </View>

        <View style={TitleStyles.pointbox}>
          <Image source={treePoint} />
          <Text style={TitleStyles.points}> {props.points ? props.points : "1 = $1"}</Text>
        </View>
      </View>
        <Text style={TitleStyles.title}>{props.title}</Text>
    </View>
  );
}
