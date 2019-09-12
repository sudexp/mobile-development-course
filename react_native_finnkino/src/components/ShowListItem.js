import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ShowsListItem = ({show}) => {
  const imageurl = show.Images[0].EventSmallImagePortrait[0];
  return (
    <View style={styles.showItem}>
      <View style={styles.showItemImage}>
        <Image source={{uri: imageurl}} style={styles.image} />
      </View>
      <View style={styles.showItemTexts}>
        <Text style={styles.showItemTitle}>{show.Title}</Text>
        <Text style={styles.showItemText}>
          Length: {show.LengthInMinutes} mins
        </Text>
        <Text style={styles.showItemText}>
          Theatre: {show.TheatreAndAuditorium}
        </Text>
        <Text style={styles.showItemText}>
          PresentationMethod: {show.PresentationMethod}
        </Text>
        <Text style={styles.showItemText}>Rating: {show.Rating}</Text>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Genres: {show.Genres}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  showItem: {
    margin: 5,
    flex: 1,
    flexDirection: 'row',
  },
  showItemTitle: {
    fontWeight: 'bold',
  },
  showItemImage: {
    marginRight: 5,
  },
  image: {width: 99, height: 146},
  wrapper: {flexDirection: 'row'},
  text: {flex: 1, flexWrap: 'wrap'},
});

export default ShowsListItem;
