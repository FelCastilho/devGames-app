import React, { useEffect, useState } from "react";
import { Container, ListGames } from "./style.js";

import ListFavoriteGames from "../../components/listFavoriteGames/index.js";

import { openDatabase } from "expo-sqlite";

const db = openDatabase('myGames');

export default function Favorites() {
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchSavedGames = async () => {
            try {
                await db.transaction(async (tx) => {
                    tx.executeSql(
                        'SELECT * FROM favorite_games',
                        [],
                        (_, { rows: { _array } }) => {
                            const games = _array.map(item => JSON.parse(item.game_data));
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
        

        fetchSavedGames(); 

    }, []); 

    async function handleDelete(itemToDelete){
        try {
            await db.transaction(async (tx) => {
                tx.executeSql(
                    'DELETE FROM favorite_games WHERE id = ?',
                    [itemToDelete.id],
                    () => {
                        console.log('Item excluído com sucesso');
                        // Atualiza o estado para refletir a remoção do item excluído
                        setData(prevData => prevData.filter(item => item.id !== itemToDelete.id));
                    },
                    (_, error) => {
                        console.error('Erro ao excluir item do banco de dados:', error);
                    }
                );
            });
        } catch (error) {
            console.error('Erro ao executar transação de exclusão:', error);
        }
    };


    return (
        <Container>
            <ListGames
                data={data}
                renderItem={({ item }) => (<ListFavoriteGames data={item}deleteItem={handleDelete}/>)}
                keyExtractor={(item, index) => index.toString()}
            />
        </Container>
    );
}
