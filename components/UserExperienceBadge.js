import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';

import Hexagon from '../assets/images/hexagon.png';

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'blue'
  }
});

const getTitle = level => {
  switch (level) {
    case 1:
      return 'Novice Squirrel';
    case 2:
      return 'Novice Newt';
    case 3:
      return 'Intermediate Inchworm';
    case 4:
      return 'Experienced Eagle';
    default:
      return 'Senior Snowy Owl';
  }
};

const getLevel = points => {
  return 1 + Math.abs(Math.floor(points / 200));
};

const getLeftOverPoints = points => {
  return points % 200;
};

const UserExperienceBadge = ({ points }) => {
  const level = getLevel(points);
  const leftoverPoints = getLeftOverPoints(points);
  const title = getTitle(level);

  return (
    <View>
      <Image source={Hexagon} />
      <Text>{`LVL ${level}`}</Text>
      <Text>{leftoverPoints}</Text>
      <Text>{title}</Text>
      <View style={styles.box.backgroundColor} />
    </View>
  );
};

export default UserExperienceBadge;