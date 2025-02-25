/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Exercise2 = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.landingPage}>
          <Image
            style={styles.bg}
            source={require('./assets/bg3.jpg')}
            resizeMode="cover"
          />
          <Text style={styles.elsha}>Elshaddai Tambuwun</Text>
          <Text style={styles.subElsha}>Computer Science | Informatics</Text>
        </View>

        <View style={styles.profileContainer}>
          <Image style={styles.pic} source={require('./assets/pic1.jpg')} />

          <View style={styles.profile}>
            <View style={styles.profileSection}>
              <Text style={styles.label}>Full Name:</Text>
              <Text style={styles.text}>Elshaddai Grace Tambuwun</Text>
            </View>

            <View style={styles.profileSection}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.text}>elshatambuwun20@gmail.com</Text>
            </View>
          </View>

          <View style={styles.bio}>
            <Text style={styles.text}>
              I am a student at Klabat University, Faculty of Computer Science,
              majoring in Informatics. Currently, I am a 3rd-year, 6th-semester
              student. I am very enthusiastic about learning and want to develop
              my skills in front-end development and mobile applications. I am
              20 years old and a graduate of SMA Kristen Sonder.
            </Text>
          </View>

          <View style={styles.contactContainer}>
            <Text style={styles.Contact}>Contact Me</Text>
            <View>
              <View>
                <Text style={styles.textInput}>Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your name..."
                />
              </View>

              <View>
                <Text style={styles.textInput}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Your Email..."
                />
              </View>

              <View>
                <Text style={styles.textInput}>Subject</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Your Subject..."
                />
              </View>

              <View>
                <Text style={styles.textInput}>Message</Text>
                <TextInput style={styles.inputMessage} placeholder="Message" />
              </View>

              <TouchableOpacity style={styles.button} activeOpacity={0.5}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Exercise2;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  landingPage: {
    height: 900,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  elsha: {
    paddingBottom: 40,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    fontFamily: 'serif',
  },
  subElsha: {
    fontSize: 15,
    color: 'white',
    paddingTop: 40,
  },
  profileContainer: {
    backgroundColor: 'beige',
    alignItems: 'center',
    minHeight: 500,
    paddingTop: 50,
    paddingBottom: 50,
  },
  pic: {
    width: 300,
    height: 300,
    borderRadius: 5,
    marginBottom: 20,
  },
  profile: {
    marginTop: 90,
    alignItems: 'center',
    gap: 10,
  },
  profileSection: {
    marginBottom: 15,
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'brown',
    fontFamily: 'serif',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 5,
    color: 'black',
  },
  bio: {
    marginTop: 20,
    margin: 15,
    marginBottom: 90,
  },
  contactContainer: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  Contact: {
    fontSize: 35,
    marginBottom: 50,
    fontWeight: 'bold',
    alignItems: 'center',
    color: 'brown',
    fontFamily: 'serif',
  },
  textInput: {
    color: 'black',
    paddingRight: 60,
    fontSize: 17,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 2,
    borderColor: 'brown',
    marginBottom: 25,
    backgroundColor: 'white',
  },
  inputMessage: {
    borderWidth: 1,
    padding: 5,
    paddingBottom: 90,
    paddingRight: 270,
    borderRadius: 2,
    borderColor: 'brown',
    marginBottom: 25,
    backgroundColor: 'white',
  },
  button: {
    padding: 10,
    backgroundColor: 'brown',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
