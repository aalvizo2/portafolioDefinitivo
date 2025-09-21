import React from 'react'
import './about.css'
import Image from 'next/image'
function About(){
    return(
        <>
           <div className="wrapper-about">
               <div className="container-about">
                   <div className="avatar-about">
                       <Image 
                          src="/img/avatar2.png" 
                          alt="second-avatar"
                          width={350}
                          height={350}
                        />
                   </div>
                   <div className="container-text">
                       <h1>About</h1>
                       <p>Hi, I'm Alan Alvizo a developer specializing in React, Node.js, Angular, Nest and Next.js. I love building scalable and efficient applications with great user experiences. Always open to new challenges</p>
                       <p>Let's connect</p>
                   </div>
               </div>
           </div>
        </>
    )
}

export default About