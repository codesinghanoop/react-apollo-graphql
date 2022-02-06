import AsyncStorage from '@react-native-community/async-storage'

export const setItem = async (userData, key) => {
    const currentDataInDb = await getItem(key);
    currentDataInDb.push(userData);
    try {
        await AsyncStorage.setItem(key, JSON.stringify(currentDataInDb));
    } catch (error) {
    }
}

export const getItem = async (key) => {
    const favList = await AsyncStorage.getItem(key) || "[]"
    return JSON.parse(favList)
}

export const findIndex = (currentDataInDb, userData) => currentDataInDb.indexOf(userData);

export const unsetFavId = async (userData, key) => {
    const currentDataInDb = await getItem(key);
    const index = findIndex(currentDataInDb,userData);
    if(index !== -1) {
        currentDataInDb.splice(index, 1);
    }
    try {
        await AsyncStorage.setItem(key, JSON.stringify(currentDataInDb));
    } catch (error) {
    }
}

export const unsetFavList = async (id, key) => {
    const currentDataInDb = await getItem(key);
    const filteredData = currentDataInDb.filter((ele) => ele.node.id != id);
    try {
        await AsyncStorage.setItem(key, JSON.stringify(filteredData));
    } catch (error) {
    }
}


export const checkExist = (arr, id) => arr.includes(id);
