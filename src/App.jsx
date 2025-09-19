import { useState } from 'react'
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import './App.css'

const App = () => {
  const initialMailbox = {
    _id: 0,
    boxOwner: '',
    boxSize: ''
  }
  const [mailbox, setMailbox] = useState(initialMailbox)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
      </Routes>
    </>
  )
};


export default App
