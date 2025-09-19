import { useParams } from "react-router"

const MailboxDetials = ({ mailboxes }) => {
    const { boxId } = useParams()
    const boxDetials = mailboxes.find(box => box._id === Number(boxId))

  return (
    <>
        <h2>Mailbox {boxDetials._id}</h2>
        <h3>Details</h3>
        <p>Boxholder: {boxDetials.boxOwner}</p>
        <p>Box Size: {boxDetials.boxSize}</p>
    </>
  )
}

export default MailboxDetials