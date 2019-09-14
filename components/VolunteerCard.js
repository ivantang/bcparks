import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CardTitle } from './CardTitle';
import CardStyles from './styles/Cards';
import PeopleProgressBar from './PeopleProgressBar';

export function VolunteerCard(props) {
  return (
    <View style={CardStyles.card}>
      <CardTitle
        title={props.title}
        location={props.location}
        date={props.date} />

      <View style={CardStyles.container}>
        <Text>{props.points} pts.</Text>
        <View style={CardStyles.progressbar}>
          <PeopleProgressBar
            percentage="69" />
        </View>
        <Text style={CardStyles.action}>VOLUNTEER</Text>
      </View>
    </View>
  );
}
