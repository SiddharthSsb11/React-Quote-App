import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Sid', text: 'Money only got Spenders, NO Owners' },
  { id: 'q2', author: 'Siddharth', text: 'It is What it is' }
];

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  )
};

export default AllQuotes;