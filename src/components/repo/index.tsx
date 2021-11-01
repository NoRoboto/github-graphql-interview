import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Repo} from '../repoList';

export default function Item({item}: {item: Repo}) {
  return (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(226,91,78)',
    margin: 20,
  },
});
