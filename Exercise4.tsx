/* eslint-disable prettier/prettier */
import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>

      <View style={styles.whiteContainer}>
        <Image
          style={styles.logo}
          source={require('./assets/logo-with-motto-3.png')}
        />
      </View>

      <View style={styles.blueContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingLeft: 10,
    gap: 25,
    width: '100%',
    height: 100,
  },
  whiteContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    backgroundColor: 'white',
  },
  blueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'blue',
    width: '100%',
    height: 100,
  },
  blackBox: {
    width: 70,
    height: 70,
    backgroundColor: 'black',
  },
  yellowBox: {
    width: 70,
    height: 70,
    backgroundColor: 'yellow',
  },
  logo: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});
