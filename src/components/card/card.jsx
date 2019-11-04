import React from 'react';
import CardImg from './../../assets/creditCardImg.png';
import './card.css';

export default function Card(props) {
  let {
    cardHolder,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen,
    monthSelector,
    yearSelector,
    cvv1,
    cvv2,
    cvv3,
    cvv4
  } = props.info;

  return (
    <div className='cardSectionOverall'>
      <img className='cardImg' src={CardImg} alt='' />
      <div className='cardHolderCard'>
        <p className='cardHolderTitle text'>Cardholder</p>
        <p className='nameInput text'>{cardHolder}</p>
      </div>
      <div className='numberInputCard'>
        <div className='firstSect cardSection'>
          <p className='oneCard text'>{one || '#'}</p>
          <p className='twoCard text'>{two || '#'}</p>
          <p className='threeCard text'>{three || '#'}</p>
          <p className='fourCard text'>{four || '#'}</p>
        </div>
        <div className='secondCard cardSection'>
          <p className='fiveCard text'>{five || '#'}</p>
          <p className='sixCard text'>{six || '#'}</p>
          <p className='sevenCard text'>{seven || '#'}</p>
          <p className='eightCard text'>{eight || '#'}</p>
        </div>
        <div className='thirdCard cardSection'>
          <p className='nineCard text'>{nine || '#'}</p>
          <p className='tenCard text'>{ten || '#'}</p>
          <p className='elevenCard text'>{eleven || '#'}</p>
          <p className='twelveCard text'>{twelve || '#'}</p>
        </div>
        <div className='fourthCard cardSection'>
          <p className='thirteenCard text'>{thirteen || '#'}</p>
          <p className='fourteenCard text'>{fourteen || '#'}</p>
          <p className='fifteenCard text'>{fifteen || '#'}</p>
          <p className='sixteenCard text'>{sixteen || '#'}</p>
        </div>
      </div>
      <div className='expirationSectionCard'>
        <p className='expirationTitle text'>Expires</p>
        <div className='expirationChange'>
          <p className='expItm text'>{monthSelector || 'MM'}</p>
          <p className='expItm text'>/</p>
          <p className='expItm text'>{yearSelector || 'YY'}</p>
        </div>
      </div>
      <div className='cvvCard text'>
        <p>{cvv1 || '#'}</p>
        <p>{cvv2 || '#'}</p>
        <p>{cvv3 || '#'}</p>
        <p>{cvv4 || '#'}</p>
      </div>
    </div>
  );
}
