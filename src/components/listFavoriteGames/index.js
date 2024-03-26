import './style.js'
import useStorage from '../../hooks/useStorage.js';
import { Card, Name, Rating, BackgoundImage, RatingText, ContainerText, Overlay, DeleteButton } from "./style.js"

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export default function ListFavoriteGames({ data, onDelete }){

    const navigation = useNavigation();

    return(

        <Card onPress={() => navigation.navigate('Details', { item: data })}>

            <BackgoundImage
            source={{uri: data.background_image}}
            />
            
            <Overlay />

            <ContainerText>

                <DeleteButton onPress={() => onDelete(data.id)}>
                    <Feather name="trash" size={25} color="white" />
                </DeleteButton>

                <Name style={{color: '#fff'}}>{data.name}</Name>

                <Rating>

                    <AntDesign name="star" size={20} color="#FABB1E" />
                    <RatingText>{data.rating?.toFixed(1)}/ 5</RatingText>

                </Rating>

            </ContainerText>
        
        </Card>
    )
}