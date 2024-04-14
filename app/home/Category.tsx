import { Link, useRouter } from 'expo-router';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function TabCategoryScreen(): React.ReactNode {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>
      {/* <FlatList
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
      /> */}
      <Link href="/Login" style={{ textDecorationLine: 'underline' }}>
        Login
      </Link>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => router.push('/categoryScreens/Animal')}>
          <View style={styles.round}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4600/4600227.png' }}
              style={styles.slide}
            />
          </View>
          <Text style={{ fontWeight: '600', marginTop: 5 }}>Animal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => router.push('/categoryScreens/Nature')}>
          <View style={styles.round}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2913/2913483.png' }}
              style={styles.slide}
            />
          </View>
          <Text style={{ fontWeight: '600', marginTop: 5 }}>Nature</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => router.push('/categoryScreens/Cleaning')}>
          <View style={styles.round}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/994/994928.png' }}
              style={styles.slide}
            />
          </View>
          <Text style={{ fontWeight: '600', marginTop: 5 }}>Cleaning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => router.push('/categoryScreens/Education')}>
          <View style={styles.round}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4207/4207253.png' }}
              style={styles.slide}
            />
          </View>
          <Text style={{ fontWeight: '600', marginTop: 5 }}>Education</Text>
        </TouchableOpacity>
      </View>
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
