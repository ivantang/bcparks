import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { DonationCard } from '../components/DonationCard';
import { Header } from '../components/Header';

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
    points: "700"
  },
  {
    id: "2",
    title: "PROJECT TITLE TWO",
    location: "QE PARK",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "250",
  },
  {
    id: "3",
    title: "PROJECT TITLE THREE",
    location: "MY BACKYARD",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "900",
  },
  {
    id: "4",
    title: "PROJECT TITLE ONE",
    location: "STANLEY PERKS",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "700"
  },
  {
    id: "5",
    title: "PROJECT TITLE TWO",
    location: "QE PARK",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "250",
  },
  {
    id: "6",
    title: "PROJECT TITLE THREE",
    location: "MY BACKYARD",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "900",
  },
  {
    id: "7",
    title: "PROJECT TITLE ONE",
    location: "STANLEY PERKS",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "700"
  },
  {
    id: "8",
    title: "PROJECT TITLE TWO",
    location: "QE PARK",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "250",
  },
  {
    id: "9",
    title: "PROJECT TITLE THREE",
    location: "MY BACKYARD",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "900",
  },
  {
    id: "10",
    title: "PROJECT TITLE ONE",
    location: "STANLEY PERKS",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "700"
  },
  {
    id: "11",
    title: "PROJECT TITLE TWO",
    location: "QE PARK",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "250",
  },
  {
    id: "12",
    title: "PROJECT TITLE THREE",
    location: "MY BACKYARD",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "900",
  },
  {
    id: "13",
    title: "PROJECT TITLE ONE",
    location: "STANLEY PERKS",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "700"
  },
  {
    id: "14",
    title: "PROJECT TITLE TWO",
    location: "QE PARK",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "250",
  },
  {
    id: "15",
    title: "PROJECT TITLE THREE",
    location: "MY BACKYARD",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "900",
  },
  {
    id: "16",
    title: "PROJECT TITLE ONE",
    location: "STANLEY PERKS",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "700"
  },
  {
    id: "17",
    title: "PROJECT TITLE TWO",
    location: "QE PARK",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "250",
  },
  {
    id: "18",
    title: "PROJECT TITLE THREE",
    location: "MY BACKYARD",
    cashFunded:cashFunded,
    cashNeeded:cashNeeded,
    points: "900",
  }
]

export default function DonationsScreen(props) {
  return (
    <ScrollView>
      <Header backgroundColor="#66B13A" regularText="Projects to " boldText="Donate" />
      <FlatList
        data={PROJECTS}
        renderItem={({ item }) =>
          <DonationCard
            title={item.title}
            location={item.location}
            points={item.points}
            cashFunded={item.cashFunded}
            cashNeeded={item.cashNeeded}
            navigation={props.navigation} />}
          keyExtractor={item => item.id} />
    </ScrollView>

  );
}

DonationsScreen.navigationOptions = {
  header: null,
};
