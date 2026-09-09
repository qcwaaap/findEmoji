import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [input, setInput] = useState(" ")
  return (
    <>
      <header>
        <h1>Emoji Finder</h1>

        <p className="description">Find the emoji per keywords</p>

        <input placeholder="Placeholder" type="text" />
      </header>

      <main>

      <div className="container">

          <div className="card">
            <p className="emoji">👹</p>
            <p className="title">100</p>
            <p className="keywords">Hundred, points, symbol. won, win, perfect, parties</p>
          </div>
      </div>

      </main>
    </>
  )
}

export default App