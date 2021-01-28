import React, { useEffect, useCallback } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux'
import CustomHeaderButton from '../components/CustomHeaderButton'

import { MEALS } from '../data/dummy-data'
import { toggleFavorite } from '../store/actions/meals'

const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam('mealId')
    
    const availableMeals = useSelector(state => state.meals.meals)

    const selectedMeal = availableMeals.find((meal) => {
        return meal.id === mealId
    })

    const currentMealIsFav = useSelector((state) => {
        return state.meals.favoriteMeals.some((meal) => {
            return meal.id === mealId
        })
    })

    const dispatch = useDispatch()

    const toggleFavoriteHandler = useCallback(() => {
        console.log('toggleFavoriteHandler runs')
        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId])

    useEffect(() => {
        // props.navigation.setParams({
        //     mealTitle: selectedMeal.title
        // })
        props.navigation.setParams({
            toggleFav: toggleFavoriteHandler
        })
    }, [toggleFavoriteHandler])

    useEffect(() => {
        props.navigation.setParams({
            isFav: currentMealIsFav
        })
    }, [currentMealIsFav])

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title='Go back to Categories' onPress={() => {
                props.navigation.popToTop()
            }} />
        </View>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId')
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    const toggleFavorite = navigationData.navigation.getParam('toggleFav')
    const isFav = navigationData.navigation.getParam('isFav')

    const selectedMeal = MEALS.find((meal) => {
        return meal.id === mealId
    })

    return {
        // headerTitle: selectedMeal.title,
        headerTitle: mealTitle,
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item 
                        title='Favorite'
                        iconName={isFav ? 'heart' : 'hearto' }
                        onPress={toggleFavorite}
                        // onPress={() => {
                        //     console.log('power')
                        // }}
                    />
                </HeaderButtons>
            )
        }
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default MealDetailScreen
