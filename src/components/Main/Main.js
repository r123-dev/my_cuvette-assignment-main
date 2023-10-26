import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import { SkillTest } from '../SkillTest/SkillTest'
import classes from './Main.module.css'

export const Main = () => {
  return (
    <div className={classes.main}>
        <Sidebar />
        <SkillTest />
    </div>
  )
}
