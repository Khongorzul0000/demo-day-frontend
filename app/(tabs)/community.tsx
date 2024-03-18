import { StyleSheet, Text, View } from 'react-native';

export default function TabThreeScreen(): React.ReactNode {
  return (
    <View style={styles.container}>
      <Text>hi community</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
