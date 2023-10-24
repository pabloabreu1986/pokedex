import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

// Components
import { FadeInImage } from './FadeInImage'

// Types
import { PokemonData } from '../interfaces/pokemonInterfaces'

// Styles
import { globalStyles } from '../theme/styles'

interface PokemonInfoProps {
    pokemon: PokemonData
}

export const PokemonInfo = ({ pokemon }: PokemonInfoProps) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                ...styles.fullContainer
            }}
        >
            <View style={{ ...styles.infoContainer, marginTop: 370 }}>
                {/* Types */}
                <Text style={{ ...styles.title }}>{'Types'}</Text>
                <View style={{ ...styles.rowContainer }}>
                    {pokemon.types.map(({ type }) => (
                        <Text key={type.name} style={{ ...styles.regularText }}>
                            {type.name}
                        </Text>
                    ))}
                </View>
                {/* Peso */}
                <Text style={{ ...styles.title }}>{'Peso'}</Text>
                <Text style={{ ...styles.regularText }}>
                    {pokemon.weight + ' kg'}
                </Text>
            </View>

            {/* Sprites */}
            <View style={{ ...styles.infoContainer }}>
                <Text style={{ ...styles.title }}>{'Sprites'}</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={{ ...styles.basicSprite }}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={{ ...styles.basicSprite }}
                />
                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={{ ...styles.basicSprite }}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={{ ...styles.basicSprite }}
                />
            </ScrollView>

            {/* Habilidades */}
            <View style={{ ...styles.infoContainer }}>
                <Text style={{ ...styles.title }}>{'Base skills'}</Text>
                <View style={{ ...styles.rowContainer }}>
                    {pokemon.abilities.map(({ ability }) => (
                        <Text
                            key={ability.name}
                            style={{ ...styles.regularText }}
                        >
                            {ability.name}
                        </Text>
                    ))}
                </View>
            </View>

            {/* Moves */}
            <View style={{ ...styles.infoContainer }}>
                <Text style={{ ...styles.title }}>{'Moves'}</Text>
                <View style={{ ...styles.rowContainer, flexWrap: 'wrap' }}>
                    {pokemon.moves.map(({ move }) => (
                        <Text key={move.name} style={{ ...styles.regularText }}>
                            {move.name}
                        </Text>
                    ))}
                </View>
            </View>

            {/* Stats */}
            <View style={{ ...styles.infoContainer }}>
                <Text style={{ ...styles.title }}>{'Stats'}</Text>
                <View style={{}}>
                    {pokemon.stats.map((stat, i) => (
                        <View
                            style={{
                                ...styles.rowContainer
                            }}
                            key={stat.stat.name + i}
                        >
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                    width: 150
                                }}
                            >
                                {stat.stat.name}
                            </Text>
                            <Text
                                style={{
                                    ...styles.regularText,
                                    fontWeight: 'bold',
                                    width: 50,
                                    textAlign: 'right'
                                }}
                            >
                                {stat.base_stat}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
            <View style={{ ...styles.bottomContainer }}>
                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={{ ...styles.basicSprite }}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ...globalStyles,
    fullContainer: {
        ...StyleSheet.absoluteFillObject
    },
    infoContainer: {
        marginHorizontal: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 20
    },
    rowContainer: {
        flexDirection: 'row'
    },
    regularText: {
        fontSize: 19,
        marginRight: 10
    },
    basicSprite: {
        width: 100,
        height: 100
    },
    bottomContainer: {
        marginBottom: 50,
        marginTop: 30,
        alignItems: 'center'
    }
})
