import { StyleSheet, Text, View } from 'react-native';

export default function TabCategoryScreen(): React.ReactNode {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Category</Text>
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
    marginTop: 20,
  },
});
