import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from '@mui/material';

export default function Input() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")
    const [isExpanded, setExpanded] = useState(false)
    const navigate = useNavigate();

    function expand() {
        setExpanded(true);
    }

    function handleClick() {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                title: title,
                content: content,
            })
        };
        if (title !== "" && content !== ""){
            fetch("/home/newnote", requestOptions)
            .then(res => {
                if (res.status === 200) {
                    setTitle(title)
                    setContent(content)
                    navigate('/', { replace: true });
                }
                setTitle("");
                setContent("");
            })
        }
    }

    return (
        <div className='newNoteDiv'>
            <form>
                {isExpanded &&
                    <input placeholder='New Title' onChange={(e) => setTitle(e.target.value)} value={title} required />
                }
                <textarea onClick={expand} rows={isExpanded ? 3 : 1} placeholder={isExpanded ? 'Note content' : 'New note'} onChange={(e) => setContent(e.target.value)} value={content} required />
                {isExpanded &&
                   <Zoom in={isExpanded}>
                        <Fab onClick={handleClick}><AddIcon /></Fab>
                   </Zoom> 
                }
            </form>
        </div>
    )
}