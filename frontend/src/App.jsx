import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';


function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokesKaPitara')
      .then((response) => {
      setJokes(response.data)
      })
      .catch((err) => {
      console.log(err);
    })
  })

  return (
    <>
      <h1>Welcome To Hariom Bhojnalaya and namaste and Hari Bhog</h1>
      <p>jokesData: {jokes.length}</p>

      {
        jokes.map((joke, index) => {
          return (
            <div key={joke.id}>
              <h3>{joke.author}</h3>
              <p>{joke.jokes}</p>
            </div>
         )
        })
      }
    </>
  )
}

export default App
