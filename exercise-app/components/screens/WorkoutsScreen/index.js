import React, { useState } from 'react';

import { SafeAreaView, Text, FlatList } from 'react-native';

import ExerciseNavCard from '../../elements/ExerciseNavCard';


import styles from '../../../styles'; // Assuming styles are in a separate file

const exerciseData = [
  {
    id: "pushups",
    name: "Push Ups",
    type: "repetition",
    image: "https://images.unsplash.com/photo-1603503364272-6e28e046b37a",
  },
  {
    id: 'jumpingjacks',
    name: 'Jumping Jacks',
    type: 'repetition',
    image: "https://images.unsplash.com/photo-1510487156526-04f33237c1e6",
  },
  {
    id: 'running',
    name: 'Running',
    type: 'duration',
    image: 'https://plus.unsplash.com/premium_photo-1679938885972-180ed418f466',
  },
  {
    id: 'plank',
    name: 'Plank',
    type: 'duration',
    image: 'https://plus.unsplash.com/premium_photo-1672352100050-65cb2ee4d818',
  }, 
  {
    id: 'benchpress',
    name: 'Bench Press',
    type: 'weight',
    image: 'https://images.unsplash.com/photo-1534368420009-621bfab424a8',
  }  
];

export default function WorkoutsScreen() {
    const renderItem = ({ item }) => (
      <ExerciseNavCard
        key={item.key} // Ensure unique key
        exercise={item}
        allExercises={exerciseData}
      />
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 'bold' }}>
          Welcome back!
        </Text>
        <Text style={{ color: '#B0B0B0', fontSize: 16, marginTop: 8 }}>
          Let's crush your fitness goals today
        </Text>
        <Text style={styles.exerciseTitleHeader}>
          Exercises for You
        </Text>
        <FlatList 
          data={exerciseData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }