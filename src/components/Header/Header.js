import React from 'react'

import classes from './Header.module.css'
import logo from '../../assets/logo.png'
import userDp from '../../assets/dp.png'

const Header = () => {
  return (
    <div className={classes.header}>
        <img className={classes.logo} src={logo} alt="cuvette"/>
        <div className={classes.user}>
            <img className={classes.userDp} src={userDp} alt="user profile"/>
            <span className={classes.username}>Siddharth Jain</span>
        </div>
    </div>
  )
}

export default Header