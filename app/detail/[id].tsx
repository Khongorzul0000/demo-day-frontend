import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { useGlobalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useGetVolunteerQuery } from '@/graphql/generated';

export default function TabVolunteersScreen(): React.ReactNode {
  const { id } = useGlobalSearchParams();
  const { data, loading, error } = useGetVolunteerQuery({ variables: { id: `${id}` } });
  return (
    <ScrollView>
      <View>
        {!loading && (
          <View>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/ba/6d/35/ba6d3548e66fe8356a054a6605697e50.jpg',
              }}
              style={styles.image}
            />
            <View style={styles.container}>
              <Text style={{ fontSize: 25, fontWeight: '600' }}>{data?.getVolunteer?.name}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                <Text style={{ color: '#7B68EE', fontSize: 20, fontWeight: '600' }}>
                  {data?.getVolunteer?.leader?.username}
                </Text>
                <Text style={styles.cate}>{data?.getVolunteer?.category}</Text>
                <Text style={styles.progress}>active</Text>
              </View>
              <View style={{ flexDirection: 'row', gap: 7 }}>
                <FontAwesome6 name="location-dot" size={25} color="#7B68EE" />
                <Text style={{ fontSize: 17, color: 'grey' }}>{data?.getVolunteer?.where}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <MaterialIcons name="date-range" size={24} color="#7B68EE" />
                <Text>2024 4/13</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <FontAwesome6 name="user-group" size={20} color="#7B68EE" />
                <Text>{data?.getVolunteer?.neededPeople}</Text>
              </View>
              <View style={styles.line} />
              <View>
                <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 20 }}>
                  Description
                </Text>
                <Text style={{ marginBottom: 30 }}>{data?.getVolunteer?.description}</Text>
              </View>
            </View>
          </View>
        )}
      </View>
      <View style={styles.loadingFlex}>
        {loading && <Text style={{ fontSize: 20, color: 'red' }}>Loading...</Text>}
        {error && <Text>Error: {error.message}</Text>}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 410,
    height: 300,
  },
  container: {
    padding: 20,
    display: 'flex',
    gap: 7,
  },
  cate: {
    color: '#7B68EE',
    fontWeight: '600',
    padding: 3,
    backgroundColor: '#D4C4FF',
    borderRadius: 3,
    alignSelf: 'flex-start',
    paddingHorizontal: 7,
    marginTop: 7,
  },
  line: {
    borderWidth: 0.4,
    backgroundColor: '#F2F2F2 ',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  progress: {
    color: '#7B68EE',
    // #06C149
    fontWeight: '600',
    padding: 3,
    backgroundColor: '#A7FFAF',
    borderRadius: 3,
    alignSelf: 'flex-start',
    paddingHorizontal: 7,
    marginTop: 7,
  },
  loadingFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 850,
    width: '100%',
  },
});
