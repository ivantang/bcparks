import React from 'react';
import { Text, View } from 'react-native';

import CardStyles from '../components/styles/Cards';
import DetailStyles from '../components/styles/Details'

import { CardTitle } from '../components/CardTitle';
import PeopleProgressBar from '../components/PeopleProgressBar';
import ActionButton from '../components/ActionButton';
import { Header } from '../components/Header';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

export default function DonationDetailsScreen(props) {
  const vFound = props.navigation.getParam('cashFunded', 1);
  const vNeeded = props.navigation.getParam('cashNeeded', 1);

  return (
    <View>
      <Header backgroundColor="#A35EC4" />

      <View style={DetailStyles.container}>
        <CardTitle
          title={props.navigation.getParam('title', 'REFRESH PAGE')}
          location={props.navigation.getParam('location', 'ERROR')}
          points={props.navigation.getParam('points', '0')} />

          <View style={DetailStyles.section}>
            <Text style={DetailStyles.headers}>DATE</Text>
            <Text style={DetailStyles.content}>{props.navigation.getParam('date', 'Unknown')}</Text>
          </View>

          <View style={DetailStyles.section}>
            <Text style={DetailStyles.headers}>DESCRIPTION</Text>
            <Text style={DetailStyles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales est nibh, ac tristique nulla eleifend vitae. Aliquam arcu quam, pharetra ac ipsum non, rutrum.</Text>
          </View>

          <View style={CardStyles.progressbar}>
          </View>
          <Text style={CardStyles.progress}><B>{vFound}</B> / {vNeeded} Volunteers</Text>

          <ActionButton
            action="Donate"
            color="#A45EC5"
            textColor="#FFFFFF"/>
      </View>
    </View>
  );
}
