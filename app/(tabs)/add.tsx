// import { AntDesign } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

import { Category, useCreateVolunteerMutation, useGetVolunteersQuery } from '@/graphql/generated';
import { useUsers } from '@/hooks/useUsers';

export default function TabThreeScreen(): React.ReactNode {
  const [name, setName] = useState('');
  const [when, setWhen] = useState('');
  const [where, setWhere] = useState('');
  const [description, setDescription] = useState('');
  const [neededPeople, setNeededPeople] = useState('');
  const [category, setCategory] = useState<Category | undefined>(undefined);
  const [img, setImg] = useState('');
  const [isDone, setIsDone] = useState(false);
  const { user } = useUsers();
  const { refetch } = useGetVolunteersQuery();
  const [createVolunteer, { loading: mutationLoading }] = useCreateVolunteerMutation();
  const handleCreate = () => {
    console.log('createingvolunteer');
    const categoryValue = category?.toUpperCase();
    createVolunteer({
      variables: {
        input: {
          name,
          when,
          where,
          description,
          neededPeople,
          img,
          category: categoryValue as Category,
          isDone,
          leaderId: `${user?.id}`,
        },
      },
      onCompleted: () => {
        console.log('Volunteer created successfully!');
        refetch();
      },
      onError: (error) => {
        console.error('Error creating volunteer:', error);
      },
    });
  };
  useEffect(() => {
    setIsDone((prevIsDone) => !prevIsDone);
  }, []);

  // const pickImage = async () => {
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [5, 4],
  //     quality: 1,
  //   });
  //   console.log(result);

  //   if (!result.canceled) {
  //     setImg(result.assets[0].uri);
  //   }
  // };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Сайн дурын ажилын нэр"
        autoCorrect
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Хаана болох"
        autoCorrect
        style={styles.input}
        value={where}
        onChangeText={(text) => setWhere(text)}
      />
      <TextInput
        placeholder="Хэзээ болох"
        autoCorrect
        style={styles.input}
        value={when}
        onChangeText={(text) => setWhen(text)}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          placeholder="Хүний тоо"
          autoCorrect
          keyboardType="numeric"
          style={[styles.input1, { marginRight: 10 }]}
          value={neededPeople}
          onChangeText={(text) => setNeededPeople(text)}
        />
        <SelectList
          setSelected={(value: Category | undefined) => setCategory(value)}
          data={[
            { key: '1', value: 'STUDY_HELP' },
            { key: '2', value: 'CLEANING' },
            { key: '3', value: 'ANIMAL' },
            { key: '4', value: 'NATURE' },
          ]}
          save="value"
          placeholder="Төрлийг сонгох."
        />
      </View>
      {mutationLoading && <Text>Loading...</Text>}
      <TextInput
        style={styles.textInput}
        multiline
        numberOfLines={4} // Set the number of lines you want to display initially
        placeholder="Сайн дурын ажилын дэлгэрэнгүй"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      {/* <TouchableOpacity onPress={pickImage}>
        {!img && <AntDesign name="plus" size={30} color="white" />}
        {img && (
          <Image source={{ uri: img }} style={{ width: 100, height: 100, borderRadius: 100 }} />
        )}
      </TouchableOpacity> */}
      <TextInput
        placeholder="Zurag"
        autoCorrect
        style={styles.input}
        value={img}
        onChangeText={(text) => setImg(text)}
      />
      <TouchableOpacity onPress={handleCreate}>
        <Text>add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    borderRadius: 7,
  },
  input1: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '50%',
    borderRadius: 7,
    height: 46,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    minHeight: 40, // Set the minimum height of the input area
    minWidth: '100%',
  },
});
