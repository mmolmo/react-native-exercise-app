import React from 'react';
import { StyleSheet, ImageBackground, Image, SafeAreaView, FlatList, Text, View, TouchableHighlight } from 'react-native';

import { Button } from '@rneui/themed';

import styles from './styles';

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

export default function App() {
  const renderItem = ({ item }) => (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => console.log( item.name + ' Pressed!')}
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
          source={{ uri: item.image }}
          style={StyleSheet.absoluteFillObject}
          blurRadius={2} // Optional
        />
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Button
        style={styles.button}
        title={item.name}
        onPress={() => console.log(item.name + ' button pressed')}
        />
      </View>
      </>
    </TouchableHighlight>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={exerciseData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}