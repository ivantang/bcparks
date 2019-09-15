import React from 'react';
import { Text, View , StyleSheet, ScrollView} from 'react-native';
import ActionButton from '../components/ActionButton';
import { LandingHeader } from '../components/Header';

import HelpOutIcon from '../assets/images/Help.png';
import ReportIssueIcon from '../assets/images/Issue.png';
import HelpOutScreen from './HelpOutScreen';

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

export default function LandingScreen(props) {
  return (
    <ScrollView>
      <LandingHeader />
      <View style={styles.actionButtons}>
        <View style={styles.actionButtonStyle}>
          <ActionButton
            action="Help Out"
            imageSource={HelpOutIcon}
            color="#3EC1F0"
            textColor="white"
            navigateTo='Help'
            navigation={props.navigation}
          />
        </View>
        <View style={styles.actionButtonStyle}>
          <ActionButton
            action="Report an Issue"
            imageSource={ReportIssueIcon}
            color="#A7C62E"
            textColor="white"
            navigation={props.navigation}
            navigateTo="ReportIssueScreen"
          />
        </View>
      </View>
    </ScrollView>
  );
}
