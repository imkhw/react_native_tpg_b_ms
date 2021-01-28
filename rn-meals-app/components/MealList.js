import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'

import MealItem from '../components/MealItem'

const MealList = (props) => {
    const renderMealItem = (itemData) => {
        return (
            <MealItem
                title={itemData.item.title}
                complexity={itemData.item.complexity}
                duration={itemData.item.duration}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title
                        }
                    })
                }}
            />
        )
    }

    return (
        <FlatList
            keyExtractor={(item, index) => {
                return item.id
            }}
            data={props.listData}
            renderItem={renderMealItem}
        />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default MealList
