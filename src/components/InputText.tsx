import React from 'react'
import { View, TextInput } from 'react-native'

import { input, inputHolder } from '../global/styles'


const InputText: React.FC<{ placeholder: string }> = ({ placeholder }) => {
    return (
        <View style={inputHolder}>
            <TextInput style={input} placeholder={placeholder} />
        </View>
    )
}


export default InputText