import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { Icon, Button } from '@rneui/themed';
import RepetitionExercise from '../../exercises/RepetitionExercise';

// import { useNavigation } from '@react-navigation/native';

import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';

// import { View } from 'react-native';
// import { CheckBox } from '@rneui/themed';
import styles from '../../../styles'; // Import styles if in separate file

const ExerciseTitleHeader = ({ exercise }) => {

    const navigation = useNavigation();

    const navigateToWorkouts = () => {
        console.log( 'Back to workout Pressed!');
        navigation.navigate('WorkoutsScreen');
    };

  return (
    <View style={styles.exerciseTitleHeader}>
        <Button
            onPress={navigateToWorkouts}
            style={styles.backButton}
            type="clear"
        >
            <Icon
                name='arrow-back-outline'
                type='ionicon'
                color= '#fff'
                iconStyle={styles.backButtonIcon}
            />
        </Button>
        <View style= {{ 
            justifyContent: 'center' 
        }}>
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            <Text style={styles.greySubtitle}>{exercise.type}</Text>
        </View>
        <Icon
            name='ellipsis-vertical'
            type='ionicon'
            color= '#fff'
            iconStyle={styles.backButtonIcon}
        />
        
    </View>
  );
};

export default ExerciseTitleHeader;
