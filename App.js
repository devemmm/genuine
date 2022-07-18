import React from 'react';
import { Image, View } from "react-native";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { themes } from "./src/constants/grobalVariable"

import { Provider as AppProvider } from './src/context/AppContext';
import SplashScreen from './src/screens/SplashScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import AccountScreen from './src/screens/AccountScreen';

const StackNavigation = createStackNavigator();
const ButtomTabNavigator = createBottomTabNavigator()


const MainScreen = () => {

  const setTabBarVisible = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    const hideOnScreens = [
      'HomeScreenn',
      'AccountScreenn'
    ];
    if (hideOnScreens.indexOf(routeName) > -1) return false;
    return true;
  };

  return (
    <ButtomTabNavigator.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarInactiveBackgroundColor: themes.PRIMARY,
        tabBarActiveBackgroundColor: themes.PRIMARY,
        tabBarStyle: { height: 55, elevation: 0 },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <ButtomTabNavigator.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={({ route }) => ({
          tabBarVisible: setTabBarVisible(route),
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Image
                  source={require("./assets/HomeBold.png")}
                  style={{ height: 26, width: 26, tintColor: themes.BRIGHT }}
                />
              ) : (
                <Image
                  source={require("./assets/Home.png")}
                  style={{ height: 26, width: 26, tintColor: themes.BRIGHT }}
                />
              )}
            </View>
          ),
        })}
      />
      <ButtomTabNavigator.Screen
        name='AccountScreen'
        component={AccountScreen}
        options={({ route }) => ({
          tabBarVisible: setTabBarVisible(route),
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Image
                  source={require("./assets/ProfileBold.png")}
                  style={{ height: 26, width: 26, tintColor: themes.BRIGHT }}
                />
              ) : (
                <Image
                  source={require("./assets/Profile.png")}
                  style={{ height: 26, width: 26, tintColor: themes.BRIGHT }}
                />
              )}
            </View>
          ),
        })}
      />
    </ButtomTabNavigator.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
        <StackNavigation.Screen name='SplashScreen' component={SplashScreen} />
        <StackNavigation.Screen name='SigninScreen' component={SigninScreen} />
        <StackNavigation.Screen name='SignupScreen' component={SignupScreen} />
        <StackNavigation.Screen name='MainScreen' component={MainScreen} />
      </StackNavigation.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  )
};