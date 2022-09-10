import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Login(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let Navigate = useNavigate()
  const handelChange = (e)=>{
    setemail(e.target.value)
  }
  const handelChange1 = (e)=>{
    setpassword(e.target.value)
  }

  const handlesubmit = (e)=>{
    e.preventDefault()
    const arr={"email":email,"password":password}
    axios.post("https://login-logout-stud1.herokuapp.com/login",arr).then((res)=>{
            console.log(res)
            if(true){
                alert("sucessfully Logged in")
                Navigate("/home")
        }
        else{
               alert(res) 
            }
    })
    }
    return (
    <Form className="col-lg-6 offset-lg-3" autoComplete="off" onSubmit={handlesubmit} >
      <h1 className="text-center">Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>email</Form.Label>
        <Form.Control type="email" className="myInput" placeholder="Enter email"
      value={email}
        onChange={handelChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        value={password}
        onChange={handelChange1} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" className="log">
        Submit
      </Button>
               </Form>
          
  );
}

export default Login;
