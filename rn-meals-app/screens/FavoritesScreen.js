import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { useSelector } from 'react-redux'

import { CATEGORIES, MEALS } from '../data/dummy-data'

import MealList from '../components/MealList'

const FavoritesScreen = (props) => {
    const  favMeals = useSelector(state => state.meals.favoriteMeals)
    // const favMeals = MEALS.filter((meal) => {
    //     return meal.id === 'm1' || meal.id == 'm2'
    // })

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.content}>
                <Text>No fav meals found. Add some!</Text>
            </View>
        )
    }

    return (
        <MealList listData={favMeals} navigation={props.navigation} />
    )
}

FavoritesScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Your favorites!',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item 
                        title='Menu'
                        iconName='menuunfold'
                        onPress={() => {
                            navigationData.navigation.toggleDrawer()
                        }}
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
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoritesScreen
