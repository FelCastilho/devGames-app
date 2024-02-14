import { useState, useEffect } from 'react';
import './style.js';
import { Header } from "../../components/header/index.js";
import { Container, ListGenre, ContainerGames, Title, ListGames } from "./style.js";

import api from '../../services/api.js';

import Genres from '../../components/genres/index.js';
import Games from '../../components/games/index.js';

export default function Home(){

    const [genres, setGenres] = useState([]);
    const [games, setGames] = useState([]);
    
    useEffect(() => {

        async function loadGenres(){

            const response = await api.get('genres?key=96ffa22939174620840e464e6200055c');

            setGenres(response.data.results.slice(0, 5));
        }

        async function loadGames(){
            const response = await api.get('games?page_size=5&key=96ffa22939174620840e464e6200055c')

            setGames(response.data.results.slice(0,5))
        }

        loadGenres();
        loadGames();

    }, [])

    return(
        
        <Container>

            <Header/>

            <ListGenre
            data={genres}
            renderItem={({ item }) => <Genres data={item}/>}
            keyExtractor={item => String(item.id)}
            horizontal
            showsHorizontalScrollIndicator={false}
            />

            <ContainerGames>
                <Title>Trending games</Title>

                <ListGames
                data={games}
                renderItem={({item}) => <Games data={item}/>}
                keyExtractor={item => String(item.id)}
                />

            </ContainerGames>

        </Container>
    )
}