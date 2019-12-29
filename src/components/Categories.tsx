import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'

import { categoryType } from '../types'
import Category from './Category'
import { CATEGORIES } from '../data/data'
import { globalTitle, Colors, titleWrapper } from '../global/styles'

const Categories = ({ numCol, horizontal }: { numCol?: number, horizontal: boolean }) => {

    const renderItem = ({ item }: { item: categoryType }) => {
        const { id, title, color } = item
        return <Category key={id} id={id} title={title} color={color} />
    }

    return (
        <View>
            <FlatList
                data={CATEGORIES}
                renderItem={renderItem}
                numColumns={horizontal ? 1 : numCol ? numCol : 2}
                horizontal={horizontal}
            />
        </View>
    )
}


const styles = StyleSheet.create({

})
export default Categories 
