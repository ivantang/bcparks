import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CardTitle } from './CardTitle';
import CardStyles from './styles/Cards';

export function VolunteerCard(props) {
  return (
    <View style={CardStyles.card}>
      <CardTitle
        title={props.title}
        location={props.location}
        date={props.date} />

      <View style={CardStyles.container}>
        <Text>{props.points} pts.</Text>
        <Text style={CardStyles.action}>VOLUNTEER</Text>
      </View>
    </View>
  );
}
