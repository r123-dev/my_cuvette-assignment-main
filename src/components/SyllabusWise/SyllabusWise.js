import React from "react";
import ProgressBar from "react-animated-progress-bar";

import classes from "./SyllabusWise.module.css";

export const SyllabusWise = () => {
  return (
    <div className={classes.syllabus_wise}>
      <div className={classes.title}>Syllabus wise Analysis</div>
      <div className={classes.syllabus_scores}>
        <div className={classes.html}>
          <div className={classes.subtitle}>HTML Tools, Forms, History</div>
          <div className={classes.bar}>
            <ProgressBar
              width="300px"
              height="10px"
              rect
              fontColor="#438AF6"
              percentage="80"
              rectBorderRadius="10px"
              trackPathColor="#d4e5ff"
              bgColor="#438AF6"
            />
          </div>
        </div>
        <div className={classes.tags}>
          <div className={classes.subtitle}>Tags &amp; References in HTML</div>
          <div className={classes.bar}>
            <ProgressBar
              width="300px"
              height="10px"
              rect
              fontColor="#FF9142"
              percentage="60"
              rectBorderRadius="10px"
              trackPathColor="#ffe3d0"
              bgColor="#FF9142"
            />
          </div>
        </div>
        <div className={classes.table}>
          <div className={classes.subtitle}>Tables &amp; CSS Basics</div>
          <div className={classes.bar}>
            <ProgressBar
              width="300px"
              height="10px"
              rect
              fontColor="#FB5E5E"
              percentage="24"
              rectBorderRadius="10px"
              trackPathColor="#ffdbdb"
              bgColor="#FB5E5E"
            />
          </div>
        </div>
        <div className={classes.css}>
          <div className={classes.subtitle}>Tables &amp; CSS Basics</div>
          <div className={classes.bar}>
            <ProgressBar
              width="300px"
              height="10px"
              rect
              fontColor="#2EC971"
              percentage="96"
              rectBorderRadius="10px"
              trackPathColor="#d5ffe7"
              bgColor="#2EC971"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
