import React from "react";
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Python from "./python";
import JavaScript from "./javascript";
import CSS from "./css";
import HTML from "./html";
import Sql from "./sql";
import SignUp from "./signup";
import Login from "./login";
import Home from "./home";



function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
      
      <Route path="/python" element={<Python/>}></Route>
      <Route path="/javascript" element={<JavaScript/>}></Route>
      <Route path="/Css" element={<CSS/>}></Route>
      <Route path="/HTML" element={< HTML/>}></Route>
      <Route path="/Sql" element={< Sql/>}></Route>
      <Route path="/" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}> </Route>
      <Route path="/home" element={< Home/>}></Route>     

      </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App