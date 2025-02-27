/* eslint-disable react/react-in-jsx-scope */
// 1. import core/ini component
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// 2. buat component
// componenet adalah function yg return jsx
const App = () => {
  // jsx
  return (
    //showsverticalscrollindicatior untuk menghapus scroll yang ada di sebelah kanan
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Basic React Native</Text>
      </View>

      {/* <View style={styles1.container1}>
        <Text style={styles1.title1}>Core Components in React Native</Text>
      </View> */}

      <TextInput style={styles.input} placeholder="Enter your email" />
      <TextInput style={styles.input} placeholder="Enter your password" />
      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.subTitle}>Image from local directory</Text>
        <Image style={styles.Img1} source={require('./assets/logofik.png')} />

        <Text style={styles.subTitle}>Image from url</Text>
        <Image
          style={styles.Img1}
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png',
          }}
        />

        <Text style={styles.subTitle}>Image from Based64</Text>
        <Image
          style={styles.Img1}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </View>
    </ScrollView>
  );
};

// 3. export component
export default App;

// 4. styling
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 3,
    padding: 20,
    margin: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  Img1: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    marginLeft: 50,
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    padding: 20,
    fontSize: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    margin: 20,
    padding: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
