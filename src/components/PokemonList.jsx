import { Button } from "@material-ui/core";
const PokemonList = ({ pokemon, onClick }) => (
    <>
        <tr key={pokemon.id}>
            <td>{pokemon.name.english}</td>
            <td>{pokemon.type.join(", ")}</td>
            <td>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => onClick(pokemon)}
                >
                    More Information
                </Button>
            </td>
        </tr>
    </>
);

export default PokemonList;
