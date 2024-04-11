import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Category, useGetVolunteersByCategoryQuery } from '@/graphql/generated';

export default function TabNatureScreen(): React.ReactNode {
  const { data, loading, error } = useGetVolunteersByCategoryQuery({
    variables: { category: Category.Nature },
  });
  return (
    <View style={styles.container}>
      <View>
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error.message}</Text>}
      </View>
      <FlatList
        data={data?.getVolunteersByCategory}
        // contentContainerStyle={{
        //   flexGrow: 1,
        //   gap: 10,
        //   flexDirection: 'row-reverse',
        // }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={styles.card}>
              <Text style={styles.title}>{item?.name}</Text>
              <View>
                <Text>{item?.description}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },
  card: {
    padding: 15,
    backgroundColor: '#B3ACFF',
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginTop: 10,
    marginBottom: 4,
  },
});
