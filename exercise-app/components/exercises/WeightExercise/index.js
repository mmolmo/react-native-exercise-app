import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ExerciseTitleHeader from '../../elements/ExerciseTitleHeader';
import RecommendedExercise from '../../elements/RecommendedExercise';

import styles from '../../../styles'; 

const WeightExercise = () => {
  const route = useRoute();
  const { exercise, allExercises } = route.params;  // Retrieve the passed exercise data
    
  console.log('Received exercise data:', exercise);
  console.log('Received all exercises data:', allExercises);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ExerciseTitleHeader exercise={exercise} />
        <Text style={styles.exerciseScreenH1}>text here</Text>
        <RecommendedExercise allExercises={allExercises} exercise={exercise} />
      </View>
    </SafeAreaView>
  );
};

export default WeightExercise;
