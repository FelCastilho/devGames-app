import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/home";
import Search from '../pages/search';
import Deatils from '../pages/details';
import Favorites from "../pages/favorites";
import Genres from "../pages/genres";

export default function Routes(){

    const Stack = createStackNavigator();

    return(

        <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor: '#050B18',
                    elevation: 0,
                },
                headerTintColor: '#fff'          
            }}
        >

            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Search"
                component={Search}
            />

            <Stack.Screen
                name="Details"
                component={Deatils}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="My favorites"
                component={Favorites}
            />

            <Stack.Screen
                name="Genres"
                component={Genres}
                options={({ route }) => ({
                    title: route.params?.genreName || 'Genres',
                })}
            />

        </Stack.Navigator>
    )
}