import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { CardTitle } from './CardTitle';
import CardStyles from './styles/Cards';

export function DonationCard(props) {
  return (
    <View style={CardStyles.card}>
      <CardTitle
        title={props.title}
        location={props.location} />

      <View style={CardStyles.container}>
        <Text>{props.points} pts.</Text>
        <ProgressBar progress={0.5} color={Colors.black} />
        <Text style={CardStyles.action}>DONATE</Text>
      </View>
    </View>
  );
}
