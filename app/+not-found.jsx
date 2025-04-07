import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import SignIn from '../components/auth/SingIn';
import UserDashboard from '../components/Dashbord/Userdashbord';
import FarmerRegistration from '../components/Farmer/FarmerRegistration';
import FarmerList from '../components/Farmer/FarmerList';
import FarmerPaddyDetails from '../components/Farmer/FarmerPaddyDetails'
export default function NotFoundScreen() {
  return (
    <>
      {/* <Stack.Screen  />
      <SignIn />
      {/* <FarmerPaddyDetails /> */}
      {/* <FarmerRegistration />  */}
      {/* <FarmerList />  */}
      <UserDashboard />


     </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
