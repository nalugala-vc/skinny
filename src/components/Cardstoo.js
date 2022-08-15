import React from 'react'

export default function Cards2(props) {
  return (
    <div className='maindiv2'>
            <div className='descc' >
                <div className='desc'>
                    <h3>
                        <div className='ptitle'><p id='desc'>{props.treatmentinfoo.title}</p></div>
                    </h3>
                    <div className='lorem'>
                        <p>{props.treatmentinfoo.desc}</p>
                    </div>
                    <div id='rm'><button className='rm'>Read More</button></div>
                </div>
            </div>
            <div className='pic'><img className='pic' src={process.env.PUBLIC_URL+`/images/${props.treatmentinfoo.image}`} alt="pic" /></div>
        </div>
  )
}
