import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';


const FarmerList = () => {
  // const navigation = useNavigation(); // Assign navigation here
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const [farmers] = useState([
    { id: '1', name: 'John Doe', nic: '123456789V', phone: '0771234567', address: 'Colombo' },
    { id: '2', name: 'Jane Smith', nic: '987654321V', phone: '0777654321', address: 'Kandy' },
    { id: '3', name: 'Kasun Perera', nic: '456123789V', phone: '0712345678', address: 'Galle' },
    { id: '4', name: 'Nimal Fernando', nic: '789456123V', phone: '0759876543', address: 'Kurunegala' },
    { id: '5', name: 'Saman Kumara', nic: '852741963V', phone: '0704567891', address: 'Anuradhapura' },
  ]);

  const filteredFarmers = farmers.filter(farmer =>
    farmer.nic.toLowerCase().includes(searchQuery.toLowerCase()) ||
    farmer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderFarmerCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        // Do nothing or show farmer details in a modal/expanded view
        console.log('Farmer selected:', item);
      }}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.farmerName}>{item.name}</Text>
        <Text style={styles.nicNumber}>NIC: {item.nic}</Text>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.infoRow}>
          <FontAwesome name="phone" size={16} color="#666" />
          <Text style={styles.infoText}>{item.phone}</Text>
        </View>
        <View style={styles.infoRow}>
          <FontAwesome name="map-marker" size={16} color="#666" />
          <Text style={styles.infoText}>{item.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by NIC number or name"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredFarmers}
        renderItem={renderFarmerCard}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No farmers found</Text>
          </View>
        }
      />
      <TouchableOpacity style={styles.leftCenterButton}   
      onPress={() => router.push('/DashboardScreen')}

      >
        <FontAwesome5 name="plus" size={16} color="#fff" />
        <Text style={styles.leftCenterButtonText}>Add Farmer</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  registerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 12,
    borderRadius: 8,
    elevation: 2,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  listContainer: {
    padding: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    marginBottom: 10,
  },
  farmerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  nicNumber: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  cardBody: {
    gap: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
  leftCenterButton: {
    position: 'absolute',
    right: 2,
    top: '50%',
    transform: [{ translateY: -25 }],
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 3,
    borderRadius: 8,
    elevation: 3,
  },
  leftCenterButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },

});

export default FarmerList; 