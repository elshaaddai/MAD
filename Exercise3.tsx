/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Input from './components/input/index';
import Button from './components/button/index';
import Title from './components/title/index';

const Exercise3 = () => {
  return (
    <View>
      <Title label="Welcome" />
      <Input label="Username" placeholder="Masukkan Username anda" />
      <Input label="Password" placeholder="Masukkan Password anda" />
      <Button label="Sign In" color="red" />
      <Button label="Sign In" color="blue" />
      <Button label="Sign In" color="black" />
    </View>
  );
};

export default Exercise3;
