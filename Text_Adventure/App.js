import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as ScreenOrientation from 'expo-screen-orientation';
import { StatusBar, Appearance } from 'react-native';
import { useEffect } from 'react';

import Start from './components/Story/Start';
import Forest from './components/Story/Forest';
import Tower from './components/Story/Tower';
import Deity from './components/Story/Deity';
import Wish from './components/Story/Wish';

import Floor_1 from './components/Story/Floors/Floor_1';
import Floor_2 from './components/Story/Floors/Floor_2';
import Floor_3 from './components/Story/Floors/Floor_3';
import RoofTop from './components/Story/Floors/RoofTop';

import Paper_1 from './components/Story/Papers/Paper_1';
import Paper_2 from './components/Story/Papers/Paper_2';
import Paper_3 from './components/Story/Papers/Paper_3';
import Paper_4 from './components/Story/Papers/Paper_4';
import Paper_5 from './components/Story/Papers/Paper_5';

import Room_1 from './components/Story/Rooms/Room_1';
import Room_2 from './components/Story/Rooms/Room_2';
import Room_3 from './components/Story/Rooms/Room_3';

import { Hell_1, Hell_2, Hell_3 } from './components/Factor/Hells';

import { 
  Home_1, Home_2, Home_3, Home_4, Home_5, 
  Home_6, Home_7, Home_8, Home_9, Home_10, 
  Home_11, Home_12, Home_13  
} from './components/Factor/Houses';

const Choice = createStackNavigator();

export default function App() {

  useEffect(() => { async function setLandscapeOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);} 
    setLandscapeOrientation(); 
    return () => { ScreenOrientation.unlockAsync(); }; 
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={Appearance.getColorScheme() === 'light' ? 'white' : 'black'}
        barStyle={Appearance.getColorScheme() === 'light' ? 'dark-content' : 'light-content'}
      />
      <Choice.Navigator screenOptions={{headerShown: false}}>   
        <Choice.Screen name="Start" component={Start} />
        <Choice.Screen name="Forest" component={Forest} />
        <Choice.Screen name="Tower" component={Tower} />
        <Choice.Screen name="Deity" component={Deity} />
        <Choice.Screen name="Wish" component={Wish} />

        <Choice.Screen name="Floor_1" component={Floor_1} />
        <Choice.Screen name="Floor_2" component={Floor_2} />
        <Choice.Screen name="Floor_3" component={Floor_3} />
        <Choice.Screen name="RoofTop" component={RoofTop} />

        <Choice.Screen name="Paper_1" component={Paper_1} />
        <Choice.Screen name="Paper_2" component={Paper_2} />
        <Choice.Screen name="Paper_3" component={Paper_3} />
        <Choice.Screen name="Paper_4" component={Paper_4} />
        <Choice.Screen name="Paper_5" component={Paper_5} />

        <Choice.Screen name="Room_1" component={Room_1} />
        <Choice.Screen name="Room_2" component={Room_2} />
        <Choice.Screen name="Room_3" component={Room_3} />

        <Choice.Screen name="Hell_1" component={Hell_1} />
        <Choice.Screen name="Hell_2" component={Hell_2} />
        <Choice.Screen name="Hell_3" component={Hell_3} />

        <Choice.Screen name="Home_1" component={Home_1} />
        <Choice.Screen name="Home_2" component={Home_2} />
        <Choice.Screen name="Home_3" component={Home_3} />
        <Choice.Screen name="Home_4" component={Home_4} />
        <Choice.Screen name="Home_5" component={Home_5} />
        <Choice.Screen name="Home_6" component={Home_6} />
        <Choice.Screen name="Home_7" component={Home_7} />
        <Choice.Screen name="Home_8" component={Home_8} />
        <Choice.Screen name="Home_9" component={Home_9} />
        <Choice.Screen name="Home_10" component={Home_10} />
        <Choice.Screen name="Home_11" component={Home_11} />
        <Choice.Screen name="Home_12" component={Home_12} />
        <Choice.Screen name="Home_13" component={Home_13} />
      </Choice.Navigator>
    </NavigationContainer>
  );
}

/*
        <Choice.Screen name="Start" component={Start} />
        <Choice.Screen name="Forest" component={Forest} />
        <Choice.Screen name="Tower" component={Tower} />
        <Choice.Screen name="Deity" component={Deity} />
        <Choice.Screen name="Wish" component={Wish} />

        <Choice.Screen name="Floor_1" component={Floor_1} />
        <Choice.Screen name="Floor_2" component={Floor_2} />
        <Choice.Screen name="Floor_3" component={Floor_3} />
        <Choice.Screen name="RoofTop" component={RoofTop} />

        <Choice.Screen name="Paper_1" component={Paper_1} />
        <Choice.Screen name="Paper_2" component={Paper_2} />
        <Choice.Screen name="Paper_3" component={Paper_3} />
        <Choice.Screen name="Paper_4" component={Paper_4} />
        <Choice.Screen name="Paper_5" component={Paper_5} />

        <Choice.Screen name="Room_1" component={Room_1} />
        <Choice.Screen name="Room_2" component={Room_2} />
        <Choice.Screen name="Room_3" component={Room_3} />

        <Choice.Screen name="Hell_1" component={Hell_1} />
        <Choice.Screen name="Hell_2" component={Hell_2} />
        <Choice.Screen name="Hell_3" component={Hell_3} />

        <Choice.Screen name="Home_1" component={Home_1} />
        <Choice.Screen name="Home_2" component={Home_2} />
        <Choice.Screen name="Home_3" component={Home_3} />
        <Choice.Screen name="Home_4" component={Home_4} />
        <Choice.Screen name="Home_5" component={Home_5} />
        <Choice.Screen name="Home_6" component={Home_6} />
        <Choice.Screen name="Home_7" component={Home_7} />
        <Choice.Screen name="Home_8" component={Home_8} />
        <Choice.Screen name="Home_9" component={Home_9} />
        <Choice.Screen name="Home_10" component={Home_10} />
        <Choice.Screen name="Home_11" component={Home_11} />
        <Choice.Screen name="Home_12" component={Home_12} />
        <Choice.Screen name="Home_13" component={Home_13} />
*/
