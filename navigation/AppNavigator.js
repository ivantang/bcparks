import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import VolunteerScreen from '../screens/VolunteerScreen';
import DonationScreen from '../screens/DonationScreen';
import VolunteerDetailsScreen from '../screens/VolunteerDetailsScreen';
import DonationDetailsScreen from '../screens/DonationDetailsScreen';
import DonationComplete from '../screens/DonationComplete';
import VolunteerComplete from '../screens/VolunteerComplete';
import HelpOutScreen from '../screens/HelpOutScreen';
import LandingScreen from '../screens/LandingScreen';
import ReportIssueScreen from '../screens/ReportIssueScreen';

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Login: LoginScreen,
      Home: HomeScreen,
      VolunteerList: VolunteerScreen,
      DonationList: DonationScreen,
      VolunteerDetails: VolunteerDetailsScreen,
      DonationDetails: DonationDetailsScreen,
      DonationComplete,
      VolunteerComplete,
      Help: HelpOutScreen,
      LandingScreen,
      ReportIssueScreen,
    },
    {
      initialRouteName: 'Login',
    },
  ),
);
