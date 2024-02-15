import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/home";
import Search from '../pages/search';
import Category from '../pages/category';
import Deatils from '../pages/details';
import Favorites from "../pages/favorites";

export default function Routes(){

    const Stack = createStackNavigator();

    return(

        <Stack.Navigator>

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
                name="Category"
                component={Category}
            />

            <Stack.Screen
                name="Favorites"
                component={Favorites}
            />


        </Stack.Navigator>
    )
}