import React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Feed from './feed';
import ChampionScreen from './champion';

const FeedStack = createStackNavigator({
  Feed: Feed,
  Champion: ChampionScreen
});

const TabNavigator = createBottomTabNavigator({
  FeedScreen: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="home" size={24} color={tintColor} />
      )
    }
  }
});

const SwitchNavigator = createSwitchNavigator(
  {
    App: TabNavigator
  },
  {
    initialRouteName: 'App'
  }
);

export default createAppContainer(SwitchNavigator);
