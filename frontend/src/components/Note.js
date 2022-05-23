import '../Note.css'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin6Fill } from 'react-icons/ri'

function Note({note}) {

    const navigate = useNavigate();

    function handleClick() {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    noteid: note._id
                })
            };
            fetch("/home/deletenote", requestOptions)
                .then(res => {
                    if (res.status === 200) {
                        navigate('/', { replace: true });
                    }
                });
    }

    return (
        <div className="Note">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={handleClick}><RiDeleteBin6Fill /></button>
        </div>
    )
}

export default Note