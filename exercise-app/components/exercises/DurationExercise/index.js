import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SafeAreaView, ImageBackground, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ExerciseTitleHeader from '../../elements/ExerciseTitleHeader';
import RecommendedExercise from '../../elements/RecommendedExercise';

import { Button, Icon } from '@rneui/themed';

import styles from '../../../styles'; 

const DurationExercise = () => {
  const route = useRoute();
  const { exercise, allExercises } = route.params;

  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);
  const startTimeRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    setTimer(0);
    setStart(false);
    startTimeRef.current = 0; 
  }, [exercise]); // Reset count when the exercise changes

  // uses useRef and usecallback to avoid unnecessary re-renders... fixes the issue of Expo App RN throwing too many renders error
  // original start function was a usestate hook which triggered a rerender on every state change (every 10 milliseconds)
  // useRef is used to store the current value of the timer instead, and useCallback is used to memoize the function so that it only changes when the start state changes
  useEffect(() => {
    if (start) {
      if (startTimeRef.current === 0) {
        startTimeRef.current = Date.now() - timer;
      }

      intervalRef.current = setInterval(() => {
        setTimer(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [start]);

  const handleReset = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimer(0);
    // ensures that the timer is reset to 0 when the user presses the reset button
    setStart(false);
    console.log("reset", intervalRef.current);
    startTimeRef.current = start ? Date.now() : 0;
  }, [start]);

  const formatTime = (time) => String(Math.floor(time)).padStart(2, "0");

  let hours = Math.floor(timer / (1000 * 60 * 60));
  let minutes = Math.floor((timer / (1000 * 60)) % 60);
  let seconds = Math.floor((timer / 1000) % 60);

  return (
    <SafeAreaView style={styles.ExerciseScreenContainer}>
      <ImageBackground source={{ uri: exercise.image}} resizeMode="cover" style={styles.exerciseBgImage}>
        <View style={styles.ExerciseOverlay}>
        <ExerciseTitleHeader exercise={exercise}/> 
          <View style={styles.exerciseContainer}>
            <Text style={styles.exerciseDurTextBold}>{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</Text>
            <View style={styles.exerciseButtonsContainer}>
            
              {/* <Button
                onPress={() => setStart((prev) => !prev)}
                buttonStyle={styles.greyExerciseButton}
              >
                <Icon
                  name='remove-outline'
                  type='ionicon'
                  color= '#fff'
                  iconStyle={styles.backButtonIcon}
                />
              </Button> */}

              {/* note to self: fix clear interval button when playing edge case.*/}

              <Button
                onPress={() => setStart((prev) => !prev)}
                buttonStyle={start ? styles.durPlayingButton : styles.repAddCountButton }
              >
                <Icon
                  name={start ? 'pause-outline' : 'play-outline'}
                  type='ionicon'
                  color= '#fff'
                  iconStyle={styles.backButtonIcon}
                />
              </Button>

              <Button
                onPress={handleReset}
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

export default DurationExercise;
