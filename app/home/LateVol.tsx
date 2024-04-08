import { Link, useRouter } from 'expo-router';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import { useGetVolunteersQuery } from '@/graphql/generated';

export default function TabLateVolScreen(): React.ReactNode {
  const { data, loading, error } = useGetVolunteersQuery();
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={styles.heading}>Laties Volunteers</Text>
        <Link href="/Volunteers" style={{ textDecorationLine: 'underline' }}>
          View all
        </Link>
      </View>
      <View>
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error.message}</Text>}
      </View>
      <FlatList
        data={data?.getVolunteers?.slice(0, 3) ?? []}
        horizontal
        contentContainerStyle={{
          flexGrow: 1,
          gap: 10,
        }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => router.push('/detail/VolDetail')}>
              <Text style={styles.title}>{item?.name}</Text>
              <View style={styles.slide}>
                <Text>{item?.description}</Text>
              </View>
              <Text style={styles.user}> Kelly clarkson</Text>
              <Text style={styles.cate}>{item?.category}</Text>
            </TouchableOpacity>
          );
        }}
      />
      {/* <FlatList
        data={data?.getVolunteers ?? []}
        horizontal
        contentContainerStyle={{
          flexGrow: 1,
          gap: 10,
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.card} onPress={() => router.push(`/detail/${item.id}`)}>
            <Text style={styles.title}>{item?.name}</Text>
            <View style={styles.slide}>
              <Text>{item?.description}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()} 
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  heading: {
    // color: '#7B68EE',
    color: '#06C149',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 20,
  },
  round: {
    height: 70,
    width: 70,
    backgroundColor: '#ECECEC',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 230,
  },
  slide: {
    width: 210,
    borderRadius: 10,
    gap: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
  user: {
    fontSize: 13,
    color: 'grey',
    fontWeight: '600',
    marginTop: 5,
  },
  cate: {
    // backgroundColor: '#D4C4FF',
    // color: '#7B68EE',
    backgroundColor: '#A7FFAF',
    color: '#06C149',
    fontWeight: '600',
    padding: 3,
    borderRadius: 3,
    alignSelf: 'flex-start',
    paddingHorizontal: 7,
    marginTop: 7,
    fontSize: 10,
  },
});
