import { useState } from "react"
import { useNavigate } from "react-router"

const LetterForm = ({ mailboxes, addLetter }) => {
    const initialData = {
        mailboxId: 0,
        recipient: '',
        message: ''
    }

    const navigate = useNavigate()

    const [formData, setFormData] = useState(initialData)

    const handleSubmit = (e) => {
        e.preventDefault()
        addLetter(formData)
        console.log(formData)
        console.log(mailboxes)
        navigate(`/mailboxes/${formData.mailboxId}`)
        setFormData(initialData)
    }

    const handleChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value })
    }

  return (
    <>
        <h1>New Letter</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="mailboxId">Select a Mailbox</label>
            <select name="mailboxId" id="mailboxId" onChange={handleChange}>
                <option value="">Pick a Mailbox</option>
                { mailboxes.map(box => <option value={box._id} >Mailbox {box._id}</option>) }
            </select>
            <label htmlFor="recipient">Recipient</label>
            <input type="text" name="recipient" id="recipient" value={formData.recipient} onChange={handleChange} />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" onChange={handleChange} value={formData.message} ></textarea>
            <button type="submit">Send</button>
        </form>
    </>
  )
}

export default LetterForm