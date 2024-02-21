import { View } from 'react-native';
import './style.js'

import { Container, ReturnButton, Description, Title, Text, TextContainer, ContainerButton} from './style.js';

import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function ModalDescription({ data, close }) {

    function formatDescription(description){

        let formattedDescription = description.replace(/<p>/g, '').replace(/<\/p>/g, '');

        formattedDescription = formattedDescription.replace(/<br\s*[/]?>/gi, '\n');

        return formattedDescription;
    }

    return (
        <Container>

            <ContainerButton>

                <ReturnButton onPress={() => close()}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </ReturnButton>

                <Title>Description</Title>
                
            </ContainerButton>

            <ScrollView>
                <Description>{formatDescription(data)}</Description>
            </ScrollView>

        </Container>
    );
}
