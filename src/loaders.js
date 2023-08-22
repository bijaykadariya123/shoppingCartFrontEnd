import { baseURL } from "./base_url";

export const itemsLoader = async () =>{
    // make a call to backend index route
    const response = await fetch(`${baseURL}`)
    // convert the response in a js object
    const itemsList = await response.json()
    // return the Items list
    return itemsList
}