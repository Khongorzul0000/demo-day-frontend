import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import slidePic from '@/assets/datas/image';

export default function TabTwoScreen(): React.ReactNode {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.round}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/564x/7f/4f/a7/7f4fa757ba9f722e242459ad2c04d116.jpg',
            }}
            style={styles.img}
          />
        </View>
        <View style={styles.content}>
          <Text style={{ fontWeight: '600', fontSize: 17 }}>Max Beth Bob</Text>
          <Text style={{ marginBottom: 20, marginTop: 5 }}>@bethbobmax@.gmail.com</Text>
          <ScrollView>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ width: 350 }}>
                "Harry Potter" is a beloved fantasy book series by J.K. Rowling, following the
                adventures of a young wizard named Harry and his friends as they attend Hogwarts
                School of Witchcraft and Wizardry. The series spans seven books, exploring themes of
                friendship, bravery, and the eternal struggle between good and evil in a magical
                world filled with spells, creatures, and mysteries.
              </Text>
            </View>
            <Text style={{ marginTop: 10, fontSize: 20, color: 'white', fontWeight: '600' }}>Duusgasan ajiluud</Text>
            <View style={{ marginBottom: 30, marginTop: 15 }}>
              <FlatList
                data={slidePic}
                horizontal
                contentContainerStyle={{
                  flexGrow: 1,
                  gap: 10,
                }}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => router.push('/detail/VolDetail')}>
                      <Text style={styles.title}>Lets clear onon river haahahahah</Text>
                      {/* <Image source={{ uri: item.url }} style={styles.slide} /> */}
                      <View style={styles.slide}>
                        <Text>
                          Volfour бол сайн дурын нийгэмлэгийн зүрх сэтгэл бөгөөд Монгол даяарх сайн
                          дурын ажил хайгч болон ажил олгогчдод хүссэн үр дүнгийг нь өгөх,
                          холбогдуулах хамгийн сайн эх сурвалж юм.
                        </Text>
                      </View>
                      <Text style={styles.user}> Kelly clarkson</Text>
                      <Text style={styles.cate}>Cleaning</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: '#7B68EE',
  },
  main: {
    height: 600,
    // backgroundColor: 'red',
    backgroundColor: '#B3ACFF',
    width: '100%',
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    alignItems: 'center',
    padding: 30,
  },
  round: {
    height: 120,
    width: 120,
    borderRadius: 100,
    backgroundColor: 'white',
    position: 'absolute',
    top: -60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 113,
    width: 113,
    borderRadius: 100,
  },
  content: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  card: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 300,
    height: 260,
  },
  slide: {
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
    color: '#7B68EE',
    fontWeight: '600',
    padding: 3,
    backgroundColor: '#D4C4FF',
    borderRadius: 3,
    alignSelf: 'flex-start',
    paddingHorizontal: 7,
    marginTop: 7,
    fontSize: 10,
  },
});
