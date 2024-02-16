import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import './style.js';

import { Container, BackgroundSlider, Rating, RatingText, Title } from "./style.js";

import api from "../../services/api.js";

import { AntDesign } from '@expo/vector-icons';

export default function Details(){

    const route = useRoute();
    const data  = route.params?.item;

    const [content, setContent] = useState(null);


    useEffect(() => {

        async function loadDetails(){

            try {
                const response = await api.get(`games/${data.slug}?key=96ffa22939174620840e464e6200055c`);
                setContent(response.data);
            } catch (error) {
                console.error("Erro ao carregar detalhes:", error);
            }
        }

        if(!content){
            loadDetails();
        }
        

    }, [data.slug])

    return(
        <Container>

            {content ? ( 
                <>
                    <Title>{content.name}</Title>
                    <Rating>
                        <AntDesign name="star" size={20} color="#FABB1E" />
                        <RatingText>{data.rating.toFixed(1)}/ 5</RatingText>
                    </Rating>
                </>
            ) : (
                <Text>Carregando...</Text>
            )}

        </Container>
    )
}