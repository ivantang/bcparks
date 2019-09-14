import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export function CardTitle(props) {
  return (
    <View>
      <Text style={styles.location}>{props.location}</Text>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  location: {
  },
  title: {
  },
});
