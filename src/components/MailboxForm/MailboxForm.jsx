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
                <select name="boxSize" id="boxSize" onChange={handleChange}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </main>
    </>
  )
}

export default MailboxForm