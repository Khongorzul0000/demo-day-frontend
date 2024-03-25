import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TabVolunteersScreen(): React.ReactNode {
  return (
    <ScrollView>
      <Image
        source={{
          uri: 'https://i.pinimg.com/564x/ba/6d/35/ba6d3548e66fe8356a054a6605697e50.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={{ fontSize: 25, fontWeight: '600' }}>Lets clear Onon river</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
          <Text style={{ color: '#7B68EE', fontSize: 20, fontWeight: '600' }}>Kelly clarkson</Text>
          <Text style={styles.cate}>Cleaning</Text>
          <Text style={styles.progress}>active</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 7 }}>
          <FontAwesome6 name="location-dot" size={25} color="#7B68EE" />
          <Text style={{ fontSize: 17, color: 'grey' }}>Ulaanbaatar, sukhbaatar</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <MaterialIcons name="date-range" size={24} color="#7B68EE" />
          <Text>2024 4/13</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <FontAwesome6 name="user-group" size={20} color="#7B68EE" />
          <Text>18-24 people</Text>
        </View>
        <View style={styles.line} />
        <View>
          <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 20 }}>Description</Text>
          <Text style={{ marginBottom: 30 }}>
            Улаанбаатар марафон нь 2023.06.03- нд болно. Ерөнхий зохион байгуулагчаар Нийслэлийн
            Засаг даргын Тамгын газар, Нийслэлийн Биеийн тамир, спортын газар Хамтран зохион
            байгуулагчаар "Хай пэймент солюшинс" ХХК, Монголын Хөнгөн атлетикийн холбоо ажиллаж
            байна. Та бүхэн #volunteer ажилласнаар доорх боломжууд таньд нээгдэнэ🙌 ✅Арга хэмжээ
            зохион байгуулах туршлага хуримтлуулах ✅Багаар ажиллах чадвараа нэмэгдүүлэх, танилын
            хүрээгээ тэлэх ✅Өөрийгөө бусдад таниулах ✅Олон улсын сертификаттай болох
          </Text>
        </View>
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
});
