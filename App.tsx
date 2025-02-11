// 1. import core/ini component
import {Text, View, StyleSheet} from 'react-native';

// 2. buat component
// componenet adalah function yg return jsx
const App = () => {
  // jsx
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Basic React Native</Text>
      </View>
      
      <View style={styles1.container1}>
        <Text style={styles1.title1}>Core Components in React Native</Text>
      </View>
    </View>
  )
};

// 3. export component
export default App

// 4. styling
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 3,
    padding: 20,
    margin: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  title:{
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
  },
})

const styles1 = StyleSheet.create({
  container1:{
    backgroundColor: 'yellow',
    borderColor: 'red', //warna border
    padding: 10,
    margin: 15,
    borderWidth: 5, //jarak margin dan pading
  },
  title1:{
    color: '#000', //color font
    fontWeight: '500', //bold
    textAlign: 'center',
    fontSize: 20,
  }
})