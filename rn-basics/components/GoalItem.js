import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const GoalItem = ({id, text, onDelete}) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.85} 
            onPress={() => {
            onDelete(id)}}
        >
            <View style={styles.itemsList}>
                <Text style={styles.item}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    itemsList: {
      backgroundColor: "gray",
      padding: 10,
      marginVertical: 10,
    },
    item: {
      color: "#fff",
    },
  });
  
