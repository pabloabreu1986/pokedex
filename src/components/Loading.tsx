import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

export const Loading = () => {
    return (
        <View style={{ ...styles.loadingContainer }}>
            <ActivityIndicator size={50} color={'#f64b4a'} />
            <Text style={{ color: 'darkgrey' }}>Cargando...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
