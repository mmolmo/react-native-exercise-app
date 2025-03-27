import React, { useState, useEffect } from 'react';
import { SafeAreaView, ImageBackground, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ExerciseTitleHeader from '../../elements/ExerciseTitleHeader';
import RecommendedExercise from '../../elements/RecommendedExercise';


import { Button, Icon, Slider } from '@rneui/themed';

import styles from '../../../styles'; 

const WeightExercise = () => {
  const route = useRoute();
  const { exercise, allExercises } = route.params;  // Retrieve the passed exercise data
    
  const [count, setCount] = useState(0);
  const [weight, setWeight] = useState(0);

  useEffect(() => {
    setCount(0);
    setWeight(0);
  }, [exercise]);

  const addWeight = () => {
    setWeight(weight => weight + 5);
  };
  
  const subtractWeight = () => {
    weight<=0 ? setWeight(0) 
    : setWeight(weight => weight - 5)
  };

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
          <View style={styles.ExerciseWeightContainer}>
            <Text style={styles.exerciseTitleHeader}>Weight</Text>
              <View style={styles.exerciseButtonsContainer}>
                
                <Button
                  onPress={subtractWeight}
                  buttonStyle={styles.greyExerciseButton}
                >
                  <Icon
                    name='remove-outline'
                    type='ionicon'
                    color= '#fff'
                    iconStyle={styles.backButtonIcon}
                  />
                </Button>
                <View style= {{ 
                  justifyContent: 'center',
                }}>
                  
                  <Text style={styles.exerciseTextBold}>{weight}</Text>
                </View>
                <Button
                  onPress={addWeight}
                  buttonStyle={styles.greyExerciseButton}
                >
                  <Icon
                    name='add-outline'
                    type='ionicon'
                    color= '#fff'
                    iconStyle={styles.backButtonIcon}
                  />
                </Button>
              </View>
              <Slider value={weight}
                onValueChange={setWeight}
                maximumValue={200}
                minimumValue={0}
                step={5}
                thumbProps={{
                  children: (
                    <Icon
                      name="barbell-outline"
                      type="ionicon"
                      size={20}
                      containerStyle={{ bottom: -10, right: 0 }}
                      color= '#fff'
                    />
                  ),
                }}
                >
              </Slider>
          </View>
          <View style={styles.ExerciseWeightContainer}>
          <View style= {{ 
              justifyContent: 'center',
            }}>
              <Text style={styles.exerciseTitleHeader}>Reps</Text>
              <Text style={styles.exerciseTextBold}>{count}</Text>
            </View>
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
        </View>
        <RecommendedExercise allExercises={allExercises} exercise={exercise} style={styles.exerciseFooter}/>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WeightExercise;
