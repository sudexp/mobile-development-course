import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {parseString} from 'react-native-xml2js';
import moment from 'moment';
import ShowListItem from './ShowListItem';

const fetchShows = async setShows => {
  const currentDate = moment().format('DD.MM.YYYY');
  const url = `https://www.finnkino.fi/xml/Schedule/?area=1015&dt=${currentDate}`;

  try {
    const response = await fetch(url);
    const data = await response.text();

    parseString(data, (err, result) =>
      err ? console.log(err) : setShows(result.Schedule.Shows[0]),
    );
  } catch (err) {
    console.log(err);
  }
};

const ShowsList = ({navigation}) => {
  const [shows, setShows] = useState({});
  // console.log(shows);

  useEffect(() => {
    fetchShows(setShows);
  }, []);

  const loading = (
    <View style={styles.container}>
      <Text>Loading, please wait...</Text>
    </View>
  );

  const items =
    shows.Show &&
    shows.Show.map((show, index) => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('MovieDetails', {
            show: shows.Show[index],
          })
        }
        key={index}>
        <ShowListItem show={show} />
      </TouchableOpacity>
    ));

  return <ScrollView>{shows === {} ? loading : items}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
});

export default ShowsList;
