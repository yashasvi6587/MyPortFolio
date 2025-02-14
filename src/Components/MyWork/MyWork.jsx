import React, { useState } from 'react'
import "./MyWork.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import mywork_data from "../../assets/mywork_data"
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {

  const [visible,setVisisble]=useState(true)

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
            return <a target='_blank' href={work.w_link}><img key={index} src={work.w_img} alt="" /></a> 
        })}
      </div>
      { visible && ( 
        <div onClick={()=>onclick(setVisisble(false))} className="mywork-showmore">
        <p>ShowMore</p>
        <img src={arrow_icon} alt="" />
      </div>
        )}
    </div>
  )
}

export default MyWork
