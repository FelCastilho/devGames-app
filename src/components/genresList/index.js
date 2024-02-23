import { ContainerGenre, GenreButton, GenreButtonText } from "./style";
import { useNavigation } from "@react-navigation/native";

export default function GenresList({ data }){

    const navigation = useNavigation();

    function handlePress(){
        navigation.navigate('Genres', { content: data, genreName: data.name });
    };

    return(
        <ContainerGenre>

            <GenreButton onPress={handlePress}>

                <GenreButtonText>{data.name}</GenreButtonText>

            </GenreButton>
            
        </ContainerGenre>
    )
}