import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Banner = () => (
  <View style={styles.banner}>
    <Text style={styles.bannerText}>ToDo Example with React Native and Expo</Text>
  </View>
);

const styles = StyleSheet.create({
  banner: {
    backgroundColor: 'cadetblue',
    justifyContent: 'center',
    marginBottom: 20
  },
  bannerText: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20
  }
});

export default Banner;
