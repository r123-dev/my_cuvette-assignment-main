import React, { useContext } from 'react';

import trophy from '../../assets/trophy.png';
import board from '../../assets/board.png';
import check from '../../assets/check.png';
import classes from './QuickStatistics.module.css';
import { statsContext } from '../SkillTest/SkillTest';

export const QuickStatistics = () => {
  const stats = useContext(statsContext);

  return (
    <div className={classes.quick_statistics}>
        <div className={classes.title}>Quick Statistics</div>
        <div className={classes.scores}>
            <div className={classes.rank}>
                <img className={classes.icon} src={trophy} alt='trophy' />
                <div className={classes.score}>
                    <div className={classes.number}>{stats.rank}</div>
                    <div className={classes.score_title}>Your Rank</div>
                </div>
            </div>
            <div className={classes.trophy}>
                <img className={classes.icon} src={board} alt='board' />
                <div className={classes.score}>
                    <div className={classes.number}>{stats.percentile}%</div>
                    <div className={classes.score_title}>Percentile</div>
                </div>
            </div>
            <div className={classes.check}>
                <img className={classes.icon} src={check} alt='check' />
                <div className={classes.score}>
                    <div className={classes.number}>{stats.answers > 9 ? stats.answers: `0${stats.answers}`} / 15</div>
                    <div className={classes.score_title}>Correct Answers</div>
                </div>
            </div>
        </div>
    </div>
  )
}
