import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, ScrollView, Keyboard } from 'react-native';
import ListItem from './ListItem';

const ToDoList = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const addToDoItem = () => {
    if (text !== '') {
      setItems([...items, text]);
      setText('');
      Keyboard.dismiss();
    }
  };

  const deleteToDoItem = index => {
    items.splice(index, 1);
    setItems([...items]);
  };

  const list = items.map((item, index) => (
    <ListItem text={item} key={index} index={index} deleteToDoItem={deleteToDoItem} />
  ));

  return (
    <View>
      <View style={styles.addToDo}>
        <TextInput style={styles.addToDoTextInput} onChangeText={text => setText(text)} value={text} />
        <Button title="Add" onPress={addToDoItem} />
      </View>
      <ScrollView style={styles.list}>{list}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    margin: 5
  },
  addToDo: {
    flexDirection: 'row',
    marginBottom: 20
  },
  addToDoTextInput: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    padding: 5,
    margin: 2,
    flex: 1
  },
  list: {
    color: 'black',
    margin: 2
  }
});

export default ToDoList;
