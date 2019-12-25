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

HomeScreen.navigationOptions = ({ navigation }: { navigation: any }) => {
    console.log(navigation)
    return {
        title: SCREENS.HOME
    }
}


export default HomeScreen
