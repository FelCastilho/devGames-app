import './style.js'
import { Card, Name, Rating, BackgoundImage, RatingText, ContainerText, Overlay } from "./style.js"

import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function CardsGenres({ data }) {

    const navigation = useNavigation();

    return (
        
        <Card onPress={() => navigation.navigate('Details', { item: data })}>

            <BackgoundImage
            source={{uri: data.background_image}}
            />
            
            <Overlay />

            <ContainerText>

                <Name 
                style={{color: '#fff'}}
                numberOfLines={1}
                >
                    {data.name}
                </Name>

                <Rating>

                    <AntDesign name="star" size={20} color="#FABB1E" />
                    <RatingText>{data.rating.toFixed(1)}/ 5</RatingText>

                </Rating>

            </ContainerText>
        
        </Card>
    );
}