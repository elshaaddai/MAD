/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image} from 'react-native';

const UserCard = ({user}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: user.avatar}} style={styles.avatar} />
      <View>
        <Text style={styles.name}>
          <Text style={styles.firstName}>{user.first_name} </Text>
          {user.last_name}
        </Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
};
export default UserCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 12,
  },
  name: {
    marginLeft: 10,
    fontSize: 20,
    color: 'black',
  },
  firstName: {
    fontWeight: 'bold',
  },
  email: {
    marginLeft: 10,
    fontSize: 16,
    color: '#555',
  },
});
