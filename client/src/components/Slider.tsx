import React from 'react'
import {Carousel} from 'react-bootstrap'

export default function Slider(){
    return (
        <div className="slider">
          <Carousel>
          <Carousel.Item className="carousel-hight" >
            <img
              className="d-block w-100"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/deeb3q0-b1a3614e-7bc5-4775-baed-ecf75a5e0617.jpg/v1/fill/w_1192,h_670,q_70,strp/2021_movie_posters__2nd_edition_by_thekingblader995_deeb3q0-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGVlYjNxMC1iMWEzNjE0ZS03YmM1LTQ3NzUtYmFlZC1lY2Y3NWE1ZTA2MTcuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.wl6-3Qe68--sBisEwfEOVzmcOIJle8tu2MFr4Ey90QQ"
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-hight" >
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/f6/91/73/f69173992504d93c0887dc21b0ccc8ac.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-hight" >
            <img
              className="d-block w-100"
              src="https://www.oracleglobe.com/wp-content/uploads/2020/03/South-Indian-Movies-2020_Horizontal-image-with-text_-1200-x-630_100.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    )
}
