import { View, ScrollView, StyleSheet } from 'react-native';

import Category from '@/app/home/Category';
import Header from '@/app/home/Header';
import LateVol from '@/app/home/LateVol';
import SlideImage from '@/app/home/SlideImage';
export default function TabOneScreen(): React.ReactNode {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Header />
        <View>
          <SlideImage />
          <Category />
          <LateVol />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight,
    // backgroundColor: 'black',
    marginBottom: 20,
  },
});
