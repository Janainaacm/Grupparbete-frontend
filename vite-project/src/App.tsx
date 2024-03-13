import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './global_components/header'
import Footer from './global_components/footer'
import Home from './pages/home/home'
import RecipePage from './pages/recipes/RecipePage'

// test commitdd
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home></Home>
    <Header></Header>
    <RecipePage></RecipePage>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/144339770?v=4" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more test
      </p>
      <Footer></Footer>
    </>
  )
}

export default App
