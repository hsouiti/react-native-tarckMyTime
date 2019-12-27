import React from 'react'
import { View, Text } from 'react-native'

import { categoryType } from '../types'

const Category: React.FC<categoryType> = ({ id, title, color }) => {
    return (
        <View>
            <Text style={{ color: color }}>Cat => {id} - {title} - {color}</Text>
        </View>
    )
}

export default Category
