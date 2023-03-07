import React from 'react'
import {Container} from 'react-bootstrap'
import SignUp from '../Components/Auth/signup'
import Signin from '../Components/Auth/signin'

function Login(props) {
  return (
    <Container fluid = "md" className='d-flex justify-content-center align-items-center' style={{height: '70vh', maxWidth: '700px'}}>
          <Signin setUser = {props.setUser} className="row lg-4"/>
          <SignUp setUser={props.setUser}/>
    </Container>
  )
}

export default Login