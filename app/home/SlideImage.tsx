import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import slidePic from '../../assets/datas/image';

export default function TabSlideImageScreen(): React.ReactNode {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pictures</Text>
      <FlatList
        data={slidePic}
        horizontal
        contentContainerStyle={{
          flexGrow: 1,
          gap: 10,
        }}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Image source={{ uri: item.url }} style={styles.slide} />
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
    color: '#7B68EE',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  slide: {
    height: 150,
    width: 200,
    borderRadius: 10,
    gap: 20,
  },
});
