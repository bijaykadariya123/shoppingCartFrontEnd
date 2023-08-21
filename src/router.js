import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Index from "./pages/index.js"
import Show from "./pages/show.js"


const router = createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<App/>}>
        <Route path="" element={<Index/>}/>
        <Route path=":id" element={<Show/>}/>
        <Route path="create"/>
        <Route path="update/:id"/>
        <Route path="delete/:id"/>

    </Route>
))

export default router