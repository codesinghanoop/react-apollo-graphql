/* @flow */
import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Icon from '@components/Icon';
import ProfileList from '@scene/ProfileList';
import FavList from '@scene/FavList';
import Login from '@scene/Login'
import ProfileDetails from '@scene/ProfileList/ProfileDetails'
import { USER_SEARCH_ICON, LIST_ICON } from '@constants/Icon'
import Colors from '@themes/Colors'

const MainStack = createBottomTabNavigator(
  {
    ProfileList: {
      screen: ProfileList,
      navigationOptions: {
        tabBarIcon: Icon(USER_SEARCH_ICON, Colors.primary),
        title: 'Discover',
      },
    },
    FavList: {
      screen: FavList,
      navigationOptions: {
        tabBarIcon: Icon(LIST_ICON, Colors.primary),
        title: 'Favorites',
      },
    },
  },
  {
    initialRouteName: 'ProfileList',
    shifting: false,
    keyboardHidesNavigationBar: false,
  }
);



export default createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: MainStack,
        navigationOptions: {
          header: null,
        },
      },
      Login: {
        screen: Login,
      },
      ProfileDetails: {
        screen: ProfileDetails,
      },
    },
    {
      initialRouteName: 'Login',
      headerMode: 'screen',
      mode: 'modal',
      defaultNavigationOptions: {
        gesturesEnabled: false,
      },
    }
  )
);
