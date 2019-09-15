import React from 'react';
import { Text, View , StyleSheet, ScrollView} from 'react-native';
import ActionButton from '../components/ActionButton';
import { HelpOutHeader } from '../components/Header';

import DonationIcon from '../assets/images/Donation.png';
import VolunteerIcon from '../assets/images/Volunteer.png';

const styles = StyleSheet.create({
  actionButtonStyle: {
    width: 300,
    marginTop: 5,
  },
  actionButtons: {
    alignItems: 'center',
    marginTop: -100,
  },
})

export default function HelpOutScreen(props) {
  return (
    <ScrollView>
      <HelpOutHeader />
      <View style={styles.actionButtons}>
        <View style={styles.actionButtonStyle}>
          <ActionButton
            action="Donate"
            imageSource={DonationIcon}
            color="#66B13A"
            textColor="white"
            navigateTo='DonationList'
            navigation={props.navigation}
          />
        </View>
        <View style={styles.actionButtonStyle}>
          <ActionButton
            action="Volunteer"
            imageSource={VolunteerIcon}
            color="#A45EC5"
            textColor="white"
            navigateTo='VolunteerList'
            navigation={props.navigation}
          />
        </View>
      </View>
    </ScrollView>
  );
}
