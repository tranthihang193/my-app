import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ButtonComponent from './components/Button'
import LinkComponent from './components/link'
import CalSum from './components/CalSum'
import ShowTime from './components/ShowTime'

function App() {
  const [count, setCount] = useState(0)
  const userName = "tthang"

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} - {userName} - {3+5}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ButtonComponent></ButtonComponent>
      <LinkComponent></LinkComponent>
      <CalSum></CalSum>
      <ShowTime></ShowTime>
    </>
  )
}

export default App
