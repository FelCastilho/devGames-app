import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #050B18;
`;

export const ContainerContent = styled.SafeAreaView`
    padding: 20px;
`;

export const ImageContainer = styled.Image`
    width: ${({ windowWidth }) => windowWidth}px;
    height: 200px;
`;

export const ImagesList = styled.FlatList`
  position: absolute;
`;

export const ContainerBanner = styled.View`
  height: 200px;
`;

export const ContainerButtons = styled.View`
  z-index: 99;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  gap: 20px;
`;

export const FavoriteButton = styled.TouchableOpacity`
    background-color: #050B18;
    padding: 10px;
    border-radius: 50px;
`;

export const ReturnButton = styled.TouchableOpacity`
    background-color: #050B18;
    padding: 10px;
    border-radius: 50px;
`;

export const Rating = styled.View`
    flex-direction: row;
    gap: 6px;
`;

export const RatingText = styled.Text`
    color: white;
    margin-right: 10px;
    font-size: 16px;
`;

export const Title = styled.Text`
    margin-top: 20px;
    color: white;
    font-weight: bold;
    font-size: 25px;
`;