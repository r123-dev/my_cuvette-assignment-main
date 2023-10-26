import React from 'react'

import classes from './TypesItem.module.css'

export const TypesItem = ({img, typeName, active}) => {
  return (
    <div className={active ? `${classes.type} ${classes.active}` : classes.type}>
        <img src={img} alt="sidebar"/>
        <span className={classes.typeName} >{typeName}</span>
    </div>
  )
}
