import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import Register from  "./Rejister"
import Login from "./Login"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import axios from "axios"
import Home from "./Home"
function App(){
     
	return (
           <div>
            <Router>
                    <Routes>
                        <Route path ="/" element={<Register />}/>
                        <Route path ="/login" element={<Login />}/>
                        <Route path ="/home" element={<Home />}/>
                    </Routes>
        </Router>

        </div> 
	);
}

export default App;
