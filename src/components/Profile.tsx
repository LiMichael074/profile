import React from 'react'
import profile_pic from "../assets/profile_pic.jpg"
import './Porfile.css'

const Profile = () => {
  return (
    <>
        <div className='grid-container'>
            <img src={profile_pic} className='profile_pic item_image'></img>
            <h1 className='item_header'>Shau Ching Michael Li</h1>
            <h2 className='item_header2'>3D Artist | Full-Stack Developer | Game Developer</h2>
            <div className='item_body'>I'm a detail oriented 3D Artist / Full-Stack Developer / Game Developer based in Ontario, Canada.
                I'm experienced with different 3D skills, like Hard Surface Modeling, UV Unwrapping, Procedural Texture Generation, animation and lighting. 
                I'm also proficient in different programing languages, ranging from Python, Java, Javascripets and C. 
                On top of that I also experianced in using different frameworks and softwares, for example React, CSS, Blender, Unreal Engine 5, Unity and Adobe Sutie.
                Besides tech and arts, I'm also a car enthusiast and hope one day I can race on track. None the less, I'll look forward to get to know you and have a chance to work with you. 
            </div>
        </div>    
    </>
  )
}

export default Profile