import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import RepetitionExercise from '../../exercises/RepetitionExercise';
import DurationExercise from '../../exercises/DurationExercise';
import WeightExercise from '../../exercises/WeightExercise';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RepetitionExercise" component={RepetitionExercise}/>
      <Stack.Screen name="DurationExercise" component={DurationExercise} />
      <Stack.Screen name="WeightExercise" component={WeightExercise} />
    </Stack.Navigator>
  );
};

export default HomeStack;
