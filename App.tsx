/* eslint-disable react/react-in-jsx-scope */
// 1. import core/ini component
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

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

      <View style={styles1.container1}>
        <Text style={styles1.title1}>Core Components in React Native</Text>
      </View>

      <View>
        <Text style={styles2.subTitle}>Image from local directory</Text>
        <Image style={styles2.Img1} source={require('./assets/photo1.jpg')} />

        <Text style={styles2.subTitle}>Image from url</Text>
        <Image
          style={styles2.Img1}
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png',
          }}
        />

        <Text style={styles2.subTitle}>Image from Based64</Text>
        <Image
          style={styles2.Img1}
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
});

const styles1 = StyleSheet.create({
  container1: {
    backgroundColor: 'yellow',
    borderColor: 'red', //warna border
    padding: 10,
    margin: 15,
    borderWidth: 5, //jarak margin dan pading
  },
  title1: {
    color: '#000', //color font
    fontWeight: '500', //bold
    textAlign: 'center',
    fontSize: 20,
  },
});

const styles2 = StyleSheet.create({
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  Img1: {
    width: 300,
    height: 300,
    justifyContent: 'center',
  },
});
