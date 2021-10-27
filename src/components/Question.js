import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import "../styles/components/question.scss"

const Question = ({title, info}) => {

  const [showInfo, setShowInfo] = useState(false)
  
  return (
      <article className="question">
          <header>
              <button className="btn" onClick={() => setShowInfo(!showInfo)}>
                 {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/> }
              </button>
              <h5>{title}</h5>   
          </header>
          {showInfo && <p>{info}</p>}
          
      </article>
  );
};

export default Question;