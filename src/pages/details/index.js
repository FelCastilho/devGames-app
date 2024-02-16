import { useState, useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import './style.js';

import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";


import { Container, ContainerBanner, Rating, RatingText, Title, ImageContainer, ImagesList, ContainerButtons, ReturnButton, FavoriteButton, ContainerContent } from "./style.js";

import api from "../../services/api.js";

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

export default function Details() {

    const route = useRoute();
    const data = route.params?.item;
    const navigation = useNavigation();

    const [content, setContent] = useState(null);
    const [backgroundImages, setBackgroundImages] = useState([]);
    
    useEffect(() => {
        async function loadDetails() {

            try {

                const response = await api.get(`games/${data.slug}?key=96ffa22939174620840e464e6200055c`);
                setContent(response.data);

                setBackgroundImages([response.data.background_image, response.data.background_image_additional]);

            } catch (error) {
                console.error("Erro ao carregar detalhes:", error);
            }

        }

        if (!content) {
            loadDetails();
        }
    }, [data.slug, content]);

    return (
        <Container>

            <ContainerBanner>

                <ContainerButtons>

                    <ReturnButton onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </ReturnButton>
                    
                    <FavoriteButton onPress={() => navigation.navigate('Favorites')}>
                        <Feather name="bookmark" size={24} color="white" />
                    </FavoriteButton>

                </ContainerButtons>

                <ImagesList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={backgroundImages}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <ImageContainer
                            source={{ uri: item }}
                            windowWidth={windowWidth}
                        />
                    )}
                />
            </ContainerBanner>

            {content ? (

                <ContainerContent>

                    <Rating>
                        <AntDesign name="star" size={20} color="#FABB1E" />
                        <RatingText>{data.rating.toFixed(1)}/ 5</RatingText>
                    </Rating>

                    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', marginTop: 10}}>{content.name}</Text>

                    <Title>Genres:</Title>

                    {/* Renderize os gêneros aqui */}
        {content.genres.map(genre => (
          <Text key={genre.id}>
            <Text style={{color: 'white'}}>{genre.name}</Text>
          </Text>
        ))}

                </ContainerContent>

            ) : (
                <Text style={{textAlign: 'center', color: 'white'}}>Carregando...</Text>
            )}



        </Container>
    );

}
