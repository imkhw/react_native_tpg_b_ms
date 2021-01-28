import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { HeaderButton } from 'react-navigation-header-buttons'
import { StyleSheet, Platform } from 'react-native';

import colors from '../constants/colors'

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={AntDesign}
            iconSize={23}
            color={Platform.OS === 'android' ? 'white' : colors.primaryColor}
        />
    )
}

const styles = StyleSheet.create({
    
})

export default CustomHeaderButton
