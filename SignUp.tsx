/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React from 'react';
import Input from './components/input';
import Button from './components/button';
import Title from './components/title';

const SignUp = () => {
  return (
    <View>
      <Title label="Welcome" />
      <Input label="Username" placeholder="Masukkan Username anda" />
      <Input label="Password" placeholder="Masukkan Password anda" />
      <Button label="Sign In" color="orange" />
      <Button label="Sign In Google" color="red" />
      <Button label="Sign In Facebook" color="blue" />
      <Button label="Sign In Apple" color="black" />
    </View>
  );
};

export default SignUp;
