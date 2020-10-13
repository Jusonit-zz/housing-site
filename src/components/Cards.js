import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Loren Ipsum about New York City homes and whatever else goes here.'
              label='New York City'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Loren Ipsum about San Francisco homes and whatever else goes here.'
              label='San Francisco'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../images/img-3.jpg'
              text='Loren Ipsum about Toronto homes and whatever else goes here.'
              label='Toronto'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Loren Ipsum about Houson homes and whatever else goes here.'
              label='Houston'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
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