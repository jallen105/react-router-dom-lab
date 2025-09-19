import { useState } from "react"

const MailboxForm = ({ addBox }) => {
    const initialState = {
        boxOwner: '',
        boxSize: ''
    }

    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        addBox(formData)
        setFormData(initialState)
    }

    const handleChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value})
    }

  return (
    <>
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit} >
                <label htmlFor="boxOwner">Boxholder: </label>
                <input type="text" id="boxOwner" name="boxOwner" value={formData.boxOwner} onChange={handleChange} />
                <label htmlFor="boxSize">Box Size: </label>
                <input type="text" id="boxSize" name="boxSize" value={formData.boxSize} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </main>
    </>
  )
}

export default MailboxForm