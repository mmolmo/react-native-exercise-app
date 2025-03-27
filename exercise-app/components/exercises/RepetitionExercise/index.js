import React, { useState } from 'react';
import { SafeAreaView, ImageBackground, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ExerciseTitleHeader from '../../elements/ExerciseTitleHeader';
import RecommendedExercise from '../../elements/RecommendedExercise';

import { Button, Icon } from '@rneui/themed';

import styles from '../../../styles'; 

const RepetitionExercise = () => {
  const route = useRoute();
  const { exercise, allExercises } = route.params; // Retrieve the passed exercise data
  
  const [count, setCount] = useState(0);

  const setReps = () => {
    setCount(count => count + 1);
  };
  
  const subtractReps = () => {
    count<=0 ? setCount(0) 
    : setCount(count => count - 1)
  };

  const resetReps = () => {
    setCount(count => 0);
  };

  return (
    <SafeAreaView style={styles.ExerciseScreenContainer}>
      <ImageBackground source={{ uri: exercise.image}} resizeMode="cover" style={styles.exerciseBgImage}>
        <View style={styles.ExerciseOverlay}>
        <ExerciseTitleHeader exercise={exercise}/> 
          <View style={styles.exerciseContainer}>
            <Text style={styles.exerciseTextBold}>{count}</Text>
            <View style={styles.exerciseButtonsContainer}>
            
              <Button
                onPress={subtractReps}
                buttonStyle={styles.greyExerciseButton}
              >
                <Icon
                  name='remove-outline'
                  type='ionicon'
                  color= '#fff'
                  iconStyle={styles.backButtonIcon}
                />
              </Button>

              <Button
                onPress={setReps}
                buttonStyle={styles.repAddCountButton}
              >
                <Icon
                  name='add-outline'
                  type='ionicon'
                  color= '#fff'
                  iconStyle={styles.backButtonIcon}
                />
              </Button>

              <Button
                onPress={resetReps}
                buttonStyle={styles.greyExerciseButton}
              >
                <Icon
                  name='refresh-outline'
                  type='ionicon'
                  color= '#fff'
                  iconStyle={styles.backButtonIcon}
                />
              </Button>
            </View>
          </View>
        <RecommendedExercise allExercises={allExercises} exercise={exercise} style={styles.exerciseFooter}/>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default RepetitionExercise;
