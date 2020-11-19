import { useState, useEffect } from 'react'
import { getResults } from '../api'

/**
 * Custom hook to make a giphy request given a query & limit
 * and return the results
 * @param {string} query The search query
 * @param {number} limit The number of results to return
 * @returns {import('./api').GiphyResult}
 */
const useGiphy = (query, limit) => {
  // 👇🏾 Move the code making the `getResults` API call
  // 👇🏾 and storing the `results` state out of `Page.js`
  // 👇🏾 here
  //
  //
  // 👇🏾 return the `results`
   // 👇🏾👇🏾 extract to `useGiphy.js` 👇🏾👇🏾
  const [results, setResults] = useState([])

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const apiResults = await getResults({
          query,
          limit,
        })

        setResults(apiResults)
      } catch (err) {
        console.error(err)
      }
    }

    fetchResults()
  }, [query, limit])
  // 👆🏾👆🏾 extract to `useGiphy.js` 👆🏾👆🏾
  return results
}

export default useGiphy
