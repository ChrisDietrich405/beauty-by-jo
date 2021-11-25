import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import "../styles/components/question.scss";

const Question = ({ title, info }) => {
	const [showInfo, setShowInfo] = useState(false);

	return (
		<article className="question">
			<header>
				<button className="btn" onClick={() => setShowInfo(!showInfo)}>
					{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
				<h5>{title}</h5>
			</header>
			{showInfo && (
				<ul>
					{info.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			)}
		</article>
	);
};

export default Question;
