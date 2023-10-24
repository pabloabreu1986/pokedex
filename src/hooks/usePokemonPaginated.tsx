import React, { useEffect, useRef, useState } from 'react'

// API
import { pokemonAPI } from '../api/pokemonApi'

// Types / Interfaces
import {
    PokemonPaginatedResponse,
    Result,
    SimplePokemon
} from '../interfaces/pokemonInterfaces'

const usePokemonPaginated = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
        []
    )
    const nextPageurl = useRef(`https://pokeapi.co/api/v2/pokemon?limit=40`)

    const loadPokemons = async () => {
        setIsLoading(true)

        const resp = await pokemonAPI.get<PokemonPaginatedResponse>(
            nextPageurl.current
        )

        nextPageurl.current = resp.data.next
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

        setSimplePokemonList([...simplePokemonList, ...newPokemonList])
        setIsLoading(false)
    }

    useEffect(() => {
        loadPokemons()
    }, [])

    return { isLoading, simplePokemonList, loadPokemons }
}

export default usePokemonPaginated
