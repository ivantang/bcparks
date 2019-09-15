import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { CardTitle } from './CardTitle';
import CardStyles from './styles/Cards';
import PeopleProgressBar from './PeopleProgressBar';

function calculatePercentage(found, needed) {
  return found && needed ? found/needed * 100 : "0";
}

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

export function VolunteerCard(props) {
  return (
    <TouchableOpacity onPress={() => {
      props.navigation.navigate('VolunteerDetails');
    }}>
      <View style={CardStyles.card}>
        <CardTitle
          title={props.title}
          location={props.location}
          points={props.points} />

        <View style={CardStyles.container}>
          <View style={CardStyles.progressbar}>
            <PeopleProgressBar
              percentage={calculatePercentage(props.volunteersFound, props.volunteersNeeded)} />
          </View>
          <Text style={CardStyles.progress}><B>{props.volunteersFound}</B> / {props.volunteersNeeded} Volunteers</Text>
        </View>

        <View style={CardStyles.date}>
          <Text style={CardStyles.datetext}>{props.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
