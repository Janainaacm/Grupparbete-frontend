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
          450:{
            slidesPerView:2,
          },
          639: {
            slidesPerView: 2,
          },
          865:{
            slidesPerView:3
          },
          1000:{
            slidesPerView:3
          },
          1500:{
            slidesPerView:5
          },
          1700:{
            slidesPerView:5
          }
        }}
      spaceBetween={50}
      /* effect={"coverflow"} */
      /* slidesPerView={3} */
      pagination={{ clickable: true }}
      /* onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} */
      
      
    >
      
        {recipeList.map((recipe) => (
            <SwiperSlide key={recipe._id}>
          <div className="" style={{height:"350px", width:"250px"}} >
          <Card style={{ }}>
        <Card.Img variant="top" src={recipe.imageUrl} className="img-fluid" style={{height:"150px"}}/>
        <Card.Body style={{height:"160px"}}>
          <h4 style={{height:"86px"}}>{recipe.title}</h4>
          <Button variant="primary" className="">Go somewhere</Button>
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