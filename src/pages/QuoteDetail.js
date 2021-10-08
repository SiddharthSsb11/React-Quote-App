import React from 'react'
import { useParams, Route } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Sid', text: 'Money only got Spenders, NO Owners' },
    { id: 'q2', author: 'Siddharth', text: 'It is What it is' }
];

const QuoteDetail = () => {

    const params = useParams();
    console.log(params);

    const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
    if(!quote){
        return(<p>No Quote Found</p>)
    }
    return (
        <section>
            <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
            <p>{params.quoteId}</p>
            <Route path = {`/quotes/${params.quoteId}/comments`}>
                <Comments></Comments>
            </Route>
        </section>
    )
}

export default QuoteDetail
