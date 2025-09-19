import { Link } from "react-router"

const MailboxList = ({ mailboxes }) => {
  return (
    <>
        <h2>Mailbox List</h2>
        { mailboxes.map(box => <Link to={`/mailboxes/${box._id}`}>Mailbox {box._id}</Link>)}
    </>
  )
}

export default MailboxList