import React from 'react';
import { Text, View } from 'react-native';

import Champion from '../components/Champion';
import Loading from '../components/Loading';


const ChampionScreen = props => {
//   const id = props.navigation.getParam('id');

  return <Champion note={props.Champion} />;
};

export default ChampionScreen;
