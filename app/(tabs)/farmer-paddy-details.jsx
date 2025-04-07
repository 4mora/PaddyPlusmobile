import FarmerPaddyDetails from '../../components/Farmer/FarmerPaddyDetails';
import { Stack } from 'expo-router';

export default function FarmerPaddyDetailsScreen() {
  return (
    <>
      <Stack.Screen 
        options={{ 
          headerShown: true,
          title: 'Paddy Collection Details',
          headerStyle: {
            backgroundColor: '#4CAF50',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
      />
      <FarmerPaddyDetails />
    </>
  );
} 