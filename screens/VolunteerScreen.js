import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  ScrollView
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { VolunteerCard } from '../components/VolunteerCard';
import { Header } from '../components/Header';

import ScreenLayout from '../constants/Layout';

const volunteersFound = '20';
const volunteersNeeded = '20';

const PROJECTS = [
  {
    id: '1',
    title: 'PROJECT TITLE ONE',
    location: 'STANLEY PERKS',
    date: 'September 14, 2019',
    volunteersFound: 10,
    volunteersNeeded: 20,
    points: '740',
  },
  {
    id: '2',
    title: 'PROJECT TITLE TWO',
    location: 'QE PARK',
    date: 'September 14, 2019',
    volunteersFound: 24,
    volunteersNeeded: 32,
    points: '350',
  },
  {
    id: '3',
    title: 'PROJECT TITLE THREE',
    location: 'MY BACKYARD',
    date: 'September 14, 2019',
    volunteersFound: 10,
    volunteersNeeded: 13,
    points: '500',
  },
  {
    id: '350',
    title: 'PROJECT TITLE ONE',
    location: 'STANLEY PERKS',
    date: 'September 14, 2019',
    volunteersFound: 15,
    volunteersNeeded: 20,
    points: '740',
  },
  {
    id: '5',
    title: 'PROJECT TITLE TWO',
    location: 'QE PARK',
    date: 'September 14, 2019',
    volunteersFound: 8,
    volunteersNeeded: 10,
    points: '350',
  },
  {
    id: '6',
    title: 'PROJECT TITLE THREE',
    location: 'MY BACKYARD',
    date: 'September 14, 2019',
    volunteersFound: 4,
    volunteersNeeded: 10,
    points: '500',
  },
  {
    id: '7',
    title: 'PROJECT TITLE ONE',
    location: 'STANLEY PERKS',
    date: 'September 14, 2019',
    volunteersFound: 10,
    volunteersNeeded: 20,
    points: '740',
  },
  {
    id: '8',
    title: 'PROJECT TITLE TWO',
    location: 'QE PARK',
    date: 'September 14, 2019',
    volunteersFound: 10,
    volunteersNeeded: 20,
    points: '350',
  },
  {
    id: '9',
    title: 'PROJECT TITLE THREE',
    location: 'MY BACKYARD',
    date: 'September 14, 2019',
    volunteersFound: 10,
    volunteersNeeded: 20,
    points: '500',
  },
  {
    id: '10',
    title: 'PROJECT TITLE ONE',
    location: 'STANLEY PERKS',
    date: 'September 14, 2019',
    volunteersFound: 10,
    volunteersNeeded: 20,
    points: '740',
  },
  {
    id: '11',
    title: 'PROJECT TITLE TWO',
    location: 'QE PARK',
    date: 'September 14, 2019',
    volunteersFound: 10,
    volunteersNeeded: 20,
    points: '350',
  },
  {
    id: '12',
    title: 'PROJECT TITLE THREE',
    location: 'MY BACKYARD',
    date: 'September 14, 2019',
    volunteersFound: 10,
    volunteersNeeded: 20,
    points: '500',
  },
  {
    id: '13',
    title: 'PROJECT TITLE ONE',
    location: 'STANLEY PERKS',
    date: 'September 14, 2019',
    volunteersFound: 10,
    volunteersNeeded: 20,
    points: '740',
  },
  {
    id: '14',
    title: 'PROJECT TITLE TWO',
    location: 'QE PARK',
    date: 'September 14, 2019',
    volunteersFound: 10,
    volunteersNeeded: 20,
    points: '350',
  },
  {
    id: '15',
    title: 'PROJECT TITLE THREE',
    location: 'MY BACKYARD',
    date: 'September 14, 2019',
    volunteersFound: 10,
    volunteersNeeded: 20,
    points: '500',
  },
  {
    id: '16',
    title: 'PROJECT TITLE ONE',
    location: 'STANLEY PERKS',
    date: 'September 14, 2019',
    volunteersFound: 10,
    volunteersNeeded: 20,
    points: '740',
  },
  {
    id: '17',
    title: 'PROJECT TITLE TWO',
    location: 'QE PARK',
    date: 'September 14, 2019',
    volunteersFound: 10,
    volunteersNeeded: 20,
    points: '350',
  },
  {
    id: '18',
    title: 'PROJECT TITLE THREE',
    location: 'MY BACKYARD',
    date: 'September 14, 2019',
    volunteersFound: 10,
    volunteersNeeded: 20,
    points: '500',
  },
];

export default function VolunteerScreen(props) {
  return (
    <View>
      <Header
        children={true}
        regularText={"Projects to "}
        boldText={"Volunteer"}/>
      <FlatList
        data={PROJECTS}
        renderItem={({ item }) => (
          <VolunteerCard
            title={item.title}
            location={item.location}
            date={item.date}
            volunteersFound={item.volunteersFound}
            volunteersNeeded={item.volunteersNeeded}
            points={item.points}
            navigation={props.navigation} />}
          keyExtractor={item => item.id} />
    </ScrollView>
  );
}

VolunteerScreen.navigationOptions = {
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
