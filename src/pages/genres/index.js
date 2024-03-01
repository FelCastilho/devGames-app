import { useEffect, useState } from "react";
import './style.js'
import { Container } from "./style";
import { View, ActivityIndicator, FlatList } from "react-native"
import { useRoute } from "@react-navigation/native"
import { CardsGenres } from "./components/cardsGenres";
import api from "../../services/api";

export default function Genres(){

    const route = useRoute();
    const data = route.params?.content;

    const [ genres, setGenres ] = useState([]);
    const [ loading, setLoading ] = useState([]);

    useEffect(() => {

        async function loadGenreSelected(){
            const response = await api.get(`/games?page_size=10&key=96ffa22939174620840e464e6200055c&genres=${data.id}`)

            setGenres(response.data.results);
            setLoading(false)
        }

        loadGenreSelected();

    }, [])

    if(loading){
        return(
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#050B18'}}>
             <ActivityIndicator size={24} color="#FF455F"/>
            </View>
        )
        
    }else{
        return(

            <Container>
    
                <FlatList
                data={genres}
                renderItem={({item}) => ( <CardsGenres data={item}/> )}
                keyExtractor={item => String(item.id)}
                style={{width: '95%'}}
                />
    
            </Container>
    
        )
    }
    
}