import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function TabThreeScreen(): React.ReactNode {
  const longString =
    ' Амны билэгтэй хүү 2010 оны цагаан сарын үеэр анхны хүүхэд маань 3 сар орчим болчихсон ээж болоод удаагүй байлаа би. Дарь эх рүү аавындаа ирж золгочоод гарлаа. 1 буудал руу дөхөж байтал залуу хос 4 5 насны хүүхэдтэйгээ их л даарсан бололтой зогсохыг хараад би нөхөртөө хайраа энэ 3ыг дөхүүлээд буулгая гэсэн манай хүн өө тэгий тэгий гээл өнөө 3ынхаа урд очоол ахын дүү нар суучих дөхүүлээд өгье гэсэн өнөө 3 маань үсрээл суулаа. Суугаал 3уулаа бүүртачигнатал хөхрөлдөөд уналаа шүү гайхаал яааваа инээсэнг асуу гэдэгдээ гэсэн чинь сая манай хүү ээж аав 3уулааг ингээл зогсож байсан чинь тас хар жийп ирээл хүргээд өгөх үү гэвэл яах уу гээл яг хэлсэн чинь тас хар жийп ирээд зогсчихлоо гээд хүү бүүр бөөн баяр. 5уулаа жоол инээлдээд. Шинийн 1ний өглөө 1 хөөрхөн жаалын амны билгийг биелүүлсэн байдагийн кккк одоо ч хүү 18 9 хүрээд сурлага хөдөлмөр нь амжилттай яваа байхдаа.';
  const maxLength = 400;
  const truncatedString = longString.slice(0, maxLength);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ backgroundColor: 'white' }}>
          <Text style={{ fontSize: 27, fontWeight: '600', margin: 20, backgroundColor: 'white' }}>
            Share your thoughts
          </Text>
        </View>
        <View style={{ backgroundColor: 'white', width: '100%', padding: 20, marginBottom: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE997XIrx59x3CkcsA_G31LsSaVLQGpMd2v10fgYSlPBID6embC4y236_YkagTK_5IQo&usqp=CAU',
              }}
              height={55}
              width={55}
              style={{ borderRadius: 100 }}
            />
            <View>
              <Text style={{ fontWeight: '600' }}>MR.BEAN</Text>
              <Text style={{ fontSize: 12 }}>2024 4/10</Text>
            </View>
          </View>
          <Text>{truncatedString}</Text>
          <Text style={{ color: 'grey' }}>see more...</Text>
        </View>
        <View style={{ backgroundColor: 'white', width: '100%', padding: 20, marginBottom: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE997XIrx59x3CkcsA_G31LsSaVLQGpMd2v10fgYSlPBID6embC4y236_YkagTK_5IQo&usqp=CAU',
              }}
              height={55}
              width={55}
              style={{ borderRadius: 100 }}
            />
            <View>
              <Text style={{ fontWeight: '600' }}>MR.BEAN</Text>
              <Text style={{ fontSize: 12 }}>2024 4/10</Text>
            </View>
          </View>
          <Text>{truncatedString}</Text>
          <Text style={{ color: 'grey' }}>see more...</Text>
          <Image
            source={{
              uri: 'https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095_4x3.jpg',
            }}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});
