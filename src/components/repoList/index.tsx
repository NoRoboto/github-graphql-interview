import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import useGetReposByUser from '../../http/queries/getRepos';
import RepoItem from '../repo';

export type Repo = {
  name: string;
  url: string;
};

export type Item = Array<Repo>;

export default function RepoList() {
  const {data, isError, isLoading} = useGetReposByUser('noroboto');

  const repositoriesList = data?.user?.repositories?.nodes;

  if (isLoading) {
    return (
      <View style={styles.wrapper}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isError) {
    return <Text>Error</Text>;
  }

  const renderItem = ({item}: {item: Repo}) => <RepoItem item={item} />;

  return (
    <FlatList
      keyExtractor={item => item.url}
      renderItem={renderItem}
      data={repositoriesList}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
