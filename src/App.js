import { Route, Switch, Redirect} from 'react-router-dom';
import AllQuotes from './components/pages/AllQuotes'
import QuoteDetail from './components/pages/QuoteDetail';
import NewQuote from './components/pages/NewQuote';


function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/quotes' />
      </Route>
      <Route path="/quotes" exact> 
        <AllQuotes/>  
      </Route>
      <Route path = '/quotes/:quoteId'>
        <QuoteDetail></QuoteDetail>
      </Route>
      <Route path = '/new-quote'>
        <NewQuote/>
      </Route>
    </Switch>
  );
}

export default App;