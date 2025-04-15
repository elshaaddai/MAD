/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({label, color = '#02CF8E', TextColor = '#020202'}) => {
  return (
    <TouchableOpacity style={styles.button(color)} activeOpacity={0.5}>
      <Text style={styles.label(TextColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    borderRadius: 8,
    paddingVertical: 12,
    justifyContent: 'center',
  }),
  label: TextColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: TextColor,
  }),
});
