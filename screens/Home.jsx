import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decremented, incremented} from '../store/reducers/counter';

export default function Home(props) {
  const [number, setNumber] = useState(0);
  const counter = useSelector(State => State.counter);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <View style={styles.container}>
        <Text style={styles.number}>{counter.value}</Text>
        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => dispatch(decremented())}>
            <Text style={styles.buttonText}>Decrease</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              props.navigation.navigate('Counter', {number: counter.value})
            }>
            <Text style={styles.buttonText}>GO to Counter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => dispatch(incremented())}>
            <Text style={styles.buttonText}>Increase</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'black',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 60,
  },
  buttonText: {
    color: 'white',
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: 'blue',
  },
  innerContainer: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
