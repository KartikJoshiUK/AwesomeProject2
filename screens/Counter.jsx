import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Counter(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter</Text>
      <Text style={styles.text}>{props.route.params.number}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
  },
});
