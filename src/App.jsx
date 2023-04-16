import Header from "./components/Header";
import './App.css';
import {Outlet} from 'react-router-dom';
import Mounting from "./components/Mounting";
import Updating from "./components/Updating";
import Unmounting from "./components/Unmounting";


function App(){
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App;