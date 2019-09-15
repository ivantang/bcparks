import React from 'react';
import { Text, View } from 'react-native';

import CardStyles from '../components/styles/Cards';

import { ProjectTitle } from '../components/ProjectTitle'

export default function VolunteerDetailsScreen(props) {
  return (
    <View>
      <ProjectTitle
        title={props.navigation.getParam('title', 'REFRESH PAGE')}
        location={props.navigation.getParam('location', 'ERROR')} />

        <Text>DATE</Text>
        <Text>{props.navigation.getParam('date', 'Unknown')}</Text>

        <Text>DESCRIPTION</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales est nibh, ac tristique nulla eleifend vitae. Aliquam arcu quam, pharetra ac ipsum non, rutrum.</Text>

    </View>
  );
}
