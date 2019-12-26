import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';



import { HomeScreen, SettingsScreen, TrackScreen, StatisticsScreen } from '../screens'

import { SCREENS } from '../global/screens'
import { Colors } from '../global/styles'

const iconSize = 25

const homeStack = createStackNavigator(
    {HomeScreen},
    {
        navigationOptions: {
            tabBarLabel: SCREENS.HOME,
            tabBarIcon: ({ tintColor }: { tintColor: string }) => {
                return <Icon name={'ios-home'} size={iconSize} color={tintColor} />
            }
        }  
    }
)    

const trackStack = createStackNavigator(
    { TrackScreen}, 
    {
        navigationOptions: {
            tabBarLabel: SCREENS.TRACK,
            tabBarIcon: ({ tintColor }: { tintColor: string }) => {
                return <Icon name={'ios-clock'} size={iconSize} color={tintColor} />
            }
        }  
    }

)  

const settingsStack = createStackNavigator(
     {SettingsScreen},
{
        navigationOptions: {
            title: 'hhhhhhhhhhhh',
            tabBarLabel: SCREENS.SETTINGS,
            tabBarIcon: ({ tintColor }: { tintColor: string }) => {
                return <Icon name={'ios-options'} size={iconSize} color={tintColor} />
            },
            //tabBarColor: Colors.primaryColor

        }
    }
    )

const  statisticsStack = createStackNavigator(
{StatisticsScreen},
 {
    navigationOptions: {
        title: 'hhhhhhhhhhhh',
        tabBarLabel: SCREENS.STATISTICS,
        tabBarIcon: ({ tintColor }: { tintColor: string }) => {
            return <Icon name={'ios-stats'} size={iconSize} color={tintColor} />
        }
    }
}
)


const tabStack = {
    homeStack,    
    trackStack,
    settingsStack,
    statisticsStack
}


const defaultBottomOptions = {
    activeColor: Colors.red,
    inactiveColor: Colors.lightGray,
    labeled: true,
    shifting: false,
    barStyle: {
        backgroundColor: Colors.primaryColorLight
    }
}


const mainNavigator = createMaterialBottomTabNavigator(
    tabStack,
    defaultBottomOptions
) 


export default createAppContainer(mainNavigator)