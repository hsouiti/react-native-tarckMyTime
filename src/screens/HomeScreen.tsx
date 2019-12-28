import React from 'react'
import { View, Text } from 'react-native'

import { SCREENS } from '../global/screens'
import { globalContainer } from '../global/styles'
import Categories from '../components/Categories'

const HomeScreen = () => {
    return (
        <View style={globalContainer}>
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
