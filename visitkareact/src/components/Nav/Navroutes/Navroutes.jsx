import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "../../Main/Main.";
import Dialogs from "../../Dialogs/Dialogs";
import News from "../../News/News";
import Music from "../../Music/Music";
import Settings from "../../Settings/Settings";

function Navroutes(props) {
    return (
        <div className='app-wrapper-content'>
            <Routes>
                <Route path="/main" element={<Main users={props.appState.mainPage.users} />}/>
                <Route path="/dialogs/*" element={<Dialogs userData={props.appState.mainPage.users}/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="*" element={<div>404: Страница не найдена</div>}/>
            </Routes>
        </div>
    )
}

export default Navroutes;