import React, { useContext } from "react";
import { LineChart, Line, XAxis, CartesianGrid, Legend } from "recharts";
import graphIcon from "../../assets/percentile.png";
import { statsContext } from "../SkillTest/SkillTest";
import classes from "./ComparisonGraph.module.css";

export const ComparisonGraph = () => {
  const stats = useContext(statsContext);

  const data = [
    {
      name: "0%",
      Percentile: 0,
    },
    {
      name: `${stats.percentile}%`,
      Percentile: stats.percentile,
    },
    {
      name: "100%",
      Percentile: 15,
    },
  ];

  const renderLineChart = (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <Legend />
      <Line
        type="monotone"
        dataKey="Percentile"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );

  return (
    <div className={classes.comparison_graph}>
      <div className={classes.graph}>
        <div>
          <div className={classes.title}>Comparison Graph</div>
          <div className={classes.subtitle}>
            You scored {stats.percentile}% percentile which is lower than the
            average percentile 72% of all the engineers who took this assessment
          </div>
        </div>
        <img className={classes.icon} src={graphIcon} alt="rising graph" />
      </div>
      <div className={classes.percentileGraph}>{renderLineChart}</div>
    </div>
  );
};
