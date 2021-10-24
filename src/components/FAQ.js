import { useState } from "react"
import SingleQuestion from './Question';

import "../styles/components/faq.scss"

export default function FAQ({questions}) {

    return (
        <div className="faq-wrapper">
           <main>
               <div className="container">
                   <h2>Frequently Asked Questions</h2>
                   <section className="info">
                       {
                        questions.map((question) => {
                            return (
                                <SingleQuestion key={question.id} {...question} />
                            )
                        })   
                       }
                   </section>
               </div>
           </main>
        </div>
    )
}