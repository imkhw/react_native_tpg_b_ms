import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, View, Text, Switch, Platform } from 'react-native' 
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'

import CustomHeaderButton from '../components/CustomHeaderButton'
import colors from '../constants/colors'
import { setFilters } from '../store/actions/meals'

const FilterSwitch = (props) => {
    return (
        <View style={styles.filterScreen}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{true: colors.primaryColor}}
                thumbColor={Platform.OS === 'android' ? colors.primaryColor : ''}
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    )
}

const FiltersScreen = (props) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    const dispatch = useDispatch()

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }

        dispatch(setFilters(appliedFilters))

        console.log(appliedFilters)
        
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch])

    useEffect(() => {
        props.navigation.setParams({save: saveFilters})
    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch
                label='Gluten-free'
                state={isGlutenFree}
                onChange={(newValue) => {setIsGlutenFree(newValue)}}
            />
            <FilterSwitch
                label='Lactose-free'
                state={isLactoseFree}
                onChange={(newValue) => {setIsLactoseFree(newValue)}}
            />
            <FilterSwitch
                label='Vegan'
                state={isVegan}
                onChange={(newValue) => {setIsVegan(newValue)}}
            />
            <FilterSwitch
                label='Vegetarian'
                state={isVegetarian}
                onChange={(newValue) => {setIsVegetarian(newValue)}}
            />
        </View>
    )
}

FiltersScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Filterd meal',
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
        },
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item 
                        title='Menu'
                        iconName='check'
                        onPress={navigationData.navigation.getParam('save')}
                    />
                </HeaderButtons>
            )
        },
        
}
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterScreen: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '78%',
        marginBottom: 10
    }
})

export default FiltersScreen
