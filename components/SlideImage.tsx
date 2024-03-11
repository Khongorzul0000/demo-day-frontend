import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import imageData from '../assets/datas/image';

export default function TabSlideImageScreen(): React.ReactNode {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pictures</Text>
      <FlatList
        data={imageData}
        horizontal
        renderItem={({ item, index }) => {
          return (
            <View style={{ marginRight: 15 }}>
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
