import React, { useContext, useRef } from 'react'

import html from '../../assets/html.png'
import { statsContext } from '../SkillTest/SkillTest';
import classes from './Modal.module.css'

export const Modal = ({ setShowModal }) => {
  let inputRankRef = useRef(null);
  let inputPercentileRef = useRef(null);
  let inputScoreRef = useRef(null);

  const stats = useContext(statsContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    stats.rank = inputRankRef.current.value;
    stats.percentile = inputPercentileRef.current.value;
    stats.answers = inputScoreRef.current.value;
    setShowModal(false);
  }

  const hideModalHandler = (e) => {
    e.preventDefault();
    setShowModal(false);
  }

  return (
    <div className={classes.updateModal}>
      <div className={classes.updateModalOptions}>
        <div className={classes.topBar}>
          <div className={classes.modalHeading}>Update Score</div>
          <img src={html} alt="html" />
        </div>
        <form className={classes.form} onSubmit={onSubmitHandler}>
          <div className={classes.rank}>
            <div className={classes.input_bar}>
              <div className={classes.number}>1</div>
              <span>Update your rank</span>
            </div>
            <input type="number" ref={inputRankRef} min="1" required/>
          </div>
          <div className={classes.percentile}>
            <div className={classes.input_bar}>
              <div className={classes.number}>2</div>
              <span>Update your percentile</span>
            </div>
            <input type="number" ref={inputPercentileRef} max="100" required/>
          </div>
          <div className={classes.score}>
            <div className={classes.input_bar}>
              <div className={classes.number}>3</div>
              <span>Update your current score (out of 15)</span>
            </div>
            <input type="number" ref={inputScoreRef} min="0" max="15" required/>
          </div>
          <div className={classes.buttons}>
            <button className={classes.cancelBtn} onClick={hideModalHandler}>Cancel</button>
            <button type='submit' className={classes.submitBtn}>Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}
