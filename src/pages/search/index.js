import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import './style.js'
import { Container, ListGames } from "./style";
import api from '../../services/api';

import SearchedGames from "../../components/searchedGames";

export default function Search(){

    const route = useRoute();
    const data = route.params?.content;

    const [ gameSearched, setGameSearched ] = useState([]);

    useEffect(() => {

        async function loadSearch(){
            const response = await api.get(`games?page_size=5&key=96ffa22939174620840e464e6200055c&search=${data}`);

            setGameSearched(response.data.results);
        }
        
        loadSearch()

    }, [])

    return(
        <Container>

            <ListGames
            data={gameSearched}
            renderItem={({item}) => <SearchedGames data={item}/>}
            keyExtractor={(item) => String(item.id)}
            style={{width: '95%'}}
            />

        </Container>
    )
}