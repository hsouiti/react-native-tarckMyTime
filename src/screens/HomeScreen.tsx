import React from 'react'
import { View, Text } from 'react-native'

import { SCREENS } from '../global/screens'

const HomeScreen = () => {
    return (
        <View>
            <Text>Home Screen</Text>
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
