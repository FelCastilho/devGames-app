import { useEffect, useState } from "react";
import useStorage from "../../hooks/useStorage.js";
import { View, Text } from "react-native";
import { Container, ListGames } from "./style.js";

import LottieView from 'lottie-react-native';

import sleepAnimation from '../../assets/sleep.json';

import ListFavoriteGames from "../../components/listFavoriteGames/index.js";

export default function Favorites() {

    const [data, setData] = useState([]);
    const { getItem, removeItem } = useStorage()

    useEffect(() => {
        async function fetchFavoriteGames(){

            const listGames = await getItem()
            setData(listGames)

        }
        fetchFavoriteGames()
    }, [])

    async function handleRemove(id) {
        try {
            const listGames = await removeItem(id);
            setData(listGames);
            console.log('Deletado')
        } catch (error) {
            console.error('Erro ao remover o jogo:', error);
        }
    }

    if (data.length === 0) {
        return (
            <View style={{ flex: 1, backgroundColor: '#050B18', justifyContent: 'center', alignItems: 'center' }}>
                <Text
                    style={{ color: 'white', fontSize: 20, marginBottom: 20 }}
                >
                    Your list is empty...
                </Text>

                <View>
                    <LottieView
                        autoPlay
                        style={{
                            width: 200,
                            height: 200,
                        }}
                        source={sleepAnimation}
                    />
                </View>

            </View>
        )
    }

    return (
        <Container>
            <ListGames
                data={data}
                renderItem={({ item }) => <ListFavoriteGames data={item} onDelete={handleRemove}/>}
                keyExtractor={(item, index) => index.toString()}
            />
        </Container>
    );
}
