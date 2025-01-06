```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const DATA = [ 
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
];

const MyComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(DATA); 
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.title}</Text>
      </View> 
    );
  };

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
export default MyComponent; 
```