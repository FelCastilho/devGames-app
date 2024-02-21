import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #0F172A;
    flex: 1;
`;

export const ContainerButton = styled.View`
    background-color: #0F172A;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
`;

export const Title = styled.Text`
   font-weight: bold;
   font-size: 18px;
   color: #fff;
   margin-left: auto;
   margin-right: auto;
`;

export const ReturnButton = styled.TouchableOpacity`
    background-color: #050B18;
    padding: 10px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
`;

export const Description = styled.Text`
    color: #fff;
    width: 90%;
    margin: 20px auto;
`;