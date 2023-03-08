import React, {useContext} from 'react'
import { UserContext } from '../Components/Auth/authUser';
import { Button, Card} from 'react-bootstrap';
import '../custom.css'
import shirt from '../res/img/shirt.jpg'
import tshirt from '../res/img/tshirt.png'
import hoodie from '../res/img/hoodie.jpg'
import { Navigate, useNavigate } from 'react-router-dom';

function Home() {
  const {user} = useContext(UserContext);

  const navigate = useNavigate()

  const toShop = ()=>{
    navigate('/product')
  }
  
  return (
    <div>
      <div className="container-fluid px-4 py-5 hero">
    <div className="row flex-lg-row align-items-center g-5 py-5">
      {/* <div className="col-12 col-sm-8 col-lg-6">
        <img src={sideimg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div> */}
      <div className="col-12 col-md-7 xl-6">
        <h2 className="display-6 text-white fw-bold lh-1 mb-3">Welcome to our online store for premium t-shirts, shirts, and hoodies!</h2>
        <p className="lead">At our online store, we believe that quality and style go hand-in-hand. That's why we're committed to providing you with a range of premium t-shirts, shirts, and hoodies that are designed to last and look great. Whether you're looking for a classic white tee, a stylish button-down shirt, or a cozy hoodie for those cooler days, we've got you covered. Plus, with our easy-to-use website and fast shipping, it's never been easier to upgrade your wardrobe. So why wait? Explore our collection today and see what catches your eye!</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={toShop}>Shop the latest styles</button>
          <button type="button" className="btn btn-secondary btn-lg px-4">Learn more about us</button>
        </div>
      </div>
    </div>
  </div>

  <div className='container-fluid px-4 py-5'>
      <div className='row flex-lg-row align-items-center justify-content-center g-5 py-5'>
        <div className='col-12 col-md-3'>
              <Card text={'light'} classname= 'mx-auto'>
              <Card.Img src={tshirt} alt="Card image" />
              <Card.ImgOverlay>
              <Card.Body>
                <Card.Title> Premium T-Shirts</Card.Title>
                <Card.Text>
                Our premium t-shirts are designed to be comfortable, stylish, and built to last. Made with high-quality materials and available in a range of colors and designs, our t-shirts are perfect for any occasion. Whether you're looking for a classic white tee or something a little more bold and adventurous, we've got you covered.
                </Card.Text>
                <Button variant="outline-light" className='my-4' onClick={toShop}>Shop Our T-shirt Collection</Button>
              </Card.Body>
              </Card.ImgOverlay>
              </Card>
        </div>
        <div className='col-12 col-md-3'>
              <Card text={'light'} classname= 'mx-auto'>
              <Card.Img src={shirt} alt="Card image" />
              <Card.ImgOverlay>
              <Card.Body>
                <Card.Title>Stylish Shirts</Card.Title>
                <Card.Text>
                From casual button-downs to dress shirts, our collection of stylish shirts is sure to impress. Crafted from premium materials and designed to fit and flatter, our shirts are perfect for any occasion. Dress them up or down, wear them tucked or untucked – the possibilities are endless.
                </Card.Text>
                <Button variant="outline-light" className='my-5' onClick={toShop}>Shop Our Shirt Collection</Button>
              </Card.Body>
              </Card.ImgOverlay>
              </Card>
        </div>
        <div className='col-12 col-md-3'>
              <Card  text={'light'} classname= 'mx-auto'>
              <Card.Img src={hoodie} alt="Card image" />
              <Card.ImgOverlay>
              <Card.Body>
                <Card.Title>Cozy Hoodies</Card.Title>
                <Card.Text>
                Stay warm and stylish with our collection of cozy hoodies. Made from soft, comfortable materials and available in a range of colors and designs, our hoodies are perfect for lounging at home or heading out on the town. Whether you prefer a classic pullover or a trendy zip-up, we've got you covered.
                </Card.Text>
                <Button variant="outline-light" className='my-4' onClick={toShop}>Shop Our Hoodie Collectione</Button>
              </Card.Body>
              </Card.ImgOverlay>
              </Card>
        </div>
      </div>
  </div>
  </div>
  )
}

export default Home