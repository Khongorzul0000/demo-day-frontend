import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

import Volunteers from '@/assets/datas/volunteers';

export default function TabVolunteersScreen(): React.ReactNode {
  return (
    <View style={styles.container}>
      <FlatList
        data={Volunteers}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.card}>
              <Image source={{ uri: item.url }} style={styles.img} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={{ color: 'white' }}>{item.description}</Text>
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
