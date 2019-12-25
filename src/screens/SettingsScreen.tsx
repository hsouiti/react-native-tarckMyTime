import React from 'react'
import { View, Text } from 'react-native'

import { SCREENS } from '../global/screens'

const SettingsScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings Screen</Text>
        </View>
    )
}


/* SettingsScreen.navigationOptions = {
    headerTitle: SCREENS.SETTINGS
} */


export default SettingsScreen  
