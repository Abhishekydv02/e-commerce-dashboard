import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import React, { useState } from 'react';
import axios from 'axios';
function Register() {

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  async function signup(e){

e.preventDefault();
      
      let item ={
          username : name,
          email : email,
          password : password
      }
     const res = await axios.post('http://192.168.137.1:5000/api/auth/register',item);
     console.log(res);

  }

  

    return (
        <div className='col-sm-6 offset-sm-3 flexclass' >
            {/* <h2>register page</h2> */}
            <Form className='register-form'>

                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
<Form.Control type="text" placeholder="Username" value={name} onChange={(e)=>setName(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={signup}>
                    Submit
                </Button>

            </Form>
        </div>
    )
}
export default Register;