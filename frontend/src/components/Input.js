import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GrAdd } from 'react-icons/gr'

export default function Input() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")
    const navigate = useNavigate();

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

    return (
        <div className='newNoteDiv'>
            <input placeholder='New Title' onChange={(e) => setTitle(e.target.value)} value={title} required/>
            <textarea rows="4" placeholder='Note content' onChange={(e) => setContent(e.target.value)} value={content} required />
            <button onClick={handleClick}><GrAdd /></button>
        </div>
    )
}