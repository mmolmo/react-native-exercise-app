import React from 'react';
import { StyleSheet, ImageBackground, Image, SafeAreaView, FlatList, Text, View, TouchableHighlight } from 'react-native';

import { Button } from '@rneui/themed';

import styles from './styles';

import BottomNavbar from './components/nav/BottomNavbar';
import { NavigationContainer, useNavigation } from '@react-navigation/native';



// export default function App() {
//   const [currentScreen, setCurrentScreen] = useState('MainScreen');

//   const renderScreen = () => {
//     switch (currentScreen) {
//       case 'HomeScreen':
//         return <HomeScreen navigateTo={setCurrentScreen} />;
//       case 'StatsScreen':
//         return <StatsScreen navigateTo={setCurrentScreen} />;
//       default:
//         return <HomeScreen navigateTo={setCurrentScreen} />;
//     }
//   };

//   return <>{renderScreen()}</>;
// }


export default function App() {
  return (
    <NavigationContainer>
      <BottomNavbar />
    </NavigationContainer>
  );
}
