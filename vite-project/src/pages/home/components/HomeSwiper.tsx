import {Swiper, SwiperSlide, } from 'swiper/react'
import 'swiper/css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { RecipeInterface } from '../../../Types';
import {Pagination, EffectCoverflow, Autoplay} from "swiper/modules"

import 'swiper/css/pagination';



interface HomeSwiperProps {
    recipeList: RecipeInterface[];
  }

const HomeSwiper = ({recipeList}: HomeSwiperProps) => {

  
  return (
    <div>
        <Swiper
        modules={[Pagination, EffectCoverflow, Autoplay]}
        autoplay
        mousewheel
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400:{
            slidesPerView:2,
          },
          639: {
            slidesPerView: 3,
          },
          865:{
            slidesPerView:3
          },
          1000:{
            slidesPerView:3
          },
          1500:{
            slidesPerView:3
          },
          1700:{
            slidesPerView:3
          }
        }}
      spaceBetween={50}
      centeredSlides
      /* effect={"coverflow"} */
      /* slidesPerView={3} */
      pagination={{ clickable: true }}
      /* onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} */
      coverflowEffect={{
        rotate: 50, stretch: 0, depth: 100, modifier: 1,
        slideShadows: true
      }}
      
    >
      
        {recipeList.map((recipe) => (
            <SwiperSlide key={recipe._id}>
          <div className="col-md-8 mb-4">
            <Card style={{ width: '100%', border: "none" }}>
              <Card.Img variant="top" src={recipe.imageUrl}/>
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Button variant="primary" className="btn-block">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          </SwiperSlide>
        ))}
      
    </Swiper>
    </div>
  )
}

export default HomeSwiper