import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { HomeScreen } from '../screens/HomeScreen'
import { PokemonScreen } from '../screens/PokemonScreen'

// Types
import { SimplePokemon } from '../interfaces/pokemonInterfaces'

export type RootStackParams = {
    HomeScreen: undefined
    PokemonScreen: { simplePokemon: SimplePokemon; color?: string }
}

const HomeStack = createStackNavigator<RootStackParams>()

export const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen name="PokemonScreen" component={PokemonScreen} />
        </HomeStack.Navigator>
    )
}
