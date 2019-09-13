import React from 'react';
import {SafeAreaView} from 'react-native';
import ShowsList from '../components/ShowsList';

const MovieListScreen = ({navigation}) => (
  <SafeAreaView>
    <ShowsList navigation={navigation} />
  </SafeAreaView>
);

export default MovieListScreen;
