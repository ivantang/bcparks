import React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import ActionButton from '../components/ActionButton';

import HelpOutIcon from '../assets/images/Help.png';
import ReportIssueIcon from '../assets/images/Issue.png';

const styles = StyleSheet.create({
  actionButtonStyle: {
    width: 300,
    marginTop: 50,
  },
})

export default function HelpOutScreen() {
  return (
    <View style={{ alignItems: 'center', }}>
      <View style={styles.actionButtonStyle}>
        <ActionButton action="Help Out" imageSource={HelpOutIcon} color="#3EC1F0" />
      </View>
      <View style={styles.actionButtonStyle}>
        <ActionButton
          action="Report an Issue"
          imageSource={ReportIssueIcon}
          color="#A7C62E"
          textColor="white"
        />
      </View>
    </View>
  );
}
