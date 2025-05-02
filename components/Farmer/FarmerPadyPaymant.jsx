import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

const FarmerPadyPayment = () => {
  const [perKilo, setPerKilo] = useState('');
  const [paymentType, setPaymentType] = useState('Cash');

  const handleConfirm = () => {
    Alert.alert("Payment Confirmed", `Rate: Rs. ${perKilo} per kilo\nPayment Type: ${paymentType}`);
  };

  const handlePrint = () => {
    Alert.alert("Printing...", "The bill is being printed.");
    // Logic to print would go here (can be integrated with a printing library)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Paddy Payment Details</Text>

      <Text style={styles.label}>Per Kilo Rate (Rs):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={perKilo}
        onChangeText={setPerKilo}
        placeholder="Enter per kilo rate"
      />

      <Text style={styles.label}>Select Payment Type:</Text>
      <View style={styles.radioGroup}>
        <View style={styles.radioRow}>
          <RadioButton
            value="Cash"
            status={paymentType === 'Cash' ? 'checked' : 'unchecked'}
            onPress={() => setPaymentType('Cash')}
          />
          <Text style={styles.radioLabel}>Cash</Text>
        </View>

        <View style={styles.radioRow}>
          <RadioButton
            value="Card"
            status={paymentType === 'Card' ? 'checked' : 'unchecked'}
            onPress={() => setPaymentType('Card')}
          />
          <Text style={styles.radioLabel}>Card</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary} onPress={handlePrint}>
        <Text style={styles.buttonText}>Print Bill</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FarmerPadyPayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 45,
  },
  radioGroup: {
    marginBottom: 20,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioLabel: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonSecondary: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
