import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from '@rneui/themed';

// import { useNavigation } from '@react-navigation/native';

import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';

// import { View } from 'react-native';
// import { CheckBox } from '@rneui/themed';
import styles from '../../../styles'; // Import styles if in separate file

const RecommendedExercise = ({ allExercises, exercise }) => {

    const navigation = useNavigation();

    
    const exerciseScreens = {
        repetition: 'RepetitionExercise',
        duration: 'DurationExercise',
        weight: 'WeightExercise'
    };
    // console.log("rec exercise", exercise.id);
    // console.log(allExercises);

    // console.log();

    // console.log(allExercises.indexOf("bison"));
    const CurrentExerciseIndex = allExercises.findIndex(ex => ex.id === exercise.id);
    const RecExercise = CurrentExerciseIndex >= allExercises.length-1 
        ? allExercises[0] 
        : allExercises[ CurrentExerciseIndex + 1 ];

    // console.log("found," , RecExercise);

    const navigateToExercise = () => {
        // console.log( 'exercise', RecExercise );
        const exerciseType = RecExercise.type;
        const screenName = exerciseScreens[RecExercise.type];
        // console.log( exerciseType + ' Pressed!');
        if (screenName) {
            console.log(`${screenName} Pressed! Navigating to ${screenName}`);
            navigation.navigate(screenName, { exercise: RecExercise, allExercises: allExercises });
        } else {
            console.warn(`No screen found for exercise type: ${RecExercise.type}`);
        }
    };

  return (
    <View style={styles.exerciseFooter}>
        <Button
            onPress={navigateToExercise}
            title="Next"
            color= '#fff'
            buttonStyle={styles.recButton}
            type="outline"
        >
            To {RecExercise.name} ( {RecExercise.type} exercise ) 
            <Icon
                name='barbell-outline'
                type='ionicon'
                color= '#fff'
                iconStyle={styles.backButtonIcon}
            />
        </Button>
    </View>
  );
};

export default RecommendedExercise;
