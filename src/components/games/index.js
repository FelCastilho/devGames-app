import './style.js'

import { Card, Name, Rating, BackgoundImage, RatingText, ContainerText, Overlay } from "./style.js"

import { AntDesign } from '@expo/vector-icons';

export default function Games({ data }){

    return(

        <Card>
            <BackgoundImage
            source={{uri: data.background_image}}
            />
            <Overlay />

            <ContainerText>

                <Name style={{color: '#fff'}}>{data.name}</Name>

                <Rating>

                    <AntDesign name="star" size={20} color="#FABB1E" />
                    <RatingText>{data.rating.toFixed(1)}/ 5</RatingText>

                </Rating>

            </ContainerText>
        
        </Card>
    )
}