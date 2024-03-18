import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import catPic from '../../assets/datas/cate';

export default function TabCategoryScreen(): React.ReactNode {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>
      <FlatList
        data={catPic}
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 30.3 }} />}
        renderItem={({ item, index }) => {
          return (
            <View style={{ alignItems: 'center' }}>
              <View style={styles.round}>
                <Image source={{ uri: item.url }} style={styles.slide} />
              </View>
              <Text style={{ fontWeight: '600', marginTop: 5 }}>{item.text}</Text>
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
  slide: {
    height: 50,
    width: 50,
    borderRadius: 10,
    gap: 20,
  },
});
