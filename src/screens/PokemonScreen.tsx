import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ActivityIndicator
} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// Components
import { FadeInImage } from '../components/FadeInImage'
import { PokemonInfo } from '../components/PokemonInfo'

// Hooks
import { usePokemon } from '../hooks/usePokemon'

// Types
import { RootStackParams } from '../navigation/HomeStack'

// Styles
import { globalStyles } from '../theme/styles'

interface PokemonScreenProps
    extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({ navigation, route }: PokemonScreenProps) => {
    const { top } = useSafeAreaInsets()

    const { simplePokemon, color } = route.params
    const { name, id, picture } = simplePokemon

    const { isLoading, pokemonInfo } = usePokemon(id)

    return (
        <View style={{ flex: 1 }}>
            {/* Header Container */}
            <View style={{ ...styles.headerContainer, backgroundColor: color }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ ...styles.backButton, top: top + 5 }}
                    onPress={() => navigation.goBack()}
                >
                    <Icon name="arrow-back-outline" size={35} color={'white'} />
                </TouchableOpacity>
                {/* Nombre del Pokemon */}
                <Text style={{ ...styles.pokemonName, top: top + 40 }}>
                    {name + '\n'}#{id}
                </Text>
                {/* Pokebola Blanca */}
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={{ ...styles.pockeball }}
                />
                {/* Pokemon */}
                <FadeInImage uri={picture} style={{ ...styles.pokemonImage }} />
            </View>
            {/* Detalles y loading */}
            {isLoading ? (
                <View style={{ ...styles.loadingIndicator }}>
                    <ActivityIndicator color={color} size={50} />
                </View>
            ) : (
                <PokemonInfo pokemon={pokemonInfo} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    ...globalStyles,
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000
    },
    backButton: {
        position: 'absolute',
        left: 20
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20
    },
    pockeball: {
        width: 250,
        height: 250,
        bottom: -10,
        opacity: 0.5
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center'
    }
})
