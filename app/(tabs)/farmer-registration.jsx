import FarmerRegistration from '../../components/Farmer/FarmerRegistration';
import { Stack } from 'expo-router';

export default function FarmerRegistrationScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <FarmerRegistration />
    </>
  );
} 