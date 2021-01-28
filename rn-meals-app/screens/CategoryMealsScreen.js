import React from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import MealItem from '../components/MealItem'
import MealList from '../components/MealList'
import { CATEGORIES, MEALS } from '../data/dummy-data'

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId')

    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const selectedCategory = CATEGORIES.find((cat) => {
        return cat.id === catId
    })

    const displayedMeals = availableMeals.filter((meal) => {
        return meal.categoryIds.indexOf(catId) >= 0 
    }) 

    if (displayedMeals.length === 0) {
        return (
            <View style={styles.content}>
                <Text>No meal found. Check filters!</Text>
            </View>
        )
    }

    // const renderMealItem = (itemData) => {
    //     return (
    //         <MealItem
    //             catTitle={selectedCategory.title}
    //             title={itemData.item.title}
    //             complexity={itemData.item.complexity}
    //             duration={itemData.item.duration}
    //             image={itemData.item.imageUrl}
    //             onSelectMeal={() => {
    //                 props.navigation.navigate({
    //                     routeName: 'MealDetail',
    //                     params: {
    //                         mealId: itemData.item.id
    //                     }
    //                 })
    //             }}
    //         />
    //     )
    // }

    return (
        // <View style={styles.screen}>
        //     <Text>Categories Meals Screen</Text>
        //     <Text>{selectedCategory.title}</Text>
        //     <Button title='Go to Meal Detail' onPress={() => {
        //         props.navigation.navigate({routeName: 'MealDetail'})
        //     }} />
        // </View>

        // <FlatList
        //     keyExtractor={(item, index) => {
        //         return item.id
        //     }}
        //     data={displayedMeals}
        //     renderItem={renderMealItem}
        // />
        
        <MealList listData={displayedMeals} navigation={props.navigation} />
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find((cat) => {
        return cat.id === catId
    })

    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CategoryMealsScreen
