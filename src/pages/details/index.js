import { useState, useEffect } from "react";
import { View, Text, Dimensions, ActivityIndicator } from "react-native";
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
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadDetails() {

            try {
                const response = await api.get(`games/${data.slug}?key=96ffa22939174620840e464e6200055c`);
                setContent(response.data);

                setBackgroundImages([response.data.background_image, response.data.background_image_additional]);
                setLoading(false)

            } catch (error) {
                console.error("Erro ao carregar detalhes:", error);
            }

        }

        if (!content) {
            loadDetails();
        }

    }, [data.slug, content]);

    if(loading){

        return(
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#050B18'}}>
                <ActivityIndicator size={24} color="#FF455F"/>
            </View>
        )

    }else{

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
    
                {content && (
    
                    <ContainerContent>
    
                        <Rating>
                            <AntDesign name="star" size={20} color="#FABB1E" />
                            <RatingText>{data.rating.toFixed(1)}/ 5</RatingText>
                        </Rating>
    
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>{content.name}</Text>
    
                        <Title>Genres:</Title>
    
                    </ContainerContent>
    
                )}
    
    
    
            </Container>
        );
    }
    
    

}
