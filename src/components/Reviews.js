import React from 'react'

export default function Reviews(props) {
  return (
    <div className='revdiv'>
        <img className='revicon' src={process.env.PUBLIC_URL+`/images/${props.review.image}`} alt="pic" />
        <div id='revdiv'>
            <h4>{props.review.name} says</h4>
            <p>{props.review.review}</p>
            <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
            <span>
                {props.review.rating}
            </span>
        </div>
    
    </div>
  )
}
