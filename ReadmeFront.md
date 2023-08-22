# STEPS:
## Create React app 1
1. npx create-react-app@latest frontend-shoppingcart

EX: This will create a react app with all the files needed. TO TEST: go to terminal: npm start
## Create a file base_url.js 2
1. Copy the link of baseEnd application:
2. export const baseURL = "https://backendapishoppingcart.onrender.com"

## install react-router-dom saas 3
1. npm install react-router-dom sass

## Create router.js loaders.js actions.js inside src folder: 4
1. touch src/router.js src/loaders.js actions.js

## on router.js Import dependencies and do Initial setup 5
1. import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
2. import App from "./App"
3. Create a front end path:
    
    const router = createBrowserRouter(createRoutesFromElements(

        <Route path="/" element={<App/>}>

        </Route>
    )) 

    export default router
 ## In Index.js: 6
  Register the router created above in Index.js since Index.js is where app starts
 1. import {RouterProvider} from "react-router-dom"
 2. import router from "./router.js"

## create following folder inside src folder and respective files:7
1. create components folder inside src folder
    1. create Header.js file
2. pages folder inside inside src folder
    1. create index.js file
    2. create show.js file

## On router.js 8
1. import Index from "./pages/index.js"
2. import Show from "./pages/show.js"

## on App.js 9
1. import {Outlet} from "react-router-dom"

        This outlet component will let you show the subroute from your router.js
2. import Header from "./components/Header.js"


## on Header.js 10
1. import { Link } from "react-router-dom"
        use Link to use like a anchor tag (<a></a>)

## create styles.scss file on src folder 11
1. go to index.js and import "./styles.scss"

## on you loaders.js 12
1. import { baseURL } from "./base_url"
2. Create a function loaderItems to fetch data and return as js object:

## on your router.js 13
1. import { itemsLoader } from "./loaders.js"
2. use you itemsLoader in your route in index component <Route loader={itemsLoader}/>

## on pages/index.js
1. import {Link, useLoaderData} from "react-router-dom"
2. use useLoaderData()
3. Write a function to return your HTML elements on index page.

