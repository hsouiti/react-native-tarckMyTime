import React from 'react'
import { View, Text } from 'react-native'

import { SCREENS } from '../global/screens'
import Categories from './CategoriesScreen'
const HomeScreen = () => {
    return (
        <View>
            <Categories />
        </View>
    )
}


//({ navigation }: { navigation: any })
HomeScreen.navigationOptions = () => {
    return {
        title: SCREENS.HOME
    }
}


export default HomeScreen
