import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { useGetVolunteersQuery } from '@/graphql/generated';

export default function TabVolunteersScreen(): React.ReactNode {
  const { data, loading, error } = useGetVolunteersQuery();
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const filteredVolunteers = data?.getVolunteers?.filter((volunteer) =>
    volunteer?.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search volunteers"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View>
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error.message}</Text>}
      </View>
      {/* <Image source={{ uri: item?.img }} style={styles.img} /> */}
      {/* <Image
                source={{
                  uri: item?.img
                    ? item.img
                    : 'https://www.tallahassee.com/gcdn/presto/2018/08/14/PTAL/6e4fff76-595d-4069-9112-cfe15dbfaa43-IMG_Stadium.jpeg?width=660&height=319&fit=crop&format=pjpg&auto=webp',
                }}
                style={styles.img}
              /> */}
      <FlatList
        data={filteredVolunteers ?? []}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.card} onPress={() => router.push(`/detail/${item?.id}`)}>
            <Text style={styles.title}>{item?.name}</Text>
            <Text style={{ color: 'white' }}>{item?.description}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item?.id ?? ''}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#7B68EE',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginTop: 10,
    marginBottom: 4,
  },
  card: {
    padding: 15,
    backgroundColor: '#B3ACFF',
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 20,
  },
  img: {
    height: 190,
    borderRadius: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
  },
});
