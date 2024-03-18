import { StyleSheet, TextInput, View } from 'react-native';

export default function TabThreeScreen(): React.ReactNode {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Сайн дурын ажилын нэр" autoCorrect style={styles.input} />
      <TextInput placeholder="Хүний тоо" autoCorrect keyboardType="numeric" style={styles.input} />
      <TextInput
        style={styles.textInput}
        multiline
        numberOfLines={4} // Set the number of lines you want to display initially
        placeholder="Сайн дурын ажилын дэлгэрэнгүй"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '100%',
    borderRadius: 7,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    minHeight: 40, // Set the minimum height of the input area
    minWidth: '100%',
  },
});
