import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import StatsScreen from '../../screens/StatsScreen';
import HomeStack from '../../nav/HomeStack';
import { Icon } from '@rneui/themed';
import WorkoutsScreen from '../../screens/WorkoutsScreen';

const Tab = createBottomTabNavigator();

const BottomNavbar = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
          
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000',
        }, 
        tabBarActiveTintColor: '#ff2e2e',
        tabBarInactiveTintColor: '#8B8B90',
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon 
            name="home" 
            type='ionicon'
            color={color} 
            size={size} 
            />
        ),
      }} />
      <Tab.Screen name="Workouts" component={WorkoutsScreen} options ={{
        tabBarIcon: ({ color, size }) => (
          <Icon
            name="fitness"
            type='ionicon'
            color={color}
            size={size}
            />
        ),
      }} />
      
      <Tab.Screen name="Stats" component={StatsScreen} options ={{
        tabBarIcon: ({ color, size }) => (
          <Icon
            name="stats-chart"
            type='ionicon'
            color={color}
            size={size}
            />
        ),
      }} />

    </Tab.Navigator>
  );
}

export default BottomNavbar;