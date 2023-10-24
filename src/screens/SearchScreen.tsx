import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    FlatList,
    Dimensions
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// Componets
import { Loading } from '../components/Loading'
import { SearchInput } from '../components/SearchInput'
import { PokemonCard } from '../components/PokemonCard'

// Hooks
import { usePokemonSearch } from '../hooks/usePokemonSearch'

// Types
import { SimplePokemon } from '../interfaces/pokemonInterfaces'

// Styles
import { globalStyles } from '../theme/styles'

export const SearchScreen = () => {
    const { top } = useSafeAreaInsets()
    const { isFetching, simplePokemonList } = usePokemonSearch()

    const [filteredPokemon, setFilteredPokemon] = useState<SimplePokemon[]>([])
    const [term, setTerm] = useState('')

    useEffect(() => {
        if (term.length === 0) {
            return setFilteredPokemon([])
        }

        if (isNaN(Number(term))) {
            setFilteredPokemon(
                simplePokemonList.filter(pokemon =>
                    pokemon.name
                        .toLocaleLowerCase()
                        .includes(term.toLocaleLowerCase())
                )
            )
        } else {
            const pokemonById = simplePokemonList.find(
                pokemon => pokemon.id === term
            )
            setFilteredPokemon(pokemonById ? [pokemonById] : [])
        }
    }, [term])

    if (isFetching) return <Loading />

    return (
        <View
            style={{
                ...styles.container
            }}
        >
            <SearchInput
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: Dimensions.get('window').width - 40,
                    top: Platform.OS === 'ios' ? top : top + 30
                }}
                onDebouce={setTerm}
            />
            <FlatList
                data={filteredPokemon}
                keyExtractor={pokemon => pokemon.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                // header
                ListHeaderComponent={
                    <Text
                        style={{
                            ...styles.globalmargin,
                            ...styles.title,
                            paddingBottom: 10,
                            marginTop:
                                Platform.OS === 'ios' ? top + 50 : top + 80
                        }}
                    >
                        {term}
                    </Text>
                }
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ...globalStyles,
    container: {
        flex: 1,
        marginHorizontal: 20
    }
})
