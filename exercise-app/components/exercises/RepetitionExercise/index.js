import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ExerciseTitleHeader from '../../elements/ExerciseTitleHeader';

import styles from '../../../styles'; 

const RepetitionExercise = () => {
  const route = useRoute();
  const { exercise } = route.params; // Retrieve the passed exercise data
  
  console.log('Received exercise data:', exercise);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ExerciseTitleHeader exercise={exercise} />
        <Text style={styles.exerciseScreenH1}>text here</Text>
      </View>
    </SafeAreaView>
  );
};

export default RepetitionExercise;
