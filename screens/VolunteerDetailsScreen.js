import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

import createdBy from '../assets/images/createdBy.png';

import CardStyles from '../components/styles/Cards';
import DetailStyles from '../components/styles/Details';

import { CardTitle } from '../components/CardTitle';
import PeopleProgressBar from '../components/PeopleProgressBar';
import ActionButton from '../components/ActionButton';
import { VolunteerDetailHeader } from '../components/Header';

const B = props => <Text style={{ fontWeight: 'bold', }}>{props.children}</Text>;

export default function VolunteerDetailsScreen(props) {
  const vFound = props.navigation.getParam('volunteersFound', 1);
  const vNeeded = props.navigation.getParam('volunteersNeeded', 1);

  return (
    <ScrollView>
      <VolunteerDetailHeader/>

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
            <PeopleProgressBar
              percentage={vFound/vNeeded * 100}
              size="large"/>
          </View>
          <Text style={CardStyles.progress}><B>{vFound}</B> / {vNeeded} Volunteers</Text>

          <ActionButton
            action="Volunteer"
            color="#A35EC4"
            textColor="#FFFFFF"
            points={props.navigation.getParam('points', '0')}
            navigateTo="VolunteerComplete"
            navigation={props.navigation}/>

            <Image
              source={createdBy}
              style={CardStyles.createdby} />
      </View>
    </ScrollView>
  );
}
