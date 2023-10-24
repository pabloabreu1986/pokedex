import { useEffect, useState } from 'react'
import { PokemonData } from '../interfaces/pokemonInterfaces'
import { pokemonAPI } from '../api/pokemonApi'

export const usePokemon = (id: string) => {
    const [isLoading, setIsloading] = useState(true)
    const [pokemonInfo, setPokemonInfo] = useState({} as PokemonData)

    const loadPokemon = async () => {
        const resp = await pokemonAPI.get<PokemonData>(
            `https://pokeapi.co/api/v2/pokemon/${id}`
        )
        setPokemonInfo(resp.data)
        setIsloading(false)
    }

    useEffect(() => {
        loadPokemon()
    }, [])

    return {
        isLoading,
        pokemonInfo
    }
}
