import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

import createdBy from '../assets/images/createdBy.png';

import CardStyles from '../components/styles/Cards';
import DetailStyles from '../components/styles/Details'

import { CardTitle } from '../components/CardTitle';
import PeopleProgressBar from '../components/PeopleProgressBar';
import ActionButton from '../components/ActionButton';
import { DonateDetailHeader } from '../components/Header';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

function calculatePercentage(found, needed) {
  return found && needed ? found/needed * 100 : "0";
}

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

export default function DonationDetailsScreen(props) {
  const vFound = props.navigation.getParam('cashFunded', 1);
  const vNeeded = props.navigation.getParam('cashNeeded', 1);

  return (
    <ScrollView>
      <DonateDetailHeader />

      <View style={DetailStyles.container}>
        <CardTitle
          title={props.navigation.getParam('title', 'REFRESH PAGE')}
          location={props.navigation.getParam('location', 'ERROR')}
          points={props.navigation.getParam('points', undefined)} />

          <View style={DetailStyles.section}>
            <Text style={DetailStyles.headers}>DESCRIPTION</Text>
            <Text style={DetailStyles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales est nibh, ac tristique nulla eleifend vitae. Aliquam arcu quam, pharetra ac ipsum non, rutrum.</Text>
          </View>

          <View style={CardStyles.progressbar}>
            <AnimatedCircularProgress
              size={120}
              width={15}
              fill={calculatePercentage(vFound,vNeeded)}
              tintColor="#66B13A"
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="#F8F8F8" />
          </View>
          <Text style={CardStyles.progress}><B>${vFound}</B> / ${vNeeded} Funded</Text>

          <ActionButton
            action="Donate"
            color="#66B13A"
            textColor="#FFFFFF"
            points={100}
            navigateTo="DonationComplete"
            navigation={props.navigation}/>

          <Image
            source={createdBy}
            style={CardStyles.createdby} />
      </View>
    </ScrollView>
  );
}
