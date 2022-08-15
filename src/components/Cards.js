import React from 'react'

export default function Cards(props) {
  return (
        <div className='maindiv'>
            <div className='pic'><img className='pic' src={process.env.PUBLIC_URL+`/images/${props.treatmentinfo.image}`} alt="pic" /></div>
            <div className='descc' >
                <div className='desc'>
                    <h3>
                        <div className='ptitle'><p id='desc'>{props.treatmentinfo.title}</p></div>
                        
                    </h3>
                    <div className='lorem'>
                        <p>{props.treatmentinfo.desc}</p>
                    </div>
                    <div id='rm'><button className='rm'>Read More</button></div>
                </div>
            </div>
        </div>
  )
}
