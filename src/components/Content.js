import './shashu/content.css';
import oyu from "../img/oyu.png";
import oyusec from "../img/oyu2.png";
import five from "../img/5tenge.png";
import ten from "../img/10tenge.png";
import twenty from "../img/20tenge.png";
import fifty from "../img/50tenge.png";
import hundred from "../img/100tenge.png";
import music from "../img/music.mp3";
import coinsound from "../img/coin.mp3";

import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ReactAudioPlayer from 'react-audio-player';
import Box from '@mui/material/Box';

const cashTitles = [
  { 
    id: 200,
    title: '200тг',
    sum: [fifty, twenty, fifty, twenty, five,twenty, twenty, ten, five]
  },
  { 
    id: 500,
    title: '500тг',
    sum: [hundred, fifty, fifty, twenty, twenty,  ten,twenty, twenty, twenty, ten, ten,hundred, ten, five,fifty,five]
  },
  { 
    id: 1000,
    title: '1000тг',
    sum: [hundred, five,five, hundred, hundred, hundred, fifty, fifty, hundred, hundred,fifty, fifty, fifty,twenty,twenty,twenty, ten, ten,twenty,twenty, ten, five,five]
  },
  { 
    id: 2000,
    title: '2000тг',
    sum: [ hundred, hundred, hundred, fifty, fifty,twenty,twenty,twenty,twenty,twenty, ten, ten, five,five,five,five,
      fifty,fifty, twenty,twenty,fifty, fifty, fifty,twenty,ten,ten,five,hundred,ten, hundred, hundred,five,ten, hundred, hundred, hundred, hundred, fifty, fifty, fifty, fifty, fifty,twenty,twenty,twenty,five,five,twenty,twenty, ten, ten, ten, five,five]
  },
]

function Content() {
  const audio = new Audio(coinsound);

  const [showCoins, setShowCoins] = useState(false);
  const [coinArray, setCoinArray] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const [show, setShow] = useState(false);

  const handleTwoHundred = ({id, sum}) => {
    console.log(id, sum)
    setCoinArray(sum)
    setShowCoins(true)
    
  }

  const handleCoinBtn = () => {
    console.log("pressed");
    setShowButton(false);
    // setIsShown(current => !current);
  }

  return (
    <div className="main-container">
      <ReactAudioPlayer
        src={music}
        autoPlay
      />

      <div className="row">
        <div className="col-1"><img src={oyu} alt="oyu" style={{width:'37%', height:'100%'}}/></div>
        <div className="col"><h1>Шашу</h1></div>
        <div className="col-2"><img src={oyusec} alt="oyu2" style={{width:'37%', height:'100%'}}/></div>
      </div>

      <div className="row-main">
        {coinArray.map((coins)=>(
          // <Button className='btn' onClick={()=>{handleCoinBtn()}} style={showButton ? {display: 'inline'}: {display: 'none'}}>
          //   <img src={coins} alt="" className="coin" style={showCoins ? {display: 'inline'}: {display: 'none'}  }/>
          // </Button>

             <Button className='btn'>
                <img src={coins} alt="" className="coin" style={showCoins ? {display: 'inline'}: {display: 'none'}  }/>
             </Button>
          
        ))}
      </div>

      <div className="row-w-btns">
        <Stack spacing={2} direction="row">
        {cashTitles.map((money)=>(
          <Button variant="contained" key={money.id} onClick={()=>{handleTwoHundred(money); audio.play();}}>{money.title}</Button>
        ))}
        </Stack>
      </div>
    </div>
  );
}


export default Content;