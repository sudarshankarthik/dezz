import React, {useState} from 'react'
import {Form, Button, Container, Row, Col, InputGroup} from 'react-bootstrap'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { UserAuth } from '../../firebaseConfig'
import { useContext } from 'react'
import { UserContext } from './authUser'
import { useNavigate } from 'react-router-dom'
import { db } from '../../firebaseConfig'
import { doc, setDoc } from "firebase/firestore"; 

function SignUp(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [pin, setPin] = useState(0)
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate()

    const updateDb = async (uid) => {
        await setDoc(doc(db, "products", uid), {
          email,
          firstName,
          lastName,
          address1,
          address2,
          city,
          pin
        })
          .then(console.log('added to database'))
          .catch(
            (e) => console.log(e)
          )
    }


    const register = async (e) => {
      e.preventDefault();

      await createUserWithEmailAndPassword(UserAuth,email,password)
        .then((newUser)=> {setUser(newUser.user); navigate('/'); updateDb(newUser.user.uid)})
        .catch((error)=> console.log(error))
    };

  return (
    <Form className='border rounded p-5 w-100'>
      <Container>
        <h3 className='mb-5'>Create your New Account</h3>
        <Row>
          <Col><h5 className='mb-3'>Personal Information</h5> </Col>
        </Row>
        <Form.Group>
        <Row>
        <Form.Label>Name</Form.Label>
        </Row>
        <Row>
            <Col sm className='mb-3'>
              <Form.Control type="text" placeholder='first name' onChange={(e) => setfirstName(e.target.value)}></Form.Control>
            </Col>
            <Col sm>
              <Form.Control type="text" placeholder='last name' onChange={(e) => setLastName(e.target.value)}></Form.Control>
            </Col>
        </Row>
        </Form.Group>
        <Row>
          <Col>
          <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />     
          </Form.Group>
          </Col>
        </Row>
        <Form.Group>
        <Row className='mt-3'>
        <Form.Label>Password</Form.Label>
        </Row>
        <Row>
            <Col sm className='mb-3'>
              <Form.Control type="password" placeholder='Set a Password'></Form.Control>
            </Col>
            <Col sm>
              <Form.Control type="password" placeholder='Re-enter same password' onChange={(e) => setPassword(e.target.value)}></Form.Control>
            </Col>
        </Row>
        </Form.Group>

        <Row className='my-3'>
          <h5>Address</h5>
        </Row>
        <Form.Group>
        <Row>
            <Col sm className='mb-3'>
              <Form.Control type="text" placeholder='Address Line 1' onChange={(e) => setAddress1(e.target.value)}></Form.Control>
            </Col>
            <Col sm className='mb-3'>
              <Form.Control type="text" placeholder='Address Line 2' onChange={(e) => setAddress2(e.target.value)}></Form.Control>
            </Col>
        </Row>
        </Form.Group>
        <Form.Group>
        <Row>
            <Col sm className='mb-3'>
              <Form.Control type="text" placeholder='City' onChange={(e) => setCity(e.target.value)}></Form.Control>
            </Col>
            <Col sm>
              <Form.Control type="number" placeholder='Pin'onChange={(e) => setPin(e.target.value)}></Form.Control>
            </Col>
        </Row>
        </Form.Group>
        <Row>
          <Button className='mt-4' onClick={register}>Create new Account</Button>
        </Row>
      </Container>
  </Form>
  )
}

export default SignUp