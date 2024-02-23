import { View, Text } from "react-native";

import { Container, ContainerLogo, ContainerSearch, Span, Logo, FavoriteButton, SearchInput, SearchButton } from "./style";

import { useNavigation } from "@react-navigation/native";

import { Feather } from '@expo/vector-icons';

export function Header(){

    const navigation = useNavigation();

    return(
        
        <Container>

            <ContainerLogo>

                <Logo>Dev<Span>Games</Span></Logo>
                
                <FavoriteButton onPress={() => navigation.navigate('My favorites')}>
                    <Feather name="bookmark" size={24} color="white" />
                </FavoriteButton>

            </ContainerLogo>

            <ContainerSearch>

                <SearchInput
                    placeholder="Looking for a game?"
                    placeholderTextColor='#fff'
                />

                <SearchButton>
                    <Feather name="search" size={35} color="#FF455F" />
                </SearchButton>
            </ContainerSearch>

        </Container>
    )
}