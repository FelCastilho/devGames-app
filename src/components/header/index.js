import { View, Text } from "react-native";

import { Container, ContainerLogo, ContainerSearch, Span, Logo, FavoriteButton, SearchInput } from "./style";

import { useNavigation } from "@react-navigation/native";

import { Feather } from '@expo/vector-icons';

export function Header(){

    const navigation = useNavigation();

    return(
        
        <Container>

            <ContainerLogo>

                <Logo>Dev<Span>Games</Span></Logo>
                
                <FavoriteButton onPress={() => navigation.navigate('Favorites')}>
                    <Feather name="bookmark" size={24} color="white" />
                </FavoriteButton>

            </ContainerLogo>

            <ContainerSearch>

                <SearchInput
                    placeholder="Looking for a game?"
                    placeholderTextColor='#fff'
                />

                <Feather name="search" size={35} color="#FF455F" />
            </ContainerSearch>

        </Container>
    )
}