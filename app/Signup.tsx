import { Feather, Fontisto, AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { useCreateUserMutation } from '@/graphql/generated';

export default function TabThreeScreen(): React.ReactNode {
  const [image, setImage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [5, 4],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const [createUserMutation, { loading: mutationLoading, error: mutationError }] =
    useCreateUserMutation();
  const handleCreateVolunteer = () => {
    console.log('Creating user...');
    createUserMutation({
      variables: {
        input: {
          username,
          password,
          email,
        },
      },
    })
      .then(() => {
        console.log('User created successfully!:');
        router.push('/(tabs)/');
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/b6/f2/97/b6f297465d0e25efb58d72bceab1e95d.jpg' }}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.header}>Register</Text>
        <Text style={{ marginBottom: 20, color: 'white' }}>Create your new account</Text>
        {/* <Button title="choose img from gallery" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
        <TouchableOpacity style={styles.profile} onPress={pickImage}>
          {!image && <AntDesign name="plus" size={30} color="white" />}
          {image && (
            <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 100 }} />
          )}
        </TouchableOpacity>

        <View style={styles.inputCol}>
          <Feather name="user" size={24} color="#9E9E9E" />
          <TextInput
            placeholder="Full name"
            autoCorrect
            placeholderTextColor="#9E9E9E"
            style={styles.input}
            // onChangeText={(username) => setUsername(username)}
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
        </View>
        <View>
          {mutationLoading && <Text style={styles.loading}>Loading...</Text>}
          {mutationError && <Text>Error: {mutationError.message}</Text>}
        </View>
        <View style={styles.inputCol}>
          <Fontisto name="email" size={24} color="#9E9E9E" />
          <TextInput
            placeholder="Email"
            autoCorrect
            placeholderTextColor="#9E9E9E"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
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
        <TouchableOpacity style={styles.button} onPress={handleCreateVolunteer}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        {/* <View style={styles.lineCon}>
          <View style={styles.line} />
          <Text style={{ color: 'white' }}>or continue with</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.cuba}>
          <FontAwesome name="google" size={40} color="#06C149" style={styles.icon} />
        </View> */}
        <View style={{ flexDirection: 'row', gap: 5, marginTop: 20 }}>
          <Text style={{ color: 'white' }}>Already have an account?</Text>
          <Link href="/Login" style={{ color: '#06C149', fontWeight: '600' }}>
            Login.
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
  profile: {
    height: 100,
    width: 100,
    backgroundColor: '#35383F',
    borderRadius: 100,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    padding: 10,
    backgroundColor: 'white',
  },
});
