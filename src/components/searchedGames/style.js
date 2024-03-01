import styled from "styled-components/native";

export const Card = styled.TouchableOpacity`
    flex: 1;
    margin-top: 40px;
`;

export const ItensContainer = styled.View`
    position: absolute;
`;

export const Name = styled.Text`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
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

export const BackgoundImage = styled.Image`
    height: 200px;
    background-color: rgba(0, 0, 0, 1);
    border-radius: 8px;
`;

export const ContainerText = styled.View`
    margin-top: -70px;
    margin-left: 10px;
    z-index: 99;
`;

export const Overlay = styled.View`
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  position: absolute;
  height: 200px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;