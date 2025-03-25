import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TouchableHighlight, Image, StyleSheet, Text } from 'react-native';
import { Icon } from '@rneui/themed';
import RepetitionExercise from '../../exercises/RepetitionExercise';

// import { useNavigation } from '@react-navigation/native';

import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';

// import { View } from 'react-native';
// import { CheckBox } from '@rneui/themed';
import styles from '../../../styles'; // Import styles if in separate file

const ExerciseNavCard = ({ exercise }) => {

    const navigation = useNavigation();
    const exerciseScreens = {
        repetition: 'RepetitionExercise',
        duration: 'DurationExercise',
        weight: 'WeightExercise'
        // Add other exercise types if necessary
    };

    const navigateToExercise = () => {
        
        const exerciseType = exercise.type;
        const screenName = exerciseScreens[exercise.type];
        console.log( exerciseType + ' Pressed!');
        if (screenName) {
            console.log(`${screenName} Pressed! Navigating to ${screenName}`);
            navigation.navigate(screenName, { exercise: exercise });
        } else {
            console.warn(`No screen found for exercise type: ${exercise.type}`);
        }
    };

  return (
    <>
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={navigateToExercise}
            style={styles.exerciseTouchableHighlight}
            >
            <>
            {/* <ImageBackground
            source={{ uri: item.image }}
            resizeMode="cover"
            style={styles.exerciseCard}
            >
            <Button
            style={styles.button}
            title={item.name}
            onPress={() => console.log(item.name + ' button pressed')}
            />
            </ImageBackground> */}
            <View style={styles.exerciseCard}>
            <Image
                source={{ uri: exercise.image }}
                style={StyleSheet.absoluteFillObject}
                blurRadius={2} // Optional
            />
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            <Icon
                name='trash-outline'
                type='ionicon'
                // iconStyle={styles.trashIcon}
                // onPress={() => handleDeleteTask(item.key)}
            />
            </View>
            </>
        </TouchableHighlight>
    </>
  );
};

export default ExerciseNavCard;
