import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Home(){
   let Navigate = useNavigate()
const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const[dob,setdob]=useState("");
  const[mobile,setmobile]=useState("");
  //Nawe
  const handelChange = (e)=>{
    setage(e.target.value)
  }
  const handelChange3 = (e)=>{
    setemail(e.target.value)
  }

  //email
  const handelChange1 = (e)=>{
    setgender(e.target.value)
  }
  //date
  //
  const handelChange5 = (e)=>{
    setdob(e.target.value)
  }
   const handelChange6 = (e)=>{
    setmobile(e.target.value)
  }

   const handleSubmit = async(e)=>{
    e.preventDefault()
    const arr = {"email":email,"age":age,"gender":gender,"date_of_birth":dob,"mobile":mobile}
     axios.post("https://login-logout-stud1.herokuapp.com/add",arr).then((res)=>{
          console.log(res)
            if(true){
                alert("sucessfully changed")
            }
            else{
               alert(res["data"]) 
            }
        })
  }
  return(
    <Form className="col-lg-6 offset-lg-3" autoComplete="off" onSubmit={handleSubmit}>
        <h1 className="text-center">User details</h1>
        <Form.Group className="mb-3" controlId="username">
        <Form.Label>email</Form.Label>
        <Form.Control type="text" 
        value={email}
        onChange={handelChange3}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="username">
        <Form.Label>age</Form.Label>
        <Form.Control type="text" 
        value={age}
        onChange={handelChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
        <Form.Label>gender</Form.Label>
        <Form.Control type="text" 
        value={gender}
        onChange={handelChange1}/>
        </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Date of birth</Form.Label>
        <Form.Control type="string" 
        onChange={handelChange5}
    name="password"
    value= {dob}/>
      </Form.Group>

       <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="Number"  onChange={handelChange6}
    name="confrim_password"
    value= {mobile}/>
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Save Passwords" />
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
        </Button>
    </Form>
)}
export default Home