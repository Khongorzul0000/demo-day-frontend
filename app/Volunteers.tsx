import { FlatList, StyleSheet, Text, View } from 'react-native';

import { useGetVolunteersQuery } from '@/graphql/generated';

export default function TabVolunteersScreen(): React.ReactNode {
  const { data, loading, error } = useGetVolunteersQuery();
  return (
    <View style={styles.container}>
      <View>
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error.message}</Text>}
        {/* {data?.getVolunteers?.map((vols) => <Text key={vols?.id}>{vols?.name}</Text>)} */}
      </View>
      <FlatList
        data={data?.getVolunteers ?? []}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.card}>
              {/* <Image source={{ uri: item?.img }} style={styles.img} /> */}
              {/* <Image
                source={{
                  uri: item?.img
                    ? item.img
                    : 'https://www.tallahassee.com/gcdn/presto/2018/08/14/PTAL/6e4fff76-595d-4069-9112-cfe15dbfaa43-IMG_Stadium.jpeg?width=660&height=319&fit=crop&format=pjpg&auto=webp',
                }}
                style={styles.img}
              /> */}
              <Text style={styles.title}>{item?.name}</Text>
              <Text style={{ color: 'white' }}>{item?.description}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#7B68EE',
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
});
