import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC games!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
           <ul className='cards__items'>
            {/* <Numbers 
              src='images/1.jpg'
              
            />  */}
            <CardItem
              src='images/Donkey_Kong_flier.jpg'
              text='Mario has to face off against Donkey Kong, with hazards everywhere.'
              label='Donkey Kong'
              path='/services'
              />
            <CardItem
              src='images/dkjr.jpg'
              text='Donkey Kong Jr. has to free Donkey Kong from Mario.'
              label='Donkey Kong Jr.'
              path='/services' />
            <CardItem
              src='images/Dk3_arcade.jpg'
              text='Stanley has to exterminate Donkey Kong and other pests.'
              label='Donkey Kong 3'
              path='/services'
            /> 
            </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/donkey-kong-country-1.jpg'
              text='Donkey Kong and Diddy Kong set out to reclaim the hoard of bananas and defeat the Kremlings.'
              label='Donkey Kong Country'
              path='/products'
            />
            <CardItem
              src='images/donkey-kony-country-2.jpg'
              text='Diddy Kong and his friend Dixie Kong, who must rescue Donkey Kong after he is kidnapped by King K. Rool.'
              label='Donkey Kong Country 2'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
