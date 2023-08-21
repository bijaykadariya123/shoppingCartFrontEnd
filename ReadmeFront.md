# STEPS:
## Create React app 1
1. npx create-react-app@latest frontend-shoppingcart

EX: This will create a react app with all the files needed. TO TEST: go to terminal: npm start
## Create a file base_url.js 2
1. Copy the link of baseEnd application:
2. export const baseURL = "https://backendapishoppingcart.onrender.com"

## install react-router-dom saas 3
1. npm install react-router-dom sass

## Create router.js loaders.js actions.js inside src folder:
1. touch src/router.js src/loaders.js actions.js

## on router.js Import dependencies and do Initial setup
1. import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
2. import App from "./App"
3. Create a front end path:
    
    const router = createBrowserRouter(createRoutesFromElements(

        <Route path="/" element={<App/>}>

        </Route>
    )) 

    export default router