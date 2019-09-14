import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CardTitle } from './CardTitle';
import CardStyles from './styles/Cards';

export function DonationCard(props) {
  return (
    <View style={CardStyles.card}>
      <CardTitle
        title={props.title}
        location={props.location} />

      <View style={CardStyles.container}>
        <Text>{props.points}</Text>
        <Text style={CardStyles.action}>DONATE</Text>
      </View>
    </View>
  );
}
