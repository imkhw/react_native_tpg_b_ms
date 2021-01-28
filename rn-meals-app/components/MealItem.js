import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import colors from '../constants/colors'

const MealItem = (props) => {
    return (
        <TouchableOpacity style={styles.mealItem} onPress={props.onSelectMeal}>
                <View style={styles.cardImgTop}>
                    <ImageBackground
                        source={{uri: props.image}}
                        style={styles.cardImg}
                    />
                </View>
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>{props.title}</Text>
                    <View style={styles.cardFooter}>
                        <Text>{props.complexity}</Text>
                        <Text>{props.duration}m</Text>
                    </View>
                </View>
                
        </TouchableOpacity>
    ) 
}

const styles = StyleSheet.create({
    mealItem: {
        backgroundColor: '#ccd9ff',
        margin: 15,
        borderRadius: 10,
        overflow: 'hidden',
    },
    cardImgTop: {
        height: 150,
        width: '100%',
        marginBottom: 10,
    },
    cardImg: {
        width: '100%',
        height: '100%'
    },
    cardBody: {
        marginHorizontal: 20
    },
    cardCatTitle: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        color: colors.primaryColor,
        marginVertical: 10,
    },
    cardTitle: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        marginVertical: 10,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 20,
    }
})

export default MealItem
