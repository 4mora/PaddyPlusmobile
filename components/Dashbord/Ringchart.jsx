import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { PieChart } from "react-native-svg-charts";
import { Text as SVGText } from "react-native-svg";

const RingChart = () => {
  // Sample data for first chart (Orders)
  const orderData = [
    {
      key: 1,
      value: 30,
      svg: { fill: '#4CAF50' },  // Green for Special Order
      arc: { outerRadius: '100%', innerRadius: '70%' }
    },
    {
      key: 2,
      value: 20,
      svg: { fill: '#2196F3' },  // Blue for Regular Order
      arc: { outerRadius: '100%', innerRadius: '70%' }
    },
    {
      key: 3,
      value: 25,
      svg: { fill: '#FFC107' },  // Yellow for Order Confirm
      arc: { outerRadius: '100%', innerRadius: '70%' }
    }
  ];

  // Sample data for second chart (Rice Types)
  const riceData = [
    {
      key: 1,
      value: 40,
      svg: { fill: '#FF6B6B' },  // Red for Samba
      arc: { outerRadius: '100%', innerRadius: '70%' }
    },
    {
      key: 2,
      value: 35,
      svg: { fill: '#4ECDC4' },  // Turquoise for Nadu
      arc: { outerRadius: '100%', innerRadius: '70%' }
    },
    {
      key: 3,
      value: 25,
      svg: { fill: '#45B7D1' },  // Blue for Kiri Samba
      arc: { outerRadius: '100%', innerRadius: '70%' }
    }
];

  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { pieCentroid, data } = slice;
      return (
        <SVGText
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="white"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={12}
        >
          {data.value}%
        </SVGText>
      );
    });
  };

  return (
    <View style={styles.mainContainer}>
      {/* First Chart */}
      <View style={styles.chartBox}>
        <Text style={styles.title}>Order Status</Text>
        <View style={styles.chartContainer}>
        <PieChart
            style={styles.chart}
            data={orderData}
            innerRadius={'70%'}
            outerRadius={'100%'}
        >
            <Labels/>
        </PieChart>
          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#4CAF50' }]} />
              <Text style={styles.legendText}>Special Order</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#2196F3' }]} />
              <Text style={styles.legendText}>Regular Order</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#FFC107' }]} />
              <Text style={styles.legendText}>Order Confirm</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Second Chart */}
      <View style={styles.chartBox}>
        <Text style={styles.title}>Expense</Text>
        <View style={styles.chartContainer}>
          <PieChart
            style={styles.chart}
            data={riceData}
            innerRadius={'70%'}
            outerRadius={'100%'}
          >
            <Labels/>
          </PieChart>
          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#FF6B6B' }]} />
              <Text style={styles.legendText}>Rice</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#4ECDC4' }]} />
              <Text style={styles.legendText}>Transport</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#45B7D1' }]} />
              <Text style={styles.legendText}>Salary</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 10,
  },
  chartBox: {
    width: '48%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  chartContainer: {
    alignItems: 'center',
  },
  chart: {
    height: 150,
    width: 150,
  },
  legend: {
    marginTop: 15,
    width: '100%',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 12,
    color: '#333',
  },
});

export default RingChart;
