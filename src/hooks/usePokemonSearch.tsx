import { useEffect, useState } from 'react'

// API
import { pokemonAPI } from '../api/pokemonApi'

// Types / Interfaces
import {
    PokemonPaginatedResponse,
    Result,
    SimplePokemon
} from '../interfaces/pokemonInterfaces'

export const usePokemonSearch = () => {
    const [isFetching, setIsFetching] = useState(true)
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
        []
    )
    const url = `https://pokeapi.co/api/v2/pokemon?limit=1300`

    const loadPokemons = async () => {
        setIsFetching(true)

        const resp = await pokemonAPI.get<PokemonPaginatedResponse>(url)
        mapPokemonList(resp.data.results)
    }

    const mapPokemonList = (pokemonList: Result[]) => {
        const newPokemonList: SimplePokemon[] = pokemonList.map(
            ({ name, url }) => {
                const urlParts = url.split('/')
                const id = urlParts[urlParts.length - 2]
                const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

                return { id, name, picture }
            }
        )

        setSimplePokemonList(newPokemonList)
        setIsFetching(false)
    }

    useEffect(() => {
        loadPokemons()
    }, [])

    return { isFetching, simplePokemonList }
}
