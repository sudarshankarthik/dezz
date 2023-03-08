import React, { useState } from 'react'
import { Navbar, Container, Nav, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './Auth/authUser';
import { signOut } from 'firebase/auth';
import { UserAuth } from '../firebaseConfig';
import { db } from '../firebaseConfig';
import { collection, doc, getDoc } from 'firebase/firestore';

function Navb() {

  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

    const login = (e)=> {
      navigate('/login')
    }

    const logout = async ()=> {
      await signOut(UserAuth)
      .then((newUser)=> {setUser(null); navigate('/')})
      .catch((error)=> console.log(error))
    }

    const userCollection = collection(db,'products')

    const [uname, setUname] = useState('second')

    const getUname = async () => {
      const docRef = doc(db,'products',user) 
      const data = await getDoc(docRef)
      if(data.exists()) setUname(data.data().firstName)
      else console.log("doc not found");
      return null
    }

    if(user != null) {
      getUname()
      console.log(uname);
    }

  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">DesiVibezz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/product">
          <Nav.Link>Shop</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
          <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
          <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
          </Nav>
          <Nav className='justify-content-end'>
           {user === null ? <Button onClick={login}>Login</Button> :<>Hi {uname} <Button onClick={logout}>Logout</Button> </>} 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navb