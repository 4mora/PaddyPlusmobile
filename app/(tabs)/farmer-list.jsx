import FarmerList from '../../components/Farmer/FarmerList';
import { Stack } from 'expo-router';
import { Tabs } from 'expo-router';

export default function FarmerListScreen() {
  return (
    <>
      <Stack.Screen 
        options={{ 
          headerShown: true,
          title: 'Farmer List',
          headerStyle: {
            backgroundColor: '#4CAF50',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
      />
      
      <FarmerList />

       <Tabs.Screen
        name="farmer-registration"
        options={{
          title: 'Register Farmer',
          // tabBarIcon: ({ color }) => (
          //   <FontAwesome5 name="user-plus" size={24} color={color} />
          // ),
        }}
      />
    </>
  );
} 