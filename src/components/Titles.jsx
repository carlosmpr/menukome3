import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Titles = ({text}) => {
    return (
        <Text style={styles.title}>{text}</Text>
    )
}

export default Titles

const styles = StyleSheet.create({
    title:{fontWeight:'bold', fontSize:25}
})
