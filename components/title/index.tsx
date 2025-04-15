/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = ({label}) => {
  return (
    <View>
      <Text style={styles.welcome}>{label}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  welcome: {
    fontWeight: 'bold',
    fontSize: 45,
    color: 'black',
    marginTop: 7,
    marginBottom: 30,
    marginLeft: 16,
  },
});
