import { StatusBar } from 'expo-status-bar';


import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons/';

import HomeScreen from './navigation/screens/HomeScreen';
import TargetScreen from './navigation/screens/TargetScreen';
import ProfileScreen from './navigation/screens/ProfileScreen'

const Tab = createMaterialBottomTabNavigator();

const App= () => {
  return (
    <NavigationContainer>
      <StatusBar style='auto'/>
     <Tab.Navigator
        initialRouteName='home'
        labeled={false} barStyle={{ backgroundColor: '#ebe6e6' }} 
        activeColor="#427ddb"
      >
        <Tab.Screen 
          name='home' 
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={30}/>
            ),
          }} 
        />
        <Tab.Screen 
          name='target' 
          component={TargetScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="target" color={color} size={30}/>
            ),
          }} 
        />
        <Tab.Screen 
          name='person' 
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={30}/>
            ),
          }} 
        />
     </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;