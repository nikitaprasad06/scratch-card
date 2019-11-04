import React from 'react';
import ScratchCard from 'react-scratchcard';
import './App.css'

const settings = {
  width: 500,
  height: 500,
  image: 'scratchcard.jpg',
  finishPercent: 70,
  onComplete: () => console.log('The card is now clear!')
};
 
const App = () =>
  <ScratchCard {...settings}>
    Congratulations! You WON!
  </ScratchCard>;

export default App;
