import {Swiper, SwiperSlide, } from 'swiper/react'
import 'swiper/css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { RecipeInterface } from '../../../Types';
import {Pagination, EffectCoverflow, Autoplay} from "swiper/modules"

import 'swiper/css/pagination';
import { useAPIState } from '../../../store/APIState';
import { useNavigate } from 'react-router-dom';



interface HomeSwiperProps {
    recipeList: RecipeInterface[];
  }

const HomeSwiper = ({recipeList}: HomeSwiperProps) => {
  const navigate = useNavigate();


  const {
    setRecipeIDState,
  } = useAPIState();

  const handleClick = (recipeId: string, recipeName: string) => {
    setRecipeIDState(recipeId)
    navigate(`/Recept/${recipeName}`);
  };

  
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
            slidesPerView:4
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
          <Card 
          style={{cursor: "pointer" }}
          onClick={() => handleClick(recipe._id, recipe.title)}
          >
        <Card.Img variant="top" src={recipe.imageUrl} className="img-fluid" style={{height:"150px"}}/>
        <Card.Body style={{height:"160px"}}>
          <h4 style={{height:"86px"}}>{recipe.title}</h4>
          {/* <Button variant="primary" className="">Go to recipe</Button> */}
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