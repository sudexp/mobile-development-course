import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MovieListScreen from './src/screens/MovieListScreen';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';

const MainNavigator = createStackNavigator({
  MovieList: {
    screen: MovieListScreen,
    navigationOptions: () => ({
      title: 'Movie List',
    }),
  },
  MovieDetails: {
    screen: MovieDetailsScreen,
    navigationOptions: () => ({
      title: 'Movie Details',
    }),
  },
});

const AppContainer = createAppContainer(MainNavigator);

const App = () => <AppContainer />;

export default App;
