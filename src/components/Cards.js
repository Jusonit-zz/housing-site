import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from './images/img-1.jpg';
import img2 from './images/img-2.jpg';
import img3 from './images/img-3.jpg';
import img4 from './images/img-4.jpg';
import img5 from './images/img-5.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='Loren Ipsum about New York City homes and whatever else goes here.'
              label='New York City'
              path='/services'
            />
            <CardItem
              src={img2}
              text='Loren Ipsum about San Francisco homes and whatever else goes here.'
              label='San Francisco'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Loren Ipsum about Toronto homes and whatever else goes here.'
              label='Toronto'
              path='/services'
            />
            <CardItem
              src={img4}
              text='Loren Ipsum about Houson homes and whatever else goes here.'
              label='Houston'
              path='/products'
            />
            <CardItem
              src={img5}
              text='Loren Ipsum about Seattle homes and whatever else goes here.'
              label='Seattle'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;