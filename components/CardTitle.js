import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export function CardTitle(props) {
  return (
    <View>
      <Text style={styles.location}>{props.location}</Text>
      <View style={{
        flexDirection: 'row',
      }}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  location: {
  },
  title: {
    flex: 1,
    textAlign: 'left',
  },
  date: {
    flex: 1,
    textAlign: 'right',
  }
});
