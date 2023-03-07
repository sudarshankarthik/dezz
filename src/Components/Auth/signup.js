import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { UserAuth } from '../../firebaseConfig'
import { useContext } from 'react'
import { UserContext } from './authUser'
import { useNavigate } from 'react-router-dom'

function SignUp(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate()


    const register = async (e) => {
      e.preventDefault();

      await createUserWithEmailAndPassword(UserAuth,email,password)
        .then((newUser)=> {setUser(newUser.user); navigate('/')})
        .catch((error)=> console.log(error))
    };

  return (
    <Form className='border rounded p-5 w-100'>
    <Form.Group className="mb-3" controlId="formsignupEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formsignupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formsignupCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit" onClick={register}>
      Create New Account
    </Button>
  </Form>
  )
}

export default SignUp