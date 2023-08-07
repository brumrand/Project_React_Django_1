import { Route, Routes, BrowserRouter} from "react-router-dom";
import {MainMenu} from "./asset_main_menu/main"
import {Login} from "./asset_login/login"


export const BasicRouting = () =>{
    let mainMenuRoute :string = "/mainMenu"
    return (
        

<BrowserRouter>
<Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path={mainMenuRoute} element={<MainMenu />}></Route>
</Routes>
</BrowserRouter>


     


    )
}