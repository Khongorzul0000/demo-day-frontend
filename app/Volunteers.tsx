import { StyleSheet, Text, View } from 'react-native';

export default function TabVolunteersScreen(): React.ReactNode {
  return (
    <View style={styles.container}>
      <Text>hi view all volunteers</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
