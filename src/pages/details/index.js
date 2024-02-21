import { useState, useEffect } from "react";
import { View, Text, Dimensions, ActivityIndicator, Modal, ScrollView } from "react-native";
import './style.js';

import ModalDescription from "./components/modalDescription/index.js";

import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import { Container, ContainerBanner, Rating, RatingText, Title, ImageContainer, ImagesList, ContainerButtons, ReturnButton, FavoriteButton, ContainerContent, ContainerGenres, GenresList, Genres, Subtitle, Description, ModalButton, ModalButtonText, HorizontalLists, HorizontalListsContainer, TextList } from "./style.js";

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
    const [genres, setGenres] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ modalVisible, setModalVisible ] = useState(false)

    useEffect(() => {

        async function loadDetails() {

            try {
                const response = await api.get(`games/${data.slug}?key=96ffa22939174620840e464e6200055c`);
                setContent(response.data);

                setBackgroundImages([response.data.background_image, response.data.background_image_additional]);
                setGenres(response.data.genres)
                setPlatforms(response.data.platforms)
                setStores(response.data.stores)
                setLoading(false)

            } catch (error) {
                console.error("Erro ao carregar detalhes:", error);
            }

        }

        if (!content) {
            loadDetails();
        }

    }, [data.slug, content]);

    function removeTag(description){
        return description.replace(/<p>/g, '').replace(/<\/p>/g, '');
    }

    function closeModal(){
        setModalVisible(false);
    }

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
                    
                    <ScrollView>
                        <ContainerContent>
        
                            <Rating>
                                <AntDesign name="star" size={20} color="#FABB1E" />
                                <RatingText>{data.rating.toFixed(1)}/ 5</RatingText>
                            </Rating>
        
                            <Subtitle>{content.name}</Subtitle>
        
                            <Title>Genres:</Title>

                            <GenresList
                            horizontal
                            data={genres}
                            renderItem={({item}) => (
                                <ContainerGenres>
                                    <Genres style={{color: 'white'}}>{item.name}</Genres>
                                </ContainerGenres>
                            )}
                            />

                            <Subtitle>Description:</Subtitle>

                            <Description>{removeTag(content.description)}...</Description>

                            <ModalButton onPress={() => setModalVisible(true)}>

                                <ModalButtonText>Read full description</ModalButtonText>

                                <Modal animationType="slide" visible={modalVisible}>
                                    <ModalDescription data={content.description} close={closeModal} removeTag={removeTag}/>
                                </Modal>
                                
                            </ModalButton>

                            <Subtitle>Platforms:</Subtitle>

                            <HorizontalLists
                            horizontal
                            data={platforms}
                            renderItem={({item}) => (
                                <HorizontalListsContainer>
                                    <TextList style={{color: 'white'}}>{item.platform.name}</TextList>
                                </HorizontalListsContainer>
                            )}
                            />

                            <Subtitle>Stores:</Subtitle>

                            <HorizontalLists
                            horizontal
                            data={stores}
                            renderItem={({item}) => (
                                <HorizontalListsContainer>
                                    <TextList style={{color: 'white'}}>{item.store.name}</TextList>
                                </HorizontalListsContainer>
                            )}
                            />

                        </ContainerContent>
                    </ScrollView>           
                )}
    
            </Container>
        );
    }
    
    

}
