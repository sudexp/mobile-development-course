import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListItem = ({ index, text, deleteToDoItem }) => (
  <View style={styles.listItem}>
    <Text style={styles.listItemText}>* {text}</Text>
    <Text style={styles.listItemDelete} onPress={e => deleteToDoItem(index)}>
      X
    </Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    margin: 5
  },
  listItemText: {},
  listItemDelete: {
    marginStart: 10,
    color: 'red',
    fontWeight: 'bold'
  }
});

export default ListItem;
