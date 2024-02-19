import { useEffect } from "react";
import { View, Text } from "react-native";
import { ContainerGenre, GenreButton, GenreButtonText } from "./style";

export default function Genres({ data }){

    return(
        <ContainerGenre>

            <GenreButton>

                <GenreButtonText>{data.name}</GenreButtonText>

            </GenreButton>
            
        </ContainerGenre>
    )
}