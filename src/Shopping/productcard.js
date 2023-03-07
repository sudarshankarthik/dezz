import data from '../data.json'
import { Card, ListGroup,Button } from 'react-bootstrap'
import imge from '../res/img/hero-background-hoodieman.jpg'

function Productcard(props) {

  return (
    <Card >
      <Card.Img variant="top" src={imge} />
      <Card.Body>
        <Card.Title>{props.product_name}</Card.Title>
        <Card.Text>
            {props.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>${props.price}</ListGroup.Item>
        <ListGroup.Item>{props.inventory} Remaining {props.ratings} out of 5</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default Productcard