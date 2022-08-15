import './App.css';
import data from './data';
import data2 from './data2';
import React from 'react'
import Nav from './components/Nav';
import Cards from './components/Cards';
import Cardstoo from './components/Cardstoo';
import Treat from './components/Treat';
import datatreat from './datatreat';
import Reviews from './components/Reviews';
import reviewdata from './reviewdata';
import Footer from './components/Footer';

export default function App() {
  const myCards=data.map(function(treatmentinfo){
    return(
      <Cards 
        key={treatmentinfo.id}
        treatmentinfo={treatmentinfo} />
    )
  })
  const myCards2=data2.map(function(treatmentinfoo){
    return(
      <Cardstoo 
        key={treatmentinfoo.id}
        treatmentinfoo={treatmentinfoo} />
    )
  })
  const myTreat=datatreat.map(function(treat){
    return(
      <Treat 
        key={treat.id}
        treat={treat}
      />
    )
  })
  const myReview=reviewdata.map(function(review){
    return(
      <Reviews 
          key={review.id}
          review={review}
      />
    )
  })
  return (
    <>
    <Nav/>
    <section className='cards'>
      {myCards}
    </section>
    <section className='cards'>
      {myCards2}
    </section>
    <div id='choose'>
      <div>
        <h3 id='ch'>Choose a treatment</h3>
        <hr id='hr'/>
      </div>
    </div>
    <section className='choose'>
      {myTreat}
    </section>
    <div id='choose'>
      <div>
        <h3 id='ch'>Reviews</h3>
        <hr id='hr'/>
      </div>
    </div>
    <section className='myrev'>
      {myReview}
    </section>
    <section className='footer'>
      <Footer/>
    </section>

    </>
  )
}

