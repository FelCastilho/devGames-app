import './style.js'
import { Card, Name, Rating, BackgoundImage, RatingText, ContainerText, Overlay, DeleteButton } from "./style.js"

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export default function ListFavoriteGames({ data, deleteItem }){

    const navigation = useNavigation();

    function handleDelete(){
        deleteItem(data);
    }

    return(

        <Card onPress={() => navigation.navigate('Details', { item: data })}>

            <BackgoundImage
            source={{uri: data.background_image}}
            />
            
            <Overlay />

            <ContainerText>

                <DeleteButton onPress={handleDelete}>
                    <Feather name="trash" size={30} color="white" />
                </DeleteButton>

                <Name style={{color: '#fff'}}>{data.name}</Name>

                <Rating>

                    <AntDesign name="star" size={20} color="#FABB1E" />
                    <RatingText>{data.rating.toFixed(1)}/ 5</RatingText>

                </Rating>

            </ContainerText>
        
        </Card>
    )
}