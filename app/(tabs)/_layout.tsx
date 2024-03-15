import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';

const TabLayout: React.FC = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          // title: 'Home',
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 17 }}>
                <FontAwesome name="home" size={24} color={focused ? '#7B68EE' : 'grey'} />
                <Text style={{ fontSize: 10, color: focused ? '#7B68EE' : 'grey' }}>Home</Text>
              </View>
            );
          },
          headerShown: false,
          tabBarLabel: ' ',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          // title: 'Profile',
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 17 }}>
                <FontAwesome name="user" size={24} color={focused ? '#7B68EE' : 'grey'} />
                <Text style={{ fontSize: 10, color: focused ? '#7B68EE' : 'grey' }}>Profile</Text>
              </View>
            );
          },
          tabBarLabel: ' ',
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
