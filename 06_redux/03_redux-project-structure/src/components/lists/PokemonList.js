import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PokemonCard from "../items/PokemonCard";
import { callGetPokemonsAPI } from "../../apis/PokemonAPICalls";

function PokemonList() {

    const result = useSelector(state => state.pokemonReducer);
    console.log("result : ", result);

    const pokemons = result.results;

    const dispatch = useDispatch();

    useEffect(
        () => {
            // const asyncFn = async() => dispatch(callGetPokemonsAPI())
            // asyncFn();

            dispatch(callGetPokemonsAPI());
            return () => {};
        },
        []
    );

    return (
        <>
        {
            pokemons && (
                <div>
                    <h3>총 포켓몬 수 : {result.count}</h3>
                    <button onClick={ () => dispatch(callGetPokemonsAPI(result.prev)) }>이전</button>
                    <button onClick={ () => dispatch(callGetPokemonsAPI(result.next)) }>다음</button>
                    {pokemons.map(pokemon => <PokemonCard key={pokemon.url} pokemon={pokemon}></PokemonCard>)}
                </div>
            )
        }
        </>
    );
}

export default PokemonList;