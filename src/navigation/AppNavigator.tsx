import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';



import { HomeScreen, SettingsScreen, TrackScreen, StatisticsScreen, TestScreen } from '../screens'

import { SCREENS } from '../global/screens'
import { Colors } from '../global/styles'

const iconSize = 25

const homeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        /*  navigationOptions: {
             tabBarLabel: SCREENS.HOME,
             tabBarIcon: ({ tintColor }: { tintColor: string }) => {
                 return <Icon name={'ios-home'} size={iconSize} color={tintColor} />
             }
         } */
    },
})

const tabRoutesConfig = {
    Home: homeStack,
    Track: {
        screen: TrackScreen,
        navigationOptions: {
            title: 'hhhhhhhhhhhh',
            tabBarLabel: SCREENS.TRACK,
            tabBarIcon: ({ tintColor }: { tintColor: string }) => {
                return <Icon name={'ios-clock'} size={iconSize} color={tintColor} />
            }
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            title: 'hhhhhhhhhhhh',
            tabBarLabel: SCREENS.SETTINGS,
            tabBarIcon: ({ tintColor }: { tintColor: string }) => {
                return <Icon name={'ios-options'} size={iconSize} color={tintColor} />
            },
            //tabBarColor: Colors.primaryColor

        }
    },
    Statistics: {
        screen: StatisticsScreen,
        navigationOptions: {
            title: 'hhhhhhhhhhhh',
            tabBarLabel: SCREENS.STATISTICS,
            tabBarIcon: ({ tintColor }: { tintColor: string }) => {
                return <Icon name={'ios-stats'} size={iconSize} color={tintColor} />
            }

        }
    }
}


const defaultBottomOptions = {
    activeColor: Colors.red,
    inactiveColor: Colors.lightGray,
    labeled: true,
    shifting: false,
    initialRouteName: SCREENS.HOME,
    barStyle: {
        backgroundColor: Colors.primaryColorLight
    }
}


const mainNavigator = createMaterialBottomTabNavigator(
    tabRoutesConfig,
    defaultBottomOptions

)

// Header Bar
const AppNav = createStackNavigator({
    main: mainNavigator,
    test: TestScreen
})

export default createAppContainer(AppNav)