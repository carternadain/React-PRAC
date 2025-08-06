import React from 'react'
import './App.css'
import Header from './compenents/header'
import Entry from './compenents/Entry'
import Joke from './compenents/jokes'
import Data from './data'
import marker from './assets/marker.png'

function App() {
  const travelInfo = Data.map((newEntry) => {
    return <Entry img={newEntry.img}
                 title={newEntry.title}
                  country={newEntry.country}
                  googleMapsLink={newEntry.googleMapsLink}
                  dates={newEntry.dates}
                  text={newEntry.text}
                  key={newEntry.id} 
                  />
  })

  return (
   
        <main>
        <Header />
        {travelInfo}
      </main>
    
  )
}
 

export default App;