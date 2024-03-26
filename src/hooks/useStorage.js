import AsyncStorage from "@react-native-async-storage/async-storage";

const key = '@mygames';

const useStorage = () => {

    const getItem = async () => {
        try {
            const games = await AsyncStorage.getItem(key);
            return games ? JSON.parse(games) : [];
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    const saveItem = async (newGame) => {
        try {
            let games = await getItem();

            let findGame = games.find(game => game.id === newGame.id);

            if (findGame) {
                return;
            }

            games.push(newGame);

            await AsyncStorage.setItem(key, JSON.stringify(games));

            console.log('Jogo salvo com sucesso!');
        } catch (err) {
            console.log("Erro ao salvar: " + err);
        }
    }

    const removeItem = async (id) => {
        try {
            let games = await getItem();

            let updatedGameList = games.filter(game => {
                return game.id !== id;
            });

            await AsyncStorage.setItem(key, JSON.stringify(updatedGameList));

            return updatedGameList;
        } catch (err) {
            console.log("Erro ao remover: " + err);
        }
    }

    return {
        getItem,
        saveItem,
        removeItem,
    }
}

export default useStorage;