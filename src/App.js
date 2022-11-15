import React from 'react'
import './style.css'
import boxes from './boxes'
import Box from './Box'

function App() {
  const [squares, setSquares] = React.useState(boxes)

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} />
  ))
  return (
    <div className="App">
      <main>{squareElements}</main>
    </div>
  )
}

export default App
