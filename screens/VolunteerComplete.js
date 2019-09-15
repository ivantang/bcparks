import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import ActionButton from '../components/ActionButton';
import checkmarkIcon from '../assets/images/checkmark.png';
import whitetreeIcon from '../assets/images/whiteTree.png';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A35EC4',
    flex: 1,
    alignItems: 'center',
  },
  nikeCheckmark: {
    marginTop: 160,
    height: 111,
    width: 130,
  },
  donatedText: {
    marginTop: 40,
    color: 'white',
    fontFamily: 'roboto-bold',
    fontSize: 40,
  },
  pointsEarnedText: {
    marginTop: 180,
    color: 'white',
    fontFamily: 'roboto-regular',
    fontSize: 25,
  },
  inlinePoints: {
    marginTop: 8,
    flexDirection: 'row',
  },
  tree: {
    marginTop: 5,
    marginLeft: 8,
  },
  pointsEarnedAmount: {
    color: 'white',
    fontFamily: 'roboto-regular',
    fontSize: 25,
  },
  actionButtonStyle: {
    width: 300,
    marginTop: 50,
  },
});

export default function VolunteerComplete({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.nikeCheckmark} source={checkmarkIcon} />
      <Text style={styles.donatedText}>Volunteered</Text>
      <Text style={styles.pointsEarnedText}>You Will Earn</Text>
      <View style={styles.inlinePoints}>
        <Text style={styles.pointsEarnedAmount}>{navigation.getParam('points', 0)}</Text>
        <Image source={whitetreeIcon} style={styles.tree}/>
      </View>
      <View style={styles.actionButtonStyle}>
        <ActionButton action="Back To Home" textColor="#A35EC4" color="white" navigation={navigation} navigateTo='Home' />
      </View>
    </View>
  );
}
