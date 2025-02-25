/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Exercise3 = () => {
  return (
    <View>
      {/* welcome */}
      <View>
        <Text style={styles.welcome}>Welcome</Text>
      </View>

      <View>
        <Text style={styles.username}>Username</Text>
        <TextInput
          style={styles.inputName}
          placeholder="Masukan Username anda"
        />
      </View>

      <View style={styles.border2}>
        <Text style={styles.username}>Password</Text>
        <TextInput
          style={styles.inputPassword}
          placeholder="Masukan Password anda"
        />
      </View>

      <View>
        <TouchableOpacity style={styles.button} activeOpacity={0.5}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Exercise3;

const styles = StyleSheet.create({
  welcome: {
    fontWeight: 'bold',
    fontSize: 45,
    color: 'black',
    marginTop: 7,
    marginBottom: 30,
    marginLeft: 16,
  },
  username: {
    fontSize: 17,
    marginLeft: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  inputName: {
    borderWidth: 1,
    padding: 6,
    borderRadius: 6,
    borderColor: 'grey',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  border2: {
    marginTop: 27,
  },
  inputPassword: {
    borderWidth: 1,
    padding: 6,
    borderRadius: 6,
    borderColor: 'grey',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  button: {
    padding: 10,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'orange',
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
