import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome } from '@expo/vector-icons';

const FarmerPaddyDetails = ({ route }) => {
  // const { farmer } = route.params;
  const farmer = {
    name: "Test Farmer",
    nic: "000000000V",
    phone: "0712345678",
    address: "Sample Village",
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [paddyType, setPaddyType] = useState('samba');
  const [bags, setBags] = useState([]);
  const [newBagWeight, setNewBagWeight] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [total, setTotal] = useState(0);

  var perkilo;
  const paddyTypes = [
    { id: 1, label: 'Samba', value: 'samba' },
    { id: 2, label: 'Nadu', value: 'nadu' },
    { id: 3, label: 'Kiri Samba', value: 'kiriSamba' },
  ];

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };
  const TotalSubmit = () => {

  }

  const addBag = () => {
    if (!newBagWeight || isNaN(newBagWeight)) {
      Alert.alert('Invalid Input', 'Please enter a valid weight');
      return;
    }
    const weight = parseFloat(newBagWeight);
    const newBag = {
      id: `bag_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      weight
    };

    setBags([...bags, newBag]);
    setNewBagWeight('');
  };
  const Submit = () => {
    // if (!newBagWeight || isNaN(newBagWeight)) {
    //   Alert.alert('Invalid Input', 'Please enter a valid weight');
    //   return;
    // }
    const weight = parseFloat(newBagWeight);
    const newBag = {
      id: `bag_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      weight
    };

    setBags([...bags, newBag]);
    setNewBagWeight('');
  };

  const deleteBag = (bagId) => {
    setBags(bags.filter(bag => bag.id !== bagId));
  };

  const getTotalWeight = () => {
    var TotalWeight = bags.reduce((total, bag) => total + bag.weight, 0);
    return TotalWeight;
  };


  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.farmerInfo}>
        <Text style={styles.farmerName}>{farmer.name}</Text>
        <Text style={styles.farmerNic}>NIC: {farmer.nic}</Text>
      </View> */}


      {/* Date Selection */}
      <View style={styles.section}>
        {/* <Text style={styles.label}>Collection Date</Text> */}
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShowDatePicker(true)}
        >
          <FontAwesome name="calendar" size={20} color="#666" />
          <Text style={styles.dateText}>
            {selectedDate.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            onChange={handleDateChange}
          />
        )}
      </View>
      {/* Total Weight */}
      <View style={styles.totalSection}>
        <Text style={styles.totalLabel}>Total Weight:</Text>
        <TouchableOpacity onPress={() => setTotal(getTotalWeight())}>
          <Text style={styles.totalWeight}>{total} kg</Text>
        </TouchableOpacity>
      </View>

      {/* Paddy Type Selection */}
      <View style={styles.section}>
        <Text style={styles.label}>Paddy Type</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={paddyType}
            onValueChange={(itemValue) => setPaddyType(itemValue)}
            style={styles.picker}
          >
            {paddyTypes.map((type) => (
              <Picker.Item
                key={type.id}
                label={type.label}
                value={type.value}
              />
            ))}
          </Picker>
        </View>
      </View>

      {/* Bag Weight Input */}
      <View style={styles.section}>
        <Text style={styles.label}>Add Bag Weight (kg)</Text>
        <View style={styles.addBagContainer}>
          <TextInput
            style={styles.weightInput}
            value={newBagWeight}
            onChangeText={setNewBagWeight}
            keyboardType="numeric"
            placeholder="Enter weight in kg"
          />
          <TouchableOpacity style={styles.addButton} onPress={addBag}>
            <Text style={styles.addButtonText}>Add Bag</Text>
          </TouchableOpacity>
        </View>

      </View>



      {/* Bags List */}
      <View style={styles.section}>
        <Text style={styles.label}>Bags</Text>
        {bags.map((bag) => (
          <View key={bag.id} style={styles.bagItem}>
            <Text style={styles.bagWeight}>{bag.weight} kg</Text>
            <TouchableOpacity
              onPress={() => deleteBag(bag.id)}
              style={styles.deleteButton}
            >
              <FontAwesome name="trash" size={20} color="#ff4444" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.section}>

        <TouchableOpacity style={styles.addButton} onPress={Submit}>
          <Text style={styles.addButtonText}>Submit</Text>
        </TouchableOpacity>

        {/* <FarmerPadyPaymantPopup
        visible={showPopup}
        onClose={() => setShowPopup(false)}
        totalWeight={100} // you can pass this dynamically
      /> */}
      </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  farmerInfo: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
  },
  farmerName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  farmerNic: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 10,
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    gap: 10,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
  },
  addBagContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  weightInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  bagItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
  },
  bagWeight: {
    fontSize: 16,
    color: '#333',
  },
  deleteButton: {
    padding: 5,
  },
  totalSection: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20'
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalWeight: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});

export default FarmerPaddyDetails; 