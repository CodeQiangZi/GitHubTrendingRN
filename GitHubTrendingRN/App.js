/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './js/page/HomePage';
import FavoritePage from './js/page/FavoritePage';
import MyPage from './js/page/MyPage';
import PopularPage from './js/page/PopularPage';
import TrendingPage from './js/page/TrendingPage';

const Tab = createBottomTabNavigator();

const App: () => Node = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="FavoritePage" component={FavoritePage}/>
                <Tab.Screen name="MyPage" component={MyPage}/>
                <Tab.Screen name="PopularPage" component={PopularPage}/>
                <Tab.Screen name="TrendingPage" component={TrendingPage}/>
                <Tab.Screen name="HomePage" component={HomePage}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
