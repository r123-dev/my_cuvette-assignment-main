import React from 'react'

import html from '../../assets/html.png'
import classes from './LeftTopBar.module.css'

export const LeftTopBar = ({setShowModal}) => {
  
  return (
    <div className={classes.LeftTopBar}>
        <img className={classes.html} src={html} alt="html"/>
        <div className={classes.LeftTopBarDes}>
            <div className={classes.title}>HyperText Markup Language</div>
            <div className={classes.subtitle}>
                <span>Questions: 08  </span>
                |
                <span> Duration: 15 mins </span>
                |
                <span> Submitted on 5 June 2022</span>
            </div>
        </div>
        <button onClick={() => setShowModal(true)} className={classes.updateBtn}>
            Update
        </button>
    </div>
  )
}
