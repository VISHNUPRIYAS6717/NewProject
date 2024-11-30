import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import './App.css'
import Home from './Componets/Home.jsx'
import AddBlog from '.Componets/AddBlog.jsx'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <button className='nav'>
          <Link to="/Home">Home</Link>

          </button>
          <button className='nav'>

          <Link to="/AddBlog">AddBlog</Link>
          </button>
        </nav>
      </div>

      <Routes>
        <Route path='/Home' element={<Home/>} />
      
        <Route path='/AddBlog' element={<AddBlog/>} />
      </Routes>
    </Router>
  )
}

export default App