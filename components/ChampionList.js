import React from 'react';
import { FlatList, View, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

import Champion from './Champion';



// FeedView styled-component definition
const FeedView = styled.View`
  height: 100;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Separator = styled.View`
  height: 1;
  width: 100%;
  background-color: #ced0ce;
`;

const ChampionFeed = props => {
  return (
    <View>
      <FlatList
        data={props.champions}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Champion', {
                id: item.id
              })
            }
          >
            <FeedView>
              <Champion champion={item} />
            </FeedView>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ChampionFeed;
