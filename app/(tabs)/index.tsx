import { View } from 'react-native';

import Category from '@/components/Category';
import Header from '@/components/Header';
import SlideImage from '@/components/SlideImage';

export default function TabOneScreen(): React.ReactNode {
  return (
    <View>
      <Header />
      <View>
        <SlideImage />
        <Category />
      </View>
    </View>
  );
}
