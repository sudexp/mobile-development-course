import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {parseString} from 'react-native-xml2js';
import moment from 'moment';
import ShowListItem from './ShowListItem';

const ShowsList = () => {
  const [shows, setShows] = useState({});
  // console.log(shows);

  useEffect(() => {
    fetchShows();
  }, [fetchShows]);

  const fetchShows = async () => {
    const currentDate = moment().format('DD.MM.YYYY');
    const url = `https://www.finnkino.fi/xml/Schedule/?area=1015&dt=${currentDate}`;

    try {
      const response = await fetch(url);
      const data = await response.text();

      parseString(data, (err, result) => {
        setShows(result.Schedule.Shows[0]);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const loading = (
    <View style={styles.container}>
      <Text>Loading, please wait...</Text>
    </View>
  );

  const items =
    shows.Show &&
    shows.Show.map((show, index) => <ShowListItem show={show} key={index} />);

  return <ScrollView>{shows === {} ? loading : items}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
});

export default ShowsList;
