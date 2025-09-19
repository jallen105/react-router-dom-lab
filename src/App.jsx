import { useState } from 'react'
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import MailboxDetials from './components/MailboxDetails/MailboxDetials';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';

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
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path='/mailboxes' element={<MailboxList/>} />
        <Route path='/new-mailbox' element={<MailboxForm />} />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetials />} /> 
      </Routes>
    </>
  )
};


export default App
