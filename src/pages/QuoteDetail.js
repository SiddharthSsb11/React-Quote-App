import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

/* const DUMMY_QUOTES = [
    { id: 'q1', author: 'Sid', text: 'Money only got Spenders, NO Owners' },
    { id: 'q2', author: 'Siddharth', text: 'It is What it is' }
]; */

const QuoteDetail = () => {
  const match = useRouteMatch();
  //console.log(match, 'MATCH');

  /* const location = useLocation();
    console.log(location, 'LOCATION');
    */
  const params = useParams();
  //console.log(params, 'exact');

  const { quoteId } = params;

  const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    //he way getSingleQuote in api.js is written, loadedQuote will always have at least { id: quoteId}
    //therefore will not be null
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}> </HighlightedQuote>
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
