import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';



import { HomeScreen, SettingsScreen, TrackScreen, StatisticsScreen } from '../screens'

import { SCREENS } from '../global/screens'
import { Colors } from '../global/styles'

const iconSize = 25

const tabRoutesConfig = {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: SCREENS.HOME,
            tabBarIcon: ({ tintColor }: { tintColor: string }) => {
                return <Icon name={'ios-home'} size={iconSize} color={tintColor} />
            }
        }
    },
    Track: {
        screen: TrackScreen,
        navigationOptions: {
            tabBarLabel: SCREENS.TRACK,
            tabBarIcon: ({ tintColor }: { tintColor: string }) => {
                return <Icon name={'ios-clock'} size={iconSize} color={tintColor} />
            }
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: SCREENS.SETTINGS,
            tabBarIcon: ({ tintColor }: { tintColor: string }) => {
                return <Icon name={'ios-options'} size={iconSize} color={tintColor} />
            }

        }
    },
    Statistics: {
        screen: StatisticsScreen,
        navigationOptions: {
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

    }
}


const mainNavigator = createMaterialBottomTabNavigator(
    tabRoutesConfig,
    defaultBottomOptions

)

// Header Bar
const AppNav = createStackNavigator({
    main: mainNavigator
})

export default createAppContainer(AppNav)