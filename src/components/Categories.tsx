import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'

import { categoryType } from '../types'
import Category from './Category'
import { CATEGORIES } from '../data/data'
import { globalTitle, Colors, titleWrapper } from '../global/styles'

const Categories = () => {

    const renderItem = ({ item }: { item: categoryType }) => {
        const { id, title, color } = item
        return <Category key={id} id={id} title={title} color={color} />
    }

    return (
        <View>
            <View style={titleWrapper}>
                <Text style={globalTitle}>Categories List</Text>
            </View>
            <FlatList
                data={CATEGORIES}
                renderItem={renderItem}
                numColumns={2}
            />
        </View>
    )
}


const styles = StyleSheet.create({

})
export default Categories 
