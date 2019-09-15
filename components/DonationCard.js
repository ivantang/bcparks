import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { CardTitle } from './CardTitle';
import CardStyles from './styles/Cards';

function calculatePercentage(funded, needed) {
  return funded && needed ? funded/needed : 0;
}

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;

export function DonationCard(props) {
  return (
    <TouchableOpacity onPress={() => {
      props.navigation.navigate('DonationDetails', props);
    }}>
      <View style={CardStyles.card}>
        <CardTitle
          title={props.title}
          location={props.location} />

        <View style={CardStyles.container}>
          <ProgressBar
            progress={calculatePercentage(props.cashFunded, props.cashNeeded)}
            color={'#66B13A'} />
          <Text style={CardStyles.progress}><B>${props.cashFunded}</B> / ${props.cashNeeded} </Text>
          <Text style={CardStyles.funded}>{Number(calculatePercentage(props.cashFunded, props.cashNeeded) * 100).toFixed(0)}% Funded</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
