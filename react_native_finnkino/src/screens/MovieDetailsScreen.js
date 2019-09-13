import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {parseString} from 'react-native-xml2js';

const MovieDetailScreen = ({navigation}) => {
  const [synopsis, setSynopsis] = useState('');

  useEffect(() => {
    loadSynopsis();
  }, [loadSynopsis]);

  const loadSynopsis = async () => {
    const show = navigation.getParam('show', null);
    //console.log(show.EventID[0]);

    const url = `https://www.finnkino.fi/xml/Events/?eventId=${
      show.EventID[0]
    }`;

    try {
      const response = await fetch(url);
      const data = await response.text();

      parseString(data, (err, result) => {
        setSynopsis(result.Events.Event[0].ShortSynopsis);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const show = navigation.getParam('show', null);
  const imageurl = show.Images[0].EventSmallImageLandscape[0];

  return (
    <View style={styles.container}>
      <Image source={{uri: imageurl}} style={styles.image} />
      <Text>{show.Title}</Text>
      <Text>Length: {show.LengthInMinutes} mins</Text>
      <Text>Theatre: {show.TheatreAndAuditorium}</Text>
      <Text>PresentationMethod: {show.PresentationMethod}</Text>
      <Text>Rating: {show.Rating}</Text>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Genres: {show.Genres}</Text>
      </View>
      <Text>Synopsis: {synopsis}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {margin: 10},
  image: {aspectRatio: 670 / 250},
  wrapper: {flexDirection: 'row'},
  text: {flexWrap: 'wrap'},
});

export default MovieDetailScreen;
