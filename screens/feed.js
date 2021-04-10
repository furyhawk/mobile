import React from 'react';
import { View, Text } from 'react-native';

import ChampionList from '../components/ChampionList';
import Loading from '../components/Loading';

// our dummy data
const champions = [
    { id: 0, name: 'Giant Steps' },
    { id: 1, name: 'Tomorrow Is The Question' },
    { id: 2, name: 'Tonight At Noon' },
    { id: 3, name: 'Out To Lunch' },
    { id: 4, name: 'Green Street' },
    { id: 5, name: 'In A Silent Way' },
    { id: 6, name: 'Lanquidity' },
    { id: 7, name: 'Nuff Said' },
    { id: 8, name: 'Nova' },
    { id: 9, name: 'The Awakening' }
  ];

const Feed = props => {
  return <ChampionList champions={champions} navigation={props.navigation} />;
};

Feed.navigationOptions = {
  title: 'Feed'
};

export default Feed;
