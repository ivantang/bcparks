import React from 'react';
import { View, StyleSheet } from 'react-native';

import { PersonIcon } from './PersonIcon';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
  },
  personIconStyle: {
    flexDirection: 'row'
  }
});

const numberOfPeople = 5;

const percentageToNumber = percentage => {
  let number = 0;
  number = Math.round(percentage / 20);

  return number;
};

const peopleIconBarObjects = numberOfBlack => {
  let arr = [];
  const numberOfWhite = numberOfPeople - numberOfBlack;
  for (let i = 0; i < numberOfBlack; i++) {
    arr.push('black');
  }
  for (let i = 0; i < numberOfWhite; i++) {
    arr.push('white');
  }
  return arr;
}

export default function PeopleProgressBar(props) {
  const { percentage } = props;

  return (
    <View style={styles.container}>
      {peopleIconBarObjects(percentageToNumber(percentage)).map((item, id) => (
        <PersonIcon key={id} personType={item} size={props.size} style={styles.personIconStyle} />
      ))}
    </View>
  );
}
