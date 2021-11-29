import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Jason', text: 'Learn React is fun' },
  { id: 'q2', author: 'Jason', text: 'Learn React issss fun' },
];

const AllQuote = () => {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  )
}

export default AllQuote
