import React from 'react'
import { FlatList, Text } from 'react-native'

import { categoryType } from '../types'
import { SCREENS } from '../global/screens'
import Category from '../components/Category'

import { CATEGORIES } from '../data/data'

const CategoriesScreen = () => {
    const renderCategory = ({ item }) => {
        return <Category key={item.id} id={item.id} title={item.title} color={item.color} />
    }

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderCategory}
        />
    )
}

CategoriesScreen.navigationOptions = {
    title: SCREENS.CATEGORIES
}


export default CategoriesScreen 