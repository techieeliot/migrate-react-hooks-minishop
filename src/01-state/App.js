import React, { Component, /*, useState*/ 
useState} from 'react'
import PropTypes from 'prop-types'

// 👇🏾 Uncomment the function component to convert the class

const App = ({ initialQuery }) => {
  // 👈🏾 define `query` state variable with `useState`
  const [query, setQuery] = useState('')
  const [upper, setUpper] = useState(false)


  return (
    <main>
      <h1>Giphy Search!</h1>

      {/* 👇🏾 migrate UI from class using & updating `query` variable */}
      <input 
        type="search"
        placeholder="Search Giphy"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query &&
      <>
        <p style={upper ? {textTransform: 'uppercase'}: {}}>You are searching for <strong>{query ?  query : ``}</strong> on Giphy</p>
        <button
          type="button"
          className="button"
          onClick={(e) => setUpper(prevUpper => !prevUpper)}
        >
          To {upper ? "Normal" : "Upper"}
        </button>
      </>
      }
    </main>
  )
}

// class App extends Component {
//   static propTypes = {
//     initialQuery: PropTypes.string,
//   }

//   static defaultProps = {
//     initialQuery: '',
//   }

//   constructor(props) {
//     super(props)

//     this.state = {
//       query: props.initialQuery,
//     }
//   }

//   render() {
//     return (
//       <main>
//         <h1>Giphy Search!</h1>

//         <form>
//           <input
//             type="search"
//             placeholder="Search Giphy"
//             value={this.state.query}
//             onChange={(e) => this.setState({ query: e.target.value })}
//           />
//         </form>
//       </main>
//     )
//   }
// }

export default App
