import React, { useState } from 'react'
import {Button, Container, Nav} from 'react-bootstrap'
import SignUp from '../Components/Auth/signup'
import Signin from '../Components/Auth/signin'

function Login(props) {

  const [isSignin, setIsSignin] = useState(1)

  const changeSignin = (n)=> {
    setIsSignin(n);
  }

  return (
    <div className='d-flex justify-content-center align-items-center my-5'>
    <div style={{maxWidth: '700px'}}>
      <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
      <Button variant='outline-success' onClick={() => changeSignin(1)}>Sign In</Button>
      </Nav.Item>
      <Nav.Item>
      <Button variant='outline-success'  onClick={() => changeSignin(0)}>Sign Up</Button>
      </Nav.Item>
    </Nav>
    <Container fluid className='d-flex justify-content-center align-items-center mt-2'>
          {isSignin ? <Signin setUser = {props.setUser} className="row lg-4"/> : <SignUp setUser={props.setUser}/>}
    </Container>
    </div>
    </div>
  )
}

export default Login