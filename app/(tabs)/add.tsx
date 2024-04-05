import { SetStateAction, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

export default function TabThreeScreen(): React.ReactNode {
  const [, setSelected] = useState('');

  const data = [
    { key: '1', value: 'Mobiles', disabled: true },
    { key: '2', value: 'Appliances' },
    { key: '3', value: 'Cameras' },
    { key: '4', value: 'Computers', disabled: true },
    { key: '5', value: 'Vegetables' },
    { key: '6', value: 'Diary Products' },
    { key: '7', value: 'Drinks' },
  ];
  return (
    <View style={styles.container}>
      <TextInput placeholder="Сайн дурын ажилын нэр" autoCorrect style={styles.input} />
      <TextInput placeholder="Хаана болох" autoCorrect style={styles.input} />
      <TextInput placeholder="Хэзээ болох" autoCorrect style={styles.input} />
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          placeholder="Хүний тоо"
          autoCorrect
          keyboardType="numeric"
          style={styles.input1}
        />
        <SelectList
          setSelected={(value: SetStateAction<string>) => setSelected(value)}
          data={data}
          save="value"
          placeholder="Төрлийг сонгох.   " // Custom placeholder text
        />
      </View>
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
    gap: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    borderRadius: 7,
  },
  input1: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '50%',
    borderRadius: 7,
    height: 46,
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
