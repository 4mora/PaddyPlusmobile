import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Appbar, Card, Avatar, Button } from "react-native-paper";
import { BarChart } from "react-native-chart-kit"; // ✅ Use a compatible chart library
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import RingChart from "../Dashbord/Ringchart";
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function UserDashboard() {  // Dummy data for the chart
  const data = {
    labels: ["නාඩු", "සම්බා", "කීරි"],
    datasets: [{ data: [50, 35, 70] }],
  };
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);

  // Handle From Date Change
  const onFromDateChange = (event, selectedDate) => {
    setShowFrom(false);
    if (selectedDate) setFromDate(selectedDate);
  };

  // Handle To Date Change
  const onToDateChange = (event, selectedDate) => {
    setShowTo(false);
    if (selectedDate) setToDate(selectedDate);
  };

  return (
    <View style={styles.container}>
      {/* App Bar */}

      <Appbar.Header style={{ flexDirection: 'row', textAlign: 'center', backgroundColor: 'lightgreen', width: '98%' }}>
        {/* Title and Avatar in a row */}
        <Appbar.Content
          title="Wasala Rice Collecers"
          titleStyle={{ fontWeight: 'bold', textAlign: "" }}
        />
        <Avatar.Image
          size={60}  // Adjust the size as needed
          source={require('../../assets/images/Logo.png')}
        />
      </Appbar.Header>


      {/* Date Picker */}
      <View style={{ margin: 5 }}>
        <View style={styles.row}>
          {/* From Date Picker */}
          <TouchableOpacity
            style={styles.datePicker}
            onPress={() => setShowFrom(true)}
          >
            <Text style={styles.dateText}>සිට
              : {fromDate.toDateString()}</Text>
            {/* <FontAwesome name="calendar" size={20} color="black" /> */}
          </TouchableOpacity>

          {/* To Date Picker */}
          <TouchableOpacity
            style={styles.datePicker}
            onPress={() => setShowTo(true)}
          >
            <Text style={styles.dateText}>දක්වා
              : {toDate.toDateString()}</Text>
            {/* <FontAwesome name="calendar" size={20} color="black" /> */}
          </TouchableOpacity>
        </View>

        {/* Show From Date Picker */}
        {showFrom && (
          <DateTimePicker
            value={fromDate}
            mode="date"
            display="default"
            onChange={onFromDateChange}
          />
        )}

        {/* Show To Date Picker */}
        {showTo && (
          <DateTimePicker
            value={toDate}
            mode="date"
            display="default"
            onChange={onToDateChange}
          />
        )}
      </View>
      <View style={styles.row}>
        <Card style={styles.card}>
          <View style={{ margin: 5, flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/images/peasant.png')} // Replace with your image path
              style={{ width: 40, height: 40, marginRight: 8 }}
            />
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
              විකුනූ තෙත
              වී  ප්‍රමානය


            </Text>
          </View>


          <Card.Content
            style={{
              borderRadius: 10,
              overflow: 'hidden',
              backgroundColor: 'white',
              margin: 2,
              padding: 5
            }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 2, marginBottom: 0 }}>
              <Text style={styles.buyText}>නාඩු</Text>
              <Text style={styles.buyText}>සම්බා</Text>
              <Text style={styles.buyText}>කීරි</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 0, marginBottom: 0 }}>
              <Text style={styles.buyText}>1000 KG</Text>
              <Text style={styles.buyText}>1000 KG</Text>
              <Text style={styles.buyText}>1000 KG</Text>
            </View>
          </Card.Content>

        </Card>



      </View>


      {/* Buy & Sell Cards */}
      <View style={styles.row}>
        <Card style={styles.card}>
          <View style={{ margin: 5, flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/images/peasant.png')} // Replace with your image path
              style={{ width: 40, height: 40, marginRight: 5 }}
            />
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
              මිලදී වියලි වී ප්‍රමානය

            </Text>
          </View>

          <Card.Content
            style={{
              borderRadius: 10,
              overflow: 'hidden',
              backgroundColor: 'white',
              marginTop: 5,
              padding: 5
            }}
          >
            <View style={{ flexDirection: 'column', margin: 4 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'flex-end' }}>
                <Text style={styles.buyText}>නාඩු</Text>
                <Text style={[styles.buyText, { marginLeft: 50 }]}>1000 KG</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2, }}>
                <Text style={styles.buyText}>සම්බා</Text>
                <Text style={[styles.buyText, { marginLeft: 50  }]}>1000 KG</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Text style={styles.buyText}>කීරි</Text>
                <Text style={[styles.buyText, { marginLeft: 50 }]}>1000 KG</Text>
              </View>
            </View>

          </Card.Content>
        </Card>





        {/* Buy & Sell Cards */}
        <Card style={styles.card}>
          <View style={{ margin: 5, flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/images/peasant.png')} // Replace with your image path
              style={{ width: 40, height: 40, marginRight: 8 }}
            />
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
              විකුනූ වියලි
              වී  ප්‍රමානය


            </Text>
          </View>


          <Card.Content
            style={{
              borderRadius: 10,
              overflow: 'hidden',
              backgroundColor: 'white',
              marginTop: 5,
              paddingTop: 5,
              marginBottom: 5
            }}
          >
            <View style={{ flexDirection: 'column', alignItems: 'flex-start', margin: 2 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
                <Text style={styles.buyText}>නාඩු</Text>
                <Text style={[styles.buyText, { marginLeft: 10 }]}>1000 KG</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
                <Text style={styles.buyText}>සම්බා</Text>
                <Text style={[styles.buyText, { marginLeft: 10 }]}>1000 KG</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.buyText}>කීරි</Text>
                <Text style={[styles.buyText, { marginLeft: 10 }]}>1000 KG</Text>
              </View>
            </View>

          </Card.Content>
        </Card>
      </View>

      <RingChart/>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { backgroundColor: "#F5F5F5", width: "99%", },
  row: { flexDirection: "row", justifyContent: "space-between", },
  card: { flex: 1, margin: 5, padding: 10, backgroundColor: "lightgreen" },
  buyText: { color: "black", fontWeight: "bold", },
  sellText: { color: "black", fontWeight: "bold", marginTop: 5, },
  chartCard: { marginTop: 5, padding: 15, backgroundColor: "lightgreen" },
  chartHeader: { flexDirection: "row", justifyContent: "space-between" },
  dateLabel: { backgroundColor: "white", padding: 5, borderRadius: 5 },
  chart: { borderRadius: 10, marginTop: 10 },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '49%', // Adjust width to fit both pickers in one row
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

