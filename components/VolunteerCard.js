import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CardTitle } from './CardTitle';

export function VolunteerCard(props) {
  return (
    <View>
      <CardTitle
        title={props.title}
        location={props.location} />

      <View style={styles.container}>
        <Text>{props.points}</Text>
        <Text style={styles.volunteerText}>VOLUNTEER</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  volunteerText: {
    textAlign: 'center',
  }
});
