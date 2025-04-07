// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
//   Dimensions,
//   SafeAreaView,
//   ScrollView,
// } from "react-native";
// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigation } from '@react-navigation/native';

// const navigation = useNavigation();
// // Firebase Configuration
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const { width, height } = Dimensions.get("window");

// const SignIn = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     if (!username || !password) {
//       setError("Please enter both username and password");
//       return;
//     }
//     try {
//       setLoading(true);
//       setError("");
//       const userCredential = await signInWithEmailAndPassword(auth, username, password);
//       console.log("Logged in user:", userCredential.user);
//       // Navigate to home screen or perform necessary actions
//       navigation.navigate("HomeScreen")
//     } catch (error) {
//       let errorMessage = "Login failed. Please try again.";
  
//       // Handle Firebase Authentication Errors
//       switch (error.code) {
//         case "auth/invalid-email":
//           errorMessage = "Invalid email format.";
//           break;
//         case "auth/user-not-found":
//           errorMessage = "No user found with this email.";
//           break;
//         case "auth/wrong-password":
//           errorMessage = "Incorrect password.";
//           break;
//         default:
//           errorMessage = error.message;
//       }
  
//       setError(errorMessage);
//       console.error("Login Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
//         <ScrollView contentContainerStyle={styles.scrollContainer}>
//           {/* Header */}
//           <View style={styles.header}>
//             <Text style={styles.title}>Paddy Plus</Text>
//             {/* <Text style={styles.subtitle}>Smarter Collection, Stronger Harvests!</Text> */}
//           </View>
//           <View style={{ height: height * 0.05 }} />
//           {/* Form Inputs */}
//           <View style={styles.formContainer}>
//             <Text style={styles.label}>Email</Text>
//             <TextInput
//               style={styles.input}
//               value={username}
//               onChangeText={setUsername}
//               placeholder="Enter your email"
//               placeholderTextColor="#aaa"
//               keyboardType="email-address"
//               autoCapitalize="none"
//             />

//             <Text style={styles.label}>Password</Text>
//             <TextInput
//               style={styles.input}
//               value={password}
//               onChangeText={setPassword}
//               placeholder="Enter your password"
//               placeholderTextColor="#aaa"
//               secureTextEntry
//             />

//             {error ? <Text style={styles.errorText}>{error}</Text> : null}

//             {/* Login Button */}
//             <TouchableOpacity style={[styles.loginButton, loading && styles.loginButtonDisabled]} onPress={handleLogin} disabled={loading}>
//               <Text style={styles.loginText}>{loading ? "LOGGING IN..." : "L O G I N"}</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>

//         {/* Green Bottom Curve */}
//         <View style={styles.bottomCurve} />
//         <Text style={styles.footerText}>Powered by {"\n"}<Text style={styles.companyText}>AgriRoot PVT Lmt.</Text></Text>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: "#fff" },
  
//   container: { flex: 1, justifyContent: "center", alignItems: "center" },

//   scrollContainer: { flexGrow: 1, justifyContent: "center", alignItems: "center" },

//   header: { alignItems: "center", marginTop: height * 0.01, paddingBottom: 30 },

//   title: { fontSize: width * 0.08, fontWeight: "bold", color: "#000", fontStyle: "italic", fontFamily: "Arial" },

//   subtitle: { fontSize: width * 0.035, color: "#777", textAlign: "center" },

//   formContainer: { width: width * 0.85, backgroundColor: "#fff", padding: width * 0.05, borderRadius: 10, elevation: 5 },

//   label: { fontSize: width * 0.04, fontWeight: "500", marginBottom: 5 },

//   input: { width: "100%", height: height * 0.06, borderWidth: 1, borderColor: "#ddd", borderRadius: 25, paddingLeft: 15, marginBottom: height * 0.02, backgroundColor: "#f9f9f9" },

//   errorText: { color: 'red', fontSize: width * 0.035, marginBottom: 10, textAlign: 'center' },

//   loginButton: { width: "100%", height: height * 0.06, backgroundColor: "#3FAF47", borderRadius: 25, alignItems: "center", justifyContent: "center" },

//   loginButtonDisabled: { backgroundColor: '#8FD896' },

//   loginText: { color: "#fff", fontSize: width * 0.045, fontWeight: "bold" },

//   bottomCurve: { position:'relative', bottom: 1, width: "100%", height: height * 0.06, backgroundColor: "#3FAF47"},

//   footerText: { position: "absolute", bottom: 10, fontSize: width * 0.035, textAlign: "center", color: "#666" },
  
//   companyText: { fontWeight: "bold", color: "#000" },
// });

// export default SignIn;
