import React from 'react';
import { StyleSheet, View } from 'react-native';
import Banner from './app/components/Banner';
import ToDoList from './app/components/TodoList';

const App = () => (
  <View style={styles.container}>
    <Banner />
    <ToDoList />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    margin: 5
  }
});

export default App;
