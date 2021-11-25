import Question from "./Question";

import "../styles/components/faq.scss";

export default function FAQ({ questions }) {
	return (
		<div className="faq-wrapper">
			<main>
				<div className="container">
					<h2>Frequently Asked Questions</h2>
					<section className="info">
						{questions.map((question) => (
							<div>
								<Question key={question.id} {...question} />
								<hr />
							</div>
						))}
					</section>
				</div>
			</main>
		</div>
	);
}
