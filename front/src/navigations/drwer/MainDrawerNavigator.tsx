import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import CalenderHomeScreen from '../../screens/calendar/CalenderHomeScreen';
import FeedHomeScreen from '../../screens/feed/FeedHomeScreen';
import MapHomeScreen from '../../screens/map/MapHomeScreen';

const Drawer = createDrawerNavigator();
function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
      <Drawer.Screen name="CalenderHome" component={CalenderHomeScreen} />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;
