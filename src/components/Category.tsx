import React from 'react'
import { View, Text } from 'react-native'

import { categoryType } from '../types'

const Category: React.FC<categoryType> = ({ id, title, color }) => {
    return (
        <View style={{ borderBottomWidth: 1, borderColor: 'grey', padding: 10 }}>
            <Text style={{ color: color }}>Cat ::=> {id} - {title}</Text>
        </View>
    )
}

export default Category
