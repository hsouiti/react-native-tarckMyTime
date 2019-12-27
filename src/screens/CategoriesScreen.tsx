import React from 'react'
import { FlatList, Text, SafeAreaView, View } from 'react-native'

import { categoryType } from '../types'
import { SCREENS } from '../global/screens'
import Category from '../components/Category'
import { CATEGORIES } from '../data/data'


///{ id: string, title: string, color: string } 
const CategoriesScreen = () => {
    const renderItem = ({ item }: { item: categoryType }) => {
        const { id, title, color } = item
        return <Category key={id} id={id} title={title} color={color} />
    }

    return (
        <SafeAreaView>
            <View>
                <Text>Categories</Text>
            </View>
            <FlatList
                data={CATEGORIES}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

CategoriesScreen.navigationOptions = {
    title: SCREENS.CATEGORIES
}


export default CategoriesScreen 