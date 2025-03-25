/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

// onPress membuat interaksi di button
const Button = ({label, color = 'blue', onPress}) => {
  return (
    <View>
      <View>
        <TouchableOpacity
          style={styles.button(color)}
          activeOpacity={0.5}
          onPress={onPress}>
          <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    padding: 10,
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: color,
    borderRadius: 6,
  }),
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
