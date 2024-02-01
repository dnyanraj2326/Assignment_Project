import AsyncStorage from '@react-native-async-storage/async-storage';

export let setStoreData = async (key,value) => {
try {
    // console.log("first")
    let jsonData = value;
    if(typeof(data) != 'string'){
       jsonData = JSON.stringify(value)
    }
    let data = await AsyncStorage.setItem(key,jsonData);
} catch (error) {
    console.log("Something went worng during store data in Async storage", error)
}
} ;



export let getStoreData = async (key) => {
    try {
        let  getData = await AsyncStorage.getItem(key)
        return getData !== null ? JSON.parse(getData):null
    } catch (error) {
        console.log("Something went worng during getting data in Async storage", error)
    }
}