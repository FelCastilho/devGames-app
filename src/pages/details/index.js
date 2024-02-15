import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import './style.js';

import { Container, Background, Rating, RatingText, Title } from "./style.js";

import { AntDesign } from '@expo/vector-icons';

export default function Details(){

    const route = useRoute();
    const data  = route.params?.item;

    return(
        <Container>

            <Background
                source={{uri: data.background_image}}
            />

            <Rating>

                <AntDesign name="star" size={20} color="#FABB1E" />
                <RatingText>{data.rating.toFixed(1)}/ 5</RatingText>

            </Rating>        

        </Container>
    )
}
