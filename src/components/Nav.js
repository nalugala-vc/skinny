import React from 'react'

export default function Nav() {
  return (
    <>
    <section>
        <div className='nav1'>
            <div className='info'>
                <span>Email: skinny@myexample.com</span>
                <span>Phone: +(245)204 3008 2856</span>
            </div>
            <div className='icons'>
                <span>follow us</span>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
        </div>
        <nav>
            <div className='links'>
                <span className='logo'>skin<span className='logo b'>-ny</span></span>
                <span><a href=''>HOME</a></span>
                <span><a href=''>TREATMENTS</a></span>
                <span><a  href=''>SHOP</a></span>
                <span><a href=''>REVIEWS</a></span>
            </div>
            <div className='srch'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-calendar-days"></i>
                <button className='app'>APPOINTMENT</button>
                <img className='prof' src={process.env.PUBLIC_URL+`/images/download.jpg`} alt="profilepic" />
            </div>
            
        </nav>
        <div className='images'>
            <img className='skinmodels' src={process.env.PUBLIC_URL+`/images/skinmodels3.jpg`} alt="skinmodels"/>
        </div>
        <div className='ins-img'>
            <div className='def' >
                <h3>
                    <p id='def'>Defining Beauty</p>
                    <hr/>
                </h3>
            </div>
            <div className='para'>
                <div id='para'>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis labore debitis consequuntur voluptatum! Deleniti, possimus.</p>
                    <br/>
                </div>
            </div>
            <div className='buttons'>
                <button id="b1">READ MORE</button>
                <button id="b2">APPOINTMENT</button>
            </div>
        </div>
        
    </section>
    </>
  )
}
