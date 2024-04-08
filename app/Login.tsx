// import { useSignIn } from '@clerk/clerk-expo';
import { Feather, FontAwesome } from '@expo/vector-icons';
import {
  Link,
  useRouter,
  // useRouter
} from 'expo-router';
import { useState } from 'react';
// import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useMutationMutation } from '@/graphql/generated';

export default function TabThreeScreen(): React.ReactNode {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  const [loginUserMutation, { loading: mutationLoading }] = useMutationMutation();
  const handleLoginUser = () => {
    console.log('login user...');
    loginUserMutation({
      variables: {
        input: {
          password,
          username,
        },
      },
    })
      .then(() => {
        console.log('loged in');
        router.push('/(tabs)/');
      })
      .catch((error) => {
        console.log('error logging in:', error);
        setErrorMessage('An error occurred. Please try again.');
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      });
  };
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/b6/f2/97/b6f297465d0e25efb58d72bceab1e95d.jpg' }}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome back</Text>
        <Text style={{ marginBottom: 20, color: 'white' }}>Log in to your new account</Text>
        <View style={styles.inputCol}>
          <Feather name="user" size={24} color="#9E9E9E" />
          <TextInput
            placeholder="Full name"
            autoCorrect
            placeholderTextColor="#9E9E9E"
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
        </View>
        <View>
          {mutationLoading && <Text style={styles.loading}>Loading...</Text>}
          {errorMessage !== null && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
        </View>
        <View style={styles.inputCol}>
          <Feather name="lock" size={24} color="#9E9E9E" />
          <TextInput
            placeholder="Password"
            autoCorrect
            placeholderTextColor="#9E9E9E"
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLoginUser}>
          <Text style={styles.buttonText}>Log in</Text>
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
          <Text style={{ color: 'white' }}>Don't have an account?</Text>
          <Link href="/Signup" style={{ color: '#06C149', fontWeight: '600' }}>
            Sign Up.
          </Link>
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
  loading: {
    padding: 10,
    backgroundColor: 'white',
  },
});
