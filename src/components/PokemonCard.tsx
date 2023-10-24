import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
// import { getColors } from 'react-native-image-colors'

// Componets
import { FadeInImage } from './FadeInImage'

// Styles
import { globalStyles } from '../theme/styles'

// Interfaces
import { SimplePokemon } from '../interfaces/pokemonInterfaces'

interface PokemonCardProps {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    const [bgColor, setBgColor] = useState('#f64b4a') // Usado para cambiar el color de las tarjetas
    const windowWidth = Dimensions.get('window').width

    const navigation = useNavigation()

    // TODO: descartado por error de la librería ImageColors
    // useEffect(() => {
    //     getColors(pokemon.picture, {
    //         fallback: 'grey',
    //         cache: true,
    //         key: pokemon.picture
    //     })
    //         .then(colors => {
    //             colors.platform === 'android'
    //                 ? setBgColor(colors.dominant || bgColor)
    //                 : setBgColor(colors.background || bgColor)
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() =>
                // TODO: revisar el tipado este as never
                navigation.navigate({
                    name: 'PokemonScreen',
                    params: {
                        simplePokemon: pokemon,
                        color: bgColor
                    }
                } as never)
            }
        >
            <View
                style={{
                    ...styles.cardContainer,
                    width: windowWidth * 0.4,
                    backgroundColor: bgColor
                }}
            >
                {/* Nombre e ID del Pokemon */}
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>
                <View style={{ ...styles.pokebolaContainer }}>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebolaCard}
                    />
                </View>

                <FadeInImage
                    uri={pokemon.picture}
                    style={{ ...styles.pokemonImage }}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ...globalStyles,
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        marginBottom: 15,
        borderRadius: 10,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,

        elevation: 5
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokebolaCard: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        right: -20,
        opacity: 0.5
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5
    },
    pokebolaContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        borderEndEndRadius: 20
    }
})
