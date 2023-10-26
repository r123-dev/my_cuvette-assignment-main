import React, { useContext } from 'react'
import { PieChart, Pie } from "recharts";
import { statsContext } from '../SkillTest/SkillTest';

import classes from './QuestionWise.module.css'

export const QuestionWise = () => {
    const data02 = [
        { value: 10 }
    ];

    const stats = useContext(statsContext);

  const renderPieChart = (
    <PieChart width={300} height={200}>
        <Pie data={data02} dataKey="value" cx={150} cy={100} startAngle={360} endAngle={0}
        innerRadius={48} outerRadius={70} fill="rgba(67, 138, 246, 0.1)" />
        <Pie data={data02} dataKey="value" cx={150} cy={100} startAngle={360} endAngle={360-(stats.answers/15*360)}
        innerRadius={48} outerRadius={70} fill="#438AF6"/>
    </PieChart>
  );
  return (
    <div className={classes.question_wise}>
        <div>
            <div className={classes.topBar}>
                <div className={classes.title}>
                    Question Analysis
                </div>
                <div className={classes.questions_score}>
                    {stats.answers > 9 ? stats.answers : `0${stats.answers}`} / 15
                </div>
            </div>
            <div className={classes.subtitle}>
                You scored {stats.answers} question correct out of 15. However it
                still needs some improvements   
            </div>
        </div>
        <div className={classes.pieChart}>
            {renderPieChart}
        </div>
    </div>
  )
}
