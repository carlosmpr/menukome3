import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
const Header = () => {
    return (
        <View style={styles.header}>
        <MaterialIcons name="view-list" size={24} color="black" />
            <Text style={styles.title}>MenuKome</Text>
            <MaterialCommunityIcons name="view-grid-outline" size={24} color="black" />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    }
})
