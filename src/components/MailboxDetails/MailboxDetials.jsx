import { useParams } from "react-router"

const MailboxDetials = ({ mailboxes, letters }) => {
    const { boxId } = useParams()
    const boxDetials = mailboxes.find(box => box._id === Number(boxId))
    const filterLetters = letters.filter(letter => letter.mailboxId === boxId)

  return (
    <>
        { mailboxes.some(box => box._id === Number(boxId)) ? 
        <>
            <h1>Mailbox {boxDetials._id}</h1>
            <h2>Details</h2>
            <p>Boxholder: {boxDetials.boxOwner}</p>
            <p>Box Size: {boxDetials.boxSize}</p> 
            <h2>Letters</h2>
            { filterLetters.map((letter) => <>
                <p>Dear {letter.recipient},</p>
                <p>{letter.message}</p>
            </>)}
        </> :
        <h2>Mailbox Not Found</h2>
        }
    </>
  )
}

export default MailboxDetials