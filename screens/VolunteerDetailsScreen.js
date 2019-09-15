import React from 'react';
import { Text, View } from 'react-native';

import CardStyles from '../components/styles/Cards';
import DetailStyles from '../components/styles/Details'

import { ProjectTitle } from '../components/ProjectTitle';
import PeopleProgressBar from '../components/PeopleProgressBar';
import ActionButton from '../components/ActionButton';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

export default function VolunteerDetailsScreen(props) {
  const vFound = props.navigation.getParam('volunteersFound', 1);
  const vNeeded = props.navigation.getParam('volunteersNeeded', 1);

  return (
    <View style={DetailStyles.container}>
      <ProjectTitle
        title={props.navigation.getParam('title', 'REFRESH PAGE')}
        location={props.navigation.getParam('location', 'ERROR')} />

        <View>
          <Text>DATE</Text>
          <Text>{props.navigation.getParam('date', 'Unknown')}</Text>

          <Text>DESCRIPTION</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales est nibh, ac tristique nulla eleifend vitae. Aliquam arcu quam, pharetra ac ipsum non, rutrum.</Text>
        </View>

        <View style={CardStyles.progressbar}>
          <PeopleProgressBar
            percentage={vFound/vNeeded * 100}
            size="large"/>
        </View>
        <Text style={CardStyles.progress}><B>{vFound}</B> / {vNeeded} Volunteers</Text>

        <ActionButton
          action="Volunteer"
          color="#A45EC5"/>
    </View>
  );
}
