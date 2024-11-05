import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main.';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Navroutes from "./components/Nav/Navroutes/Navroutes";


function App(props) {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header />
                <Nav />
                <Navroutes appState={props.appState} />
            </div>
        </BrowserRouter>
    );
}

export default App;

