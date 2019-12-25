import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import { HomeScreen, SettingsScreen, trackScreen, StatisticsScreen } from '../screens'

import { SCREENS } from '../global/screens'


const tabScreensConfig = {
    Home: {
        screen: HomeScreen
    },
    Track: {
        screen: trackScreen
    },
    Settings: {
        screen: SettingsScreen
    },
    Statistics: {
        screen: StatisticsScreen
    }

}


const mainNavigator = createMaterialBottomTabNavigator(tabScreensConfig)

export default createAppContainer(mainNavigator)