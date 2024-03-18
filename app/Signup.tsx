import { Feather, Fontisto, FontAwesome } from '@expo/vector-icons';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function TabThreeScreen(): React.ReactNode {
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/b6/f2/97/b6f297465d0e25efb58d72bceab1e95d.jpg' }}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.header}>Register</Text>
        <Text style={{ marginBottom: 20, color: 'white' }}>Create your new account</Text>
        <View style={styles.inputCol}>
          <Feather name="user" size={24} color="#9E9E9E" />
          <TextInput
            placeholder="Full name"
            autoCorrect
            placeholderTextColor="#9E9E9E"
            style={styles.input}
          />
        </View>
        <View style={styles.inputCol}>
          <Fontisto name="email" size={24} color="#9E9E9E" />
          <TextInput
            placeholder="Email"
            autoCorrect
            placeholderTextColor="#9E9E9E"
            style={styles.input}
          />
        </View>
        <View style={styles.inputCol}>
          <Feather name="lock" size={24} color="#9E9E9E" />
          <TextInput
            placeholder="Password"
            autoCorrect
            placeholderTextColor="#9E9E9E"
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.lineCon}>
          <View style={styles.line} />
          <Text style={{ color: 'white' }}>or continue with</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.cuba}>
          <FontAwesome name="google" size={40} color="#06C149" style={styles.icon} />
        </View>
        <View style={{ flexDirection: 'row', gap: 5, marginTop: 20 }}>
          <Text style={{ color: 'white' }}>Already have an account?</Text>
          <Text style={{ color: '#06C149', fontWeight: '600' }}>Log in.</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#06C149',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(24, 26, 32, 0.9)',
    backgroundColor: '#181A20',
  },
  input: {
    paddingLeft: 15,
    width: 300,
    color: 'rgba(255, 255, 255, 0.8)',
    borderEndEndRadius: 10,
  },
  inputCol: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F222A',
    padding: 13,
    paddingLeft: 20,
    marginBottom: 20,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#06C149',
    paddingVertical: 14,
    borderRadius: 30,
    width: 350,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  line: {
    width: 100,
    height: 1,
    backgroundColor: '#35383F',
  },
  lineCon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    gap: 20,
  },
  cuba: {
    backgroundColor: '#1F222A',
    borderRadius: 20,
    borderColor: '#35383F',
    borderWidth: 1,
  },
  icon: {
    marginBottom: 20,
    marginTop: 20,
    marginRight: 35,
    marginLeft: 35,
  },
});
