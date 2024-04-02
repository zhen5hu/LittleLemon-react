import React from 'react';
import restaurantfood from '../images/restaurantfood.jpg';
import chef from '../images/restaurant chef B.jpg';
import {HStack,Image} from "@chakra-ui/react";
import Card from "./Card";
import Review from "./Review";

const foodcards = [
    {
      title: "Green Salad",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      getImageSrc: () => require("../images/greek salad.jpg"),
      price: "$12.99"
    },
    {
      title: "Brushetta",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      getImageSrc: () => require("../images/Brushetta.jpg"),
      price: "$12.99"
    },
    {
        title: "Lemon Dessert",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        getImageSrc: () => require("../images/lemon dessert.jpg"),
        price: "$12.99"
    },
  ];

  const rankings = [
    {
        name: "Nathen",
        getImageSrc: () => require("../images/c1.jpg"),
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        name: "Linda",
        getImageSrc: () => require("../images/c2.jpg"),
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        name: "Gabby",
        getImageSrc: () => require("../images/c3.jpg"),
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        name: "Brian",
        getImageSrc: () => require("../images/c4.jpg"),
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
  ];

const Main = () => (
    <main>
        <section className='hero'>
            <article className='textbox'>
                <h1 className='margin-b'>Little Lemon</h1>
                <h2 className='margin-t'>Chicago</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3>
                <button>Reserve Now</button>
            </article>
            <Image src={restaurantfood} alt="cover" borderRadius="1vw" height="70%" width="25%"/>
        </section>
        <section className='highlight'>
            <HStack className='HS'>
                <h1>Weekly Special</h1>
                <button>Online Menu</button>
            </HStack>
            <HStack className='HS'>
                {foodcards.map((foodcard) => (
                <Card
                    key={foodcard.title}
                    title={foodcard.title}
                    description={foodcard.description}
                    imageSrc={foodcard.getImageSrc()}
                    price={foodcard.price}
                />
                ))}
            </HStack>
        </section>
        <section className='testimonial'>
            <h1 className='margin-t'>Recent Reviews</h1>
            <HStack className='HS'>
                {rankings.map((ranking) => (
                    <Review
                        key={ranking.name}
                        name={ranking.name}
                        photo={ranking.getImageSrc()}
                        review={ranking.review}
                    />
                ))}
            </HStack>
        </section>
        <section>
            <HStack className='about'>
                <article className='textbox'>
                    <h1 className='margin-b'>Little Lemon</h1>
                    <h2 className='margin-t'>Chicago</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3>
                </article>
                <Image src={chef} alt="cover2" height="70%" width="35%"/>
            </HStack>
        </section>

    </main>
)
export default Main;