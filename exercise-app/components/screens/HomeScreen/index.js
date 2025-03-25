  import React, { useState } from 'react';
  import { SafeAreaView, ScrollView, FlatList, View, Text, TouchableOpacity, Image } from 'react-native';
  import { LinearGradient } from 'expo-linear-gradient';
  import styles from '../../../styles';
  
  export default function HomeScreen() {
    const [workouts] = useState([
      { id: '1', title: 'Full Body Workout', duration: '45 min', calories: '400', image: 'https://images.unsplash.com/photo-1603503364272-6e28e046b37a' },
      { id: '2', title: 'Cardio Blast', duration: '30 min', calories: '300', image: 'https://images.unsplash.com/photo-1603503364272-6e28e046b37a'},
      { id: '3', title: 'Strength Training', duration: '50 min', calories: '450', image: 'https://images.unsplash.com/photo-1603503364272-6e28e046b37a' },
    ]);
  
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          backgroundColor: '#2A2A2A',
          borderRadius: 15,
          padding: 15,
          marginVertical: 8,
          marginHorizontal: 16,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={item.image}
            style={{ width: 80, height: 80, borderRadius: 10 }}
          />
          <View style={{ marginLeft: 15, flex: 1 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>
              {item.title}
            </Text>
            <Text style={{ color: '#B0B0B0', marginTop: 5 }}>
              ⏱ {item.duration} • 🔥 {item.calories} cal
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
        <LinearGradient
          colors={['#1A1A1A', '#121212']}
          style={{ flex: 1, paddingTop: 20 }}>
          <View style={{ padding: 16 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 'bold' }}>
              Welcome back!
            </Text>
            <Text style={{ color: '#B0B0B0', fontSize: 16, marginTop: 8 }}>
              Let's crush your fitness goals today
            </Text>
          </View>
  
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            padding: 16,
            marginBottom: 10 
          }}>
            <View style={{
              backgroundColor: '#2A2A2A',
              borderRadius: 12,
              padding: 15,
              flex: 1,
              marginRight: 8,
              alignItems: 'center'
            }}>
              <Text style={{ color: '#B0B0B0' }}>Weekly Goal</Text>
              <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>
                4/5 days
              </Text>
            </View>
            <View style={{
              backgroundColor: '#2A2A2A',
              borderRadius: 12,
              padding: 15,
              flex: 1,
              marginLeft: 8,
              alignItems: 'center'
            }}>
              <Text style={{ color: '#B0B0B0' }}>Calories</Text>
              <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>
                1,200 kcal
              </Text>
            </View>
          </View>
  
          <Text style={{ 
            color: '#FFFFFF', 
            fontSize: 20, 
            fontWeight: 'bold', 
            marginLeft: 16, 
            marginBottom: 10 
          }}>
            Recommended Workouts
          </Text>
  
          <FlatList
            data={workouts}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </LinearGradient>
      </SafeAreaView>
    );
  }
  
//   import React, { useState } from 'react';

// import { SafeAreaView, ScrollView, FlatList } from 'react-native';

// import styles from '../../../styles'; // Assuming styles are in a separate file

// export default function HomeScreen() {
//     const renderItem = ({ item }) => (
      
//     );
  
//     return (
//       <SafeAreaView style={styles.container}>
        
//       </SafeAreaView>
//     );
//   }