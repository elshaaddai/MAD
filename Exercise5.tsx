/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React, {useState} from 'react';
import Input from './components/input';
import Button from './components/button';
import Title from './components/title';

const SignUp = () => {
  // menggunakan useState untuk merender terus
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // even sama dengan fungsi
  const onSubmit = () => {
    console.log('Test');
    console.log(username, password);
  };
  return (
    <View>
      <Title label="Welcome" />
      {/* onChangeText untuk apa saja yang di ketik akan */}
      <Input
        label="Username"
        placeholder="Masukkan Username anda"
        onChangeText={e => setUsername(e)}
      />
      <Input
        label="Password"
        placeholder="Masukkan Password anda"
        onChangeText={e => setPassword(e)}
        secureTextEntry={true}
      />
      <Button
        label="Sign In"
        color="orange"
        // string even
        onPress={onSubmit}
      />

      <Button label="Sign In Google" color="red" />
      <Button label="Sign In Facebook" color="blue" />
      <Button label="Sign In Apple" color="black" />
    </View>
  );
};

export default SignUp;
