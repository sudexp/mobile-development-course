import React from 'react';
import {SafeAreaView} from 'react-native';
import ShowsList from './src/components/ShowsList.js';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <ShowsList />
      </SafeAreaView>
    </>
  );
};

export default App;
