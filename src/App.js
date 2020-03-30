import React, { useState } from 'react';
import fake1 from './assets/images/fake1.png';
import fake2 from './assets/images/fake2.png';
import shark1 from './assets/images/jows1.png';
import shark2 from './assets/images/jows2.png';
import shark3 from './assets/images/jows3.png';
import './App.css';

function App() {
  const [fake, setFake] = useState(fake1);
  return (
    <div style={{width:"1000px",margin:"0 auto",position:"relative"}}>
      <img src={shark1} className="shark1"/>
      <img src={shark2} className="shark2"/>
      <img src={shark3} className="shark3"/>
      <h1><span role="img">🦈</span>와 BunDeGi</h1>
      <img src={fake} alt="죠습니다" style={{cursor:"pointer"}} onClick={_=>(fake === fake1) ? setFake(fake2) : setFake(fake1)}/>
    </div>
  );
}

export default App;