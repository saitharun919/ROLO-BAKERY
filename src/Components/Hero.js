import React from 'react'
import './Hero.css';
import barbie from './Image/barbie.jpg';
import chocolate from './Image/chocolate.jpg';
import pink from './Image/pink.jpg';
import image1 from './Image/image1.jpg';
import image2 from './Image/image2.jpg';
import image3 from './Image/image3.jpg';
import image4 from './Image/image4.jpg';
import image5 from './Image/image5.jpg';
import image6 from './Image/image6.jpg';
import image7 from './Image/image7.jpg';
import image8 from './Image/image8.jpg';
import fruitcake from './Image/fruitcake.jpg';
import chocofudge from './Image/chocofudge.jpg'
import bubbletea from './Image/bubbletea.jpg';
import vegancake from'./Image/vegancake.jpg';
const Hero = ({ addToCart }) => {
    const data = [
        {
            id:1,
            imgSrc: barbie,
            item: 'Design cakes',
        },
        {
            id:2,
            imgSrc: chocolate,
            item: 'Choclate Cakes',
        },

        {
            id:3,
            imgSrc: pink,
            item:'Pink-Collection',
        },
        {
            id:4,
            imgSrc: fruitcake,
            item: 'Fruit-Cake'
        },
        {
            id:5,
            imgSrc: chocofudge,
            item: 'Choco-Fudge'
        },
        {
            id:6,
            imgSrc : bubbletea,
            item: 'Bubble-Tea'
        },
        {
            id:7,
            imgSrc: vegancake,
            item:'Vegan-Cake'
        }
    ]

    const images = [
        {
            id: 1,
            imgSrc: image7,
            item: 'Profiti-Roles'
        },
        {
            id: 2,
            imgSrc: image8,
            item: 'Cup Cakes'
        },

        {
            id: 3,
            imgSrc: image4,
            item: 'collection'
        },
        {
            id: 4,
            imgSrc: image5,
            item: 'collection'
        },
        {
            id: 5,
            imgSrc: image6,
            item: 'Choco-Lava'
        }
    ]
  return (
            <div className='hero'>
                <h1 className='looking'>What are you looking for ?</h1>
                <div className='cake-list'>
                {data.map((list => {
                    return(
                        <div className='cake'>
                            <img className='images' src={list.imgSrc} />
                            <a className='cake-name' href=''>{list.item}</a> <br></br>
                            <a className='cake-price' href=''>{list.price}</a>
                        </div>
                    )
                }

                ))}
                </div>

                <h1 className='looking'>Selling Quickly</h1>
                <div className='cake-list'> 
                {images.map((image => {
                    return(
                            <div>
                                <img className='images' src={image.imgSrc} />
                                <a className='cake-name' href=''>{image.item}</a>
                                <button style={{width:'3rem',background:'none',margin:'1rem 0rem 0rem 4rem',border:'1px solid black'}} onClick={()=>addToCart(image)}>add</button>
                                <img className='images' src={image.imgSrc} />
                                <a className='cake-name' href=''>{image.item}</a>
                                <button style={{width:'3rem',background:'none',margin:'1rem 0rem 0rem 4rem',border:'1px solid black'}}>add</button>
                            </div>
                            
                    )
                }

                ))}
            </div>
            </div>
  )
  
}

export default Hero