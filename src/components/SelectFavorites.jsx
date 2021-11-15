import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Badge from './Badge'
const SelectFavorites = () => {
    return (
        <View style={{flexDirection:'row', justifyContent:'space-evenly' , alignItems:'center'}}>
        <Badge text="Specials" active={true}/>
        <Badge text="Happy hours" />
        <Badge text="Favorites" />
        <Badge text="Recommended" />
      </View>
    )
}

export default SelectFavorites

const styles = StyleSheet.create({})
