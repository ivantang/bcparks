import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CardTitle } from './CardTitle';

export function VolunteerCard(props) {
  return (
    <View>
      <CardTitle
        title={props.title}
        location={props.location} />

      <View>
        <Text>{props.points}</Text>
        <Text>VOLUNTEER</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
