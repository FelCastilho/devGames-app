import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Container, ListGames } from "./style.js";

import LottieView from 'lottie-react-native';

import sleepAnimation from '../../assets/sleep.json';

import ListFavoriteGames from "../../components/listFavoriteGames/index.js";

import { openDatabase } from "expo-sqlite";

const db = openDatabase('myGames');

export default function Favorites() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchSavedGames();
    }, []);

    async function fetchSavedGames() {
        try {
            await db.transaction(async tx => {
                tx.executeSql(
                    'SELECT * FROM favorite_games',
                    [],
                    (_, { rows: { _array } }) => {
                        const games = _array.map(item => ({ ...JSON.parse(item.game_data), id: item.id }));
                        setData(games);
                    },
                    (_, error) => {
                        console.error('Erro ao ler dados do banco de dados:', error);
                    }
                );
            });
        } catch (error) {
            console.error('Erro ao acessar o banco de dados:', error);
        }
    };

    async function deleteGame(id) {
        try {
            await db.transaction(async (tx) => {
                tx.executeSql(
                    'DELETE FROM favorite_games WHERE id = ?',
                    [id],
                    () => {
                        //Atualizando dados após remover do banco
                        fetchSavedGames();
                    },
                    (_, error) => {
                        console.error('Erro ao deletar jogo:', error);
                    }
                );
            });
        } catch (error) {
            console.error('Erro ao acessar o banco de dados:', error);
        }
    };

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
                renderItem={({ item }) => <ListFavoriteGames data={item} onDelete={deleteGame} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </Container>
    );
}
