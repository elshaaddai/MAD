/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React, {useState} from 'react';
import Button from './components/button';
import Input from './components/input';
import Title from './components/title';

const Exercise6 = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSubmit = () => {
    console.log(
      'Name:',
      name,
      '\nUser Name:',
      username,
      '\nEmail:',
      email,
      '\nAddress:',
      address,
      '\nPhone Number:',
      phoneNumber,
    );
  };
  return (
    <View>
      <Title label="Registration" />
      <Input
        label="Name"
        placeholder="Masukkan nama lengkap anda"
        onChangeText={e => setName(e)}
      />
      <Input
        label="User Name"
        placeholder="Masukkan username anda"
        onChangeText={e => setUsername(e)}
      />
      <Input
        label="Email"
        placeholder="Masukkan email anda"
        onChangeText={e => setEmail(e)}
      />
      <Input
        label="Address"
        placeholder="Masukkan alamat anda"
        keyboardType="numerik"
        onChangeText={e => setAddress(e)}
      />
      <Input
        label="Phone Number"
        placeholder="Masukkan nomor telepon anda"
        onChangeText={e => setPhoneNumber(e.replace(/[^0-9]/g, ''))}
        value={phoneNumber}
        keyboardType="numerik"
      />
      <Button label="Register" color="#8b008b" onPress={onSubmit} />
    </View>
  );
};

export default Exercise6;
