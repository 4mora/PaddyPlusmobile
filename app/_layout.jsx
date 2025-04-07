import 'react-native-gesture-handler';  // This must be the first import
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { auth } from '../firebaseConfig';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.replace('/(tabs)/dashboard');
      } else {
        router.replace('/signin');
      }
    });

    return unsubscribe;
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="Signin" />
        <Stack.Screen name="UserDashboard" />
        <Stack.Screen name="FarmerRegistration" />
        <Stack.Screen name="FarmerList"/>
      </Stack>
    </GestureHandlerRootView>
  );
}
