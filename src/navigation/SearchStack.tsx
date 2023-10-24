import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { RootStackParams } from './HomeStack'
import { SearchScreen } from '../screens/SearchScreen'
import { PokemonScreen } from '../screens/PokemonScreen'

const SearchStack = createStackNavigator<RootStackParams>()

export const SearchStackNavigator = () => {
    return (
        <SearchStack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <SearchStack.Screen name="HomeScreen" component={SearchScreen} />
            <SearchStack.Screen
                name="PokemonScreen"
                component={PokemonScreen}
            />
        </SearchStack.Navigator>
    )
}
