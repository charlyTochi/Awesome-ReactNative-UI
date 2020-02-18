import React from 'react';
import {Image, Dimensions} from 'react-native';
import { Card, Container,Button, Content, StyleProvider, Icon } from 'native-base';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {IMAGE} from './src/constants/Image'
import {createDrawerNavigator} from 'react-navigation-drawer';
import {SideMenu,FilterScreen,SplashScreen, HealthyFood, Meals, Flight, Feed, FeedDetail, Search, SearchDetail, Profile, Setting, Login, Register} from './src/component'



const navOptionHandler = (navigation) => ({
  header: null
})




const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: navOptionHandler
  },
  FeedDetail:{
    screen: FeedDetail,
    navigationOptions: navOptionHandler
  }
})

const SearchStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: navOptionHandler
  }
})



const MealStack = createStackNavigator({
  Meals: {
    screen: Meals,
    navigationOptions: navOptionHandler
  },
})


const FlightStack = createStackNavigator({
  Flight: {
    screen: Flight,
    navigationOptions: navOptionHandler
  },
})


const MainTabs = createBottomTabNavigator({
 
  Meals: {
    screen: MealStack,
    navigationOptions: {
      tabBarLabel: 'Delicacies',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="nutrition" />

      )
    }
  },


  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Banking',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="cash" />

      )
    }
  },

  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" />

      )
      }
     },

       Flight: {
        screen: FlightStack,
        navigationOptions: {
          tabBarLabel: 'Flight',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="airplane" />
          )
          }
         },

    });


    const MainStack = createStackNavigator({
      Home: { 
        screen: MainTabs,
        navigationOptions: navOptionHandler
      },

   

      Splash: {
        screen: SplashScreen,
        navigationOptions: navOptionHandler
      },
      Setting: {
        screen: Setting,
        navigationOptions: navOptionHandler
      },
      HealthyFood: {
        screen: HealthyFood,
        navigationOptions: navOptionHandler
      },
      

      filter: {
        screen: FilterScreen,
        navigationOptions: navOptionHandler
      },

      Profile: {
        screen: Profile,
         navigationOptions :{
          drawerIcon:(
            <Image source={require('./src/image/c.jpg')} style={{height: 120, width: 120, borderRadius: 60}}/>
            // <Icon  name="arrow-back" style={{height: 24, width: 24}}/>
          )
        }
        
      }
    },

   

      {initialRouteName: 'Splash'})



    const appDrawer = createDrawerNavigator(
      {
        drawer: MainStack
      },
      {
        contentComponent: SideMenu,
        drawerWidth: Dimensions.get('window').width * 3/4
      }
    )


    const authStack = createStackNavigator({
      Login: {
        screen: Login,
        navigationOptions: navOptionHandler
      },
      Register: {
        screen: Register,
        navigationOptions: navOptionHandler
      }
    })


    const Mainapp = createSwitchNavigator(
      {
        app: appDrawer,
        auth: authStack
      },
      {
        initialRouteName: 'app'
      }
    )


const AppNavigator = createAppContainer(Mainapp);

export default class App extends React.Component {
  render(){
    return(
      <AppNavigator/>
    )
  }
}