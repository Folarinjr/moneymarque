import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import TargetScreen from './screens/TargetScreen'

const MainContainer = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
  });

export default MainContainer;