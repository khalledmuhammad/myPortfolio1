import React from 'react'
import "./Skills.css"
const myskills = ["Html" , "css" , "javaScript" , "Reactjs", "NodeJs" , "ExpressJS" , "Mongodb" , "Mongoose" , "bootstrap" , "material-Ui" ]

function Skills() {
  return (
    <div className='skills-section'>
        <div className='skills-inner'>
    {
            myskills.map(e=>{
                return <span  data-aos="fade-in" className='skills'>{e}</span>
            })
        }
      
        </div>
      
    </div>
  )
}

export default Skills