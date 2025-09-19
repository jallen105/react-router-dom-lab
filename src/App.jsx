import { useState } from 'react'
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import MailboxDetials from './components/MailboxDetails/MailboxDetials';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import LetterForm from './components/LetterForm/LetterForm';

// import './App.css'

const App = () => {

  const [mailboxes, setMailboxes] = useState([])
  const [letters, setLetters] = useState([])

  const addBox = (newBoxData) => {
    newBoxData._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newBoxData])
  }

  const addLetter = (newLetterData) => {
    setLetters([...letters, newLetterData])
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox} />} />
        <Route path='/mailboxes/:boxId' element={<MailboxDetials mailboxes={mailboxes} letters={letters} />} /> 
        <Route path='/new-letter' element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />} />
      </Routes>
    </>
  )
};


export default App
