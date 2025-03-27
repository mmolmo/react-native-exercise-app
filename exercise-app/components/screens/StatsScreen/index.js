import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../../styles'; 

const StatsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.exerciseScreenH1}>Statistics</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={console.log("pressed")}
        >
          <Text style={styles.exerciseTitleHeader}>Daily Statistics</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={console.log("pressed")}
        >
          <Text style={styles.exerciseTitleHeader}>Weekly Statistics</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={console.log("pressed")}
        >
          <Text style={styles.exerciseTitleHeader}>Monthly Statistics</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default StatsScreen;