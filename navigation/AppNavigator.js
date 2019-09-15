import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import DonationDetailsScreen from '../screens/DonationDetailsScreen';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    DonateDetails: DonationDetailsScreen,
  },{
    initialRouteName: "Main"
  })
);
