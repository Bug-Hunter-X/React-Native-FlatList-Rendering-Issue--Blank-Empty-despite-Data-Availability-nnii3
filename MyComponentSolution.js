```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

const MyComponentSolution = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate an asynchronous data fetch (replace with your actual data fetching logic)
    setTimeout(() => {
      setData(DATA);
    }, 500); // Simulate a delay
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
      {data.length === 0 ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
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
export default MyComponentSolution;
```