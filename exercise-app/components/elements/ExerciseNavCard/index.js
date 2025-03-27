import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../../styles';
import { BackgroundImage, Icon, Button } from '@rneui/base';

const ExerciseNavCard = ({ exercise, allExercises }) => {
  const navigation = useNavigation();
  const exerciseScreens = {
    repetition: 'RepetitionExercise',
    duration: 'DurationExercise',
    weight: 'WeightExercise'
  };

  const navigateToExercise = () => {
    const screenName = exerciseScreens[exercise.type];
    if (screenName) {
      // console.log(`${screenName} Pressed! Navigating to ${screenName}`);
      navigation.navigate(screenName, { exercise: exercise, allExercises: allExercises });
    } else {
      console.warn(`No screen found for exercise type: ${exercise.type}`);
    }
  };

  return (
    <View style={styles.exerciseCard} onPress={navigateToExercise}>
      <BackgroundImage
        source={{ uri: exercise.image }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={2}
        resizeMode="cover"
        opacity={0.75}
      />
      <View >
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        
        <Text style={styles.cardGreySubtitle}>{exercise.type}</Text>
      </View>
      <Button
        title={`Start `}
        onPress={navigateToExercise}
        color="tomato"
        buttonStyle={styles.exerciseCardButton}
        accessibilityLabel={`Start ${exercise.name}`}>
        <Icon
        name='arrow-forward-outline'
        type='ionicon'
        color= '#fff'
        iconStyle={styles.exerciseCardIcon}
        />
      </Button>
    </View>
  );
};

export default ExerciseNavCard;