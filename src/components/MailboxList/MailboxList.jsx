import { Link } from "react-router"

const MailboxList = ({ mailboxes }) => {
  return (
    <>
        <h1>Mailbox List</h1>
        <ul>
            { mailboxes.map(box => <Link to={`/mailboxes/${box._id}`}><li className="mail-box">Mailbox {box._id}</li></Link>)}
        </ul>

    </>
  )
}

export default MailboxList