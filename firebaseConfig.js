import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBbjITqXsJ8Y1USw7qcczoaWW_RUO5ncV4",
  authDomain: "pady-37793.firebaseapp.com",
  projectId: "pady-37793",
  storageBucket: "pady-37793.firebasestorage.app",
  messagingSenderId: "1087732350288",
  appId: "1:1087732350288:web:596584d7a4af3dc7f1c055",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export default app; 