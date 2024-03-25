import { FontAwesome, AntDesign } from '@expo/vector-icons';
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
                <FontAwesome name="home" size={24} color={focused ? '#06C149' : 'grey'} />
                <Text style={{ fontSize: 10, color: focused ? '#06C149' : 'grey' }}>Home</Text>
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
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 17 }}>
                <FontAwesome name="user" size={24} color={focused ? '#06C149' : 'grey'} />
                <Text style={{ fontSize: 10, color: focused ? '#06C149' : 'grey' }}>Profile</Text>
              </View>
            );
          },
          tabBarLabel: ' ',
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          // title: 'Profile',
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 17,
                  height: 55,
                  width: 55,
                  borderRadius: 100,
                  backgroundColor: '#06C149',
                  position: 'relative',
                  top: -25,
                }}>
                <AntDesign name="plus" size={30} color="white" />
              </View>
            );
          },
          tabBarLabel: ' ',
        }}
      />

      <Tabs.Screen
        name="community"
        options={{
          // title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 17 }}>
                <FontAwesome name="group" size={24} color={focused ? '#06C149' : 'grey'} />
                {/* <Text style={{ fontSize: 10, color: focused ? '#7B68EE' : 'grey' }}>Community</Text> */}
                <Text style={{ fontSize: 10, color: focused ? '#06C149' : 'grey' }}>Community</Text>
              </View>
            );
          },
          tabBarLabel: ' ',
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          // title: 'Profile',
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 17 }}>
                <FontAwesome name="group" size={24} color={focused ? '#06C149' : 'grey'} />
                {/* <Text style={{ fontSize: 10, color: focused ? '#7B68EE' : 'grey' }}>Community</Text> */}
                <Text style={{ fontSize: 10, color: focused ? '#06C149' : 'grey' }}>Four</Text>
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
