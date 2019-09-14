import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { CardTitle } from './CardTitle';
import CardStyles from './styles/Cards';

function calculatePercentage(funded, needed) {
  return funded && needed ? funded/needed : 0;
}

export function DonationCard(props) {
  return (
    <View style={CardStyles.card}>
      <CardTitle
        title={props.title}
        location={props.location} />

      <View style={CardStyles.container}>
        <Text>{props.points} pts.</Text>
        <ProgressBar
          progress={calculatePercentage(props.cashFunded, props.cashNeeded)}
          color={Colors.black} />
        <Text style={CardStyles.action}>DONATE</Text>
      </View>
    </View>
  );
}
