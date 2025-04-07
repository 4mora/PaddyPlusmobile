import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const FarmerPadyPaymantPopup = ({ visible, onClose, totalWeight }) => {
  const [perKilo, setPerKilo] = useState('');
  const [payNow, setPayNow] = useState('');

  const kiloPrice = parseFloat(perKilo || 0);
  const payAmount = parseFloat(payNow || 0);
  const totalAmount = kiloPrice * totalWeight;
  const remaining = totalAmount - payAmount;

  const handleConfirm = () => {
    alert(`Total: Rs.${totalAmount.toFixed(2)}\nPaid: Rs.${payAmount}\nRemaining: Rs.${remaining.toFixed(2)}`);
    onClose(); // close modal after confirm
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Farmer Payment</Text>

          <TextInput
            placeholder="Per Kilo (Rs)"
            keyboardType="numeric"
            style={styles.input}
            value={perKilo}
            onChangeText={setPerKilo}
          />

          <Text style={styles.label}>Total Weight: {totalWeight} Kg</Text>
          <Text style={styles.label}>Total Amount: Rs. {totalAmount.toFixed(2)}</Text>

          <TextInput
            placeholder="Pay Amount (Rs)"
            keyboardType="numeric"
            style={styles.input}
            value={payNow}
            onChangeText={setPayNow}
          />

          <Text style={styles.label}>Remaining: Rs. {remaining.toFixed(2)}</Text>

          <View style={styles.buttonRow}>
            <Button title="Cancel" onPress={onClose} />
            <Button title="Confirm" onPress={handleConfirm} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

// const SubmitWithPopup = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.submitButton}
//         onPress={() => setShowPopup(true)}
//       >
//         <Text style={styles.submitText}>Submit</Text>
//       </TouchableOpacity>

//       <PaymentPopup
//         visible={showPopup}
//         onClose={() => setShowPopup(false)}
//         totalWeight={100} // you can pass this dynamically
//       />
//     </View>
//   );
// };

export default FarmerPadyPaymantPopup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 6,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
  },
  modalContainer: {
    margin: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  buttonRow: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
