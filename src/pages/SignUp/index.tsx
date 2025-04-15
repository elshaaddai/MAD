/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/moleculs/Header';
import Gap from '../../components/atom/Gap';
import AddPhoto from '../../components/moleculs/AddPhoto';
import TextInput from '../../components/moleculs/TextInput';
import Button from '../../components/atom/Button';

const SignUp = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.header}>
        <Header title="Sign Up" />
      </View>
      <View style={styles.contentContainer}>
        <Gap height={26} />
        <AddPhoto label={'Add Photo'} />
        <Gap height={16} />
        <TextInput label={'Full Name'} placeholder={'Type your full name'} />
        <Gap height={16} />
        <TextInput
          label={'Email Address'}
          placeholder={'Type your email address'}
        />
        <Gap height={16} />
        <TextInput label={'Password'} placeholder={'Type your password'} />
        <Gap height={24} />
        <Button label={'Continue'} TextColor="#020202" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
