import { Link } from "react-router"

const MailboxList = ({ mailboxes }) => {
  return (
    <>
        <h2>Mailbox List</h2>
        <ul>
            { mailboxes.map(box => <Link to={`/mailboxes/${box._id}`}><li className="mail-box">Mailbox {box._id}</li></Link>)}
        </ul>

    </>
  )
}

export default MailboxList