import React from 'react'

import classes from './Sidebar.module.css'
import dash from '../../assets/side bar/dash.png'
import award from '../../assets/side bar/award.png'
import intern from '../../assets/side bar/intern-icon.png';
import { TypesItem } from '../TypesItem/TypesItem';

export const Sidebar = () => {
  const types = [
      { 
        img: dash,
        type: "Dashboard",
        active: false
      },
      { 
        img: award,
        type: "Skill Test",
        active: true
      },
      { 
        img: intern,
        type: "Internships",
        active: false
      },
  ];
  
  return (
    <div className={classes.sidebar}>
        {types.map((type, index) => (<TypesItem key={`${type.type} ${index}`} img={type.img} typeName={type.type} active={type.active}/>))}        
    </div>
  )
}
