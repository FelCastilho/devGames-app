import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #050B18;
    padding: 20px;
`;

export const ContainerLogo = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Span = styled.Text`
    color: #FF455F;
`;

export const Logo = styled.Text`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
`;

export const FavoriteButton = styled.TouchableOpacity`
    background-color: #1F2430;
    padding: 10px;
    border-radius: 50px;
`;

export const ContainerSearch = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

export const SearchInput = styled.TextInput`
    width: 85%;
    background-color: #1F2430;
    border-radius: 20px;
    padding: 10px;
    color: white;
`;