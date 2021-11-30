import React, {useEffect} from 'react'
import useHttp from '../hooks/use-http'
import QuoteList from '../components/quotes/QuoteList'
import {getAllQuotes} from '../lib/api'
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound'

const AllQuote = () => {
  const {sendRequest, status, data: loadedQuotes, error} = useHttp(getAllQuotes, true)

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner/>
      </div>
    )
  }

if (error) {
  return <p  className='centered focused'>{error}</p>
}

if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
  return <NoQuotesFound/>
}

  return (
    <div>
      <QuoteList quotes={loadedQuotes} />
    </div>
  )
}

export default AllQuote
