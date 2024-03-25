import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function TabHeaderScreen(): React.ReactNode {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!!!</Text>
      <Link href="/AboutPage" style={styles.text}>
        Read more about this app...
      </Link>
      {/* <Link href="/Login">login</Link>
      <Link href="/Signup">signup</Link> */}
      <View style={{ flexDirection: 'row', gap: 20 }}>
        <TextInput
          placeholder="Search"
          autoCorrect
          placeholderTextColor="#9E9E9E"
          style={styles.input}
        />
        <TouchableOpacity style={{ justifyContent: 'center' }}>
          <FontAwesome name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: '100%',
    // backgroundColor: '#7B68EE',
    backgroundColor: '#06C149',
    alignItems: 'flex-start',
    padding: 20,
    marginBottom: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    marginBottom: 17,
  },
  input: {
    paddingLeft: 15,
    width: 300,
    height: 40,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
