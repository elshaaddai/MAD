/* eslint-disable prettier/prettier */

// rnfes = cara cepat
import {StyleSheet, View} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redContainer} />
      <View style={styles.greenContainer} />
      <View style={styles.blueContainer} />
    </View>
  );
};

export default Flexbox;
// flex
// flexDirection lebih di taru ke parent component. main axis istilah dari flexDirection
// flexdirection mengatur komponen urutannya dari mana
// layoutdirection mengatur posisi komponen di main exis nya atau cross exis
const styles = StyleSheet.create({
  container: {
    flex: 1, //parent flex
    backgroundColor: 'pink',
    // flexDirection: 'row-reverse',
    flexDirection: 'row',
    justifyContent: 'space-evenly', //untuk main axis. ada flex-start,end,space-between,evenly,around
    alignItems: 'center', // cross axis. secara horizontal. flex-start,center,flex-end
  },
  redContainer: {
    backgroundColor: 'red',
    // flex: 1,

    height: 100,
    width: 100,
  },
  greenContainer: {
    backgroundColor: 'green',
    // flex: 2,

    height: 100,
    width: 100,
  },
  blueContainer: {
    backgroundColor: 'blue',
    // flex: 1,

    height: 100,
    width: 100,
  },
});
