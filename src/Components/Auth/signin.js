import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { UserAuth } from '../../firebaseConfig'
import { UserContext } from './authUser'

function Signin(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext);
    const navigate = useNavigate()


    const login = async (e) => {
      e.preventDefault();

      await signInWithEmailAndPassword(UserAuth,email,password)
        .then((newUser)=> {setUser(newUser.user.uid); navigate('/'); console.log(newUser.user.uid);})
        .catch((error)=> console.log(error))
    };

  return (
    <Form className='border rounded p-5 w-100'>
    <Form.Group className="mb-3" controlId="formsigninEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formsigninPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formsigninCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit" onClick={login}>
      Sign In
    </Button>
  </Form>
  )
}

export default Signin