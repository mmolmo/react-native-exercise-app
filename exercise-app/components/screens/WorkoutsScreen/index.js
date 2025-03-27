import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styles from '../../../styles';

export default function HomeScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 'bold' }}>
          Ready to workout?
        </Text>
        <Text style={{ color: '#B0B0B0', fontSize: 16, marginTop: 8 }}>
          Motivation is key to success
        </Text>
      </View>
    </SafeAreaView>
  );
}