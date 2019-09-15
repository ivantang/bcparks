import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  FlatList,
  StyleSheet
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { DonationCard } from '../components/DonationCard';

import ScreenLayout from '../constants/Layout';

const cashFunded = 100;
const cashNeeded = 300;

const PROJECTS = [
  {
    id: "1",
    title:"PROJECT TITLE ONE",
    location:"STANLEY PERKS",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "4,000,000"
  },
  {
    id: "2",
    title: "PROJECT TITLE TWO",
    location: "QE PARK",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "4",
  },
  {
    id: "3",
    title: "PROJECT TITLE THREE",
    location: "MY BACKYARD",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "999,999,999",
  },
  {
    id: "4",
    title: "PROJECT TITLE ONE",
    location: "STANLEY PERKS",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "4,000,000"
  },
  {
    id: "5",
    title: "PROJECT TITLE TWO",
    location: "QE PARK",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "4",
  },
  {
    id: "6",
    title: "PROJECT TITLE THREE",
    location: "MY BACKYARD",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "999,999,999",
  },
  {
    id: "7",
    title: "PROJECT TITLE ONE",
    location: "STANLEY PERKS",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "4,000,000"
  },
  {
    id: "8",
    title: "PROJECT TITLE TWO",
    location: "QE PARK",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "4",
  },
  {
    id: "9",
    title: "PROJECT TITLE THREE",
    location: "MY BACKYARD",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "999,999,999",
  },
  {
    id: "10",
    title: "PROJECT TITLE ONE",
    location: "STANLEY PERKS",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "4,000,000"
  },
  {
    id: "11",
    title: "PROJECT TITLE TWO",
    location: "QE PARK",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "4",
  },
  {
    id: "12",
    title: "PROJECT TITLE THREE",
    location: "MY BACKYARD",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "999,999,999",
  },
  {
    id: "13",
    title: "PROJECT TITLE ONE",
    location: "STANLEY PERKS",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "4,000,000"
  },
  {
    id: "14",
    title: "PROJECT TITLE TWO",
    location: "QE PARK",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "4",
  },
  {
    id: "15",
    title: "PROJECT TITLE THREE",
    location: "MY BACKYARD",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "999,999,999",
  },
  {
    id: "16",
    title: "PROJECT TITLE ONE",
    location: "STANLEY PERKS",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "4,000,000"
  },
  {
    id: "17",
    title: "PROJECT TITLE TWO",
    location: "QE PARK",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "4",
  },
  {
    id: "18",
    title: "PROJECT TITLE THREE",
    location: "MY BACKYARD",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "999,999,999",
  }
]

export default function DonationsScreen() {
  return (
    <FlatList
      data={PROJECTS}
      renderItem={({ item }) =>
        <DonationCard
          title={item.title}
          location={item.location}
          points={item.points}
          cashFunded={item.cashFunded}
          cashNeeded={item.cashNeeded} />}
        keyExtractor={item => item.id} />
  );
}

DonationsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
});
