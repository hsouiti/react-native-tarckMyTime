import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';



import { HomeScreen, SettingsScreen, trackScreen, StatisticsScreen } from '../screens'

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
        screen: trackScreen,
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
        }
    },
    Statistics: {
        screen: StatisticsScreen,
        navigationOptions: {
            tabBarLabel: SCREENS.STATISTICS,
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
        //backgroundColor: 'blue'
    }
}


const mainNavigator = createMaterialBottomTabNavigator(
    tabRoutesConfig,
    defaultBottomOptions

)

export default createAppContainer(mainNavigator)