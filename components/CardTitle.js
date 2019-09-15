import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import treePoint from '../assets/images/TreePoint.png';
import forest from '../assets/images/Forest.png';

export function CardTitle(props) {
  return (
    <View style={styles.info}>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            flex: 8,
            paddingTop: 10,
          }}
        >
          <Image source={forest} />
          <Text style={styles.location}> {props.location}</Text>
        </View>

        <View style={styles.pointbox}>
          <Image source={treePoint} />
          <Text style={styles.points}> {props.points ? props.points : '1 = $1'}</Text>
        </View>
      </View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    flexDirection: 'column',
    paddingLeft: 20,
  },
  location: {
    fontFamily: 'roboto-bold',
    fontSize: 13,
    color: '#969696',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'roboto-regular',
    fontSize: 20,
    color: '#434343',
    textAlign: 'left',
    paddingBottom: 3,
  },
  points: {
    fontFamily: 'roboto-medium',
    fontSize: 20,
    textShadowColor: '#000000',
    textShadowOffset: { width: 0, height: 1, },
    textShadowRadius: 1,
    color: '#FFFFFF',
  },
  pointbox: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#FFD238',
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});
