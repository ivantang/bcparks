import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { VolunteerCard } from '../components/VolunteerCard';
import { DonationCard } from '../components/DonationCard';
import UserExperienceBadge from '../components/UserExperienceBadge';

const data = {
  user: {
    id: 123,
    Fname: 'Bobby',
    Lname: 'Tree',
    points: 301
  }
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <VolunteerCard
        title="SOMETHING"
        location="SOMEWHERE"
        points={data.user.points}
        date="November 2, 2019" />

      <DonationCard
        title="SOMETHING"
        location="SOMEWHERE"
        points={data.user.points} />

      <UserExperienceBadge points={data.user.points} />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
});
