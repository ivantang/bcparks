import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export function CardTitle(props) {
  return (
    <View>
      <Text style="title">{props.title}</Text>
      <Text style="location">{props.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
