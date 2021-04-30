import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import styled  from 'styled-components';
import {motion} from 'framer-motion';

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <CarouselStyle>
    <Carousel pause='hover' className='bg'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/shop/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name} (₹{product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
    </CarouselStyle>
  )
}

const CarouselStyle = styled(motion.div)`
   /* carousel */
   background-color: black;
.carousel-item-next,
.carousel-item-prev,
.carousel-item.active {
  display: flex;
}
.carousel-caption {
  position: absolute;
  top: 0;
}

.carousel-caption h2 {
  font-family: "Montserrat", sans-serif;
  color: #fff;
}

.carousel img {
  height: 250px;
 
  padding-top: 1rem;
  margin: 60px;
  margin-left: auto;
  margin-right: auto;

  /*height: 300px;
  padding: 30px;
  padding-left: 40%;
  padding-right: 40%;
  object-fit: cover;
  margin: 40px;

  margin-left: auto;
  margin-right: auto;
  */
}
.carousel a {
  margin: 0 auto;
}

@media (max-width: 900px) {
  .carousel-caption h2 {
    font-size: 2.5vw;
    font-family: "Montserrat", sans-serif;
  }
  .carousel img {
    height: 150px;
  }
}
`

export default ProductCarousel