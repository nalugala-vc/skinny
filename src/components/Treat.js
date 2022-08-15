import React from 'react'

export default function Treat(props) {
  return (
    <div className='maintreat'>
        <div>
            <img className='icon' src={process.env.PUBLIC_URL+`/images/${props.treat.image}`} alt="pic" />
        </div>
        <div>
            <h4 id='titlee'>{props.treat.title}</h4>
            <p id='content'>{props.treat.desc}</p>
        </div>

    </div>
  )
}
