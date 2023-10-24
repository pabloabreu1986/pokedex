import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    ActivityIndicator
} from 'react-native'

// API
import usePokemonPaginated from '../hooks/usePokemonPaginated'

// Styles
import { globalStyles } from '../theme/styles'
import { PokemonCard } from '../components/PokemonCard'

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets()
    const { simplePokemonList, loadPokemons } = usePokemonPaginated()

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />
            <View style={{ alignItems: 'center' }}>
                <FlatList
                    data={simplePokemonList}
                    keyExtractor={pokemon => pokemon.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    // header
                    ListHeaderComponent={
                        <Text
                            style={{
                                ...styles.globalmargin,
                                ...styles.title,
                                top: top + 20,
                                marginBottom: top + 20,
                                paddingBottom: 10
                            }}
                        >
                            Pokedex
                        </Text>
                    }
                    renderItem={({ item }) => <PokemonCard pokemon={item} />}
                    // infinite scroll
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}
                    // activity inficator
                    ListFooterComponent={
                        <ActivityIndicator
                            style={{ height: 100 }}
                            size={20}
                            color={'grey'}
                        />
                    }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ...globalStyles,
    container: {}
})
