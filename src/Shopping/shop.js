import React from 'react'
import data from '../data.json'
import Productcard from './productcard'
import { Col, Container, Row } from 'react-bootstrap'

function Shop() {

  const products = data.map(
    (product) => {
      return (
        <Col>
        <Productcard key = {product.product_id}
                     product_name = {product.product_name}
                     description = {product.description}
                     price = {product.price}
                     inventory = {product.inventory}
                     className= 'mx-auto'
        />
        </Col>
      )
    }
  )
  return (
    <Container fluid className='my-5 mx-auto'>
      <Row>
        <Col lg={3}>col 1</Col>
        <Col>
          <Row xs={1} md={2} xl={3} className="g-4">
            {products}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Shop