/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Circle} from 'react-native-svg';

const AddPhotos = ({label}) => {
  return (
    <View style={styles.container}>
      <View style={styles.photoWrapper}>
        <View style={styles.circle}>
          <Text style={styles.text}>{label}</Text>
        </View>
      </View>
    </View>
  );
};

export default AddPhotos;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 26,
  },
  photoWrapper: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#8D92A3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    width: 40,
    height: 42,
    fontSize: 14,
    fontFamily: 'Poppins',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
