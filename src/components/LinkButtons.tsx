import React from 'react'
import './LinkButtons.css'
import resume from '../assets/Michael Li Resume.pdf';

const LinkButtons = () => {
  return (
    <>
        <div className='grid-container_link'>
            <a className='button item1' href='http://linkedin.com/in/michaellishauching' target='_blank'>LinkedIn</a>
            <a className='button item2' href='https://github.com/LiMichael074' target='_blank'>GitHub</a>
            <a className='button item3' href={resume} target='_blank'>Resume</a>
        </div>
    </>
  )
}

export default LinkButtons