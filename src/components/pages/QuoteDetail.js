import React from 'react'
import { useParams } from 'react-router-dom'

const QuoteDetail = () => {

    const params = useParams();
    console.log(params);
    return (
        <section>
            <h2> QuoteDetail</h2>
            <p>{params.quoteId}</p>
        </section>
    )
}

export default QuoteDetail
