import React, {useEffect, useState} from 'react';
import { useDispatch } from "react-redux";
import { addSongThunk } from "../store/singleSong";
import Link from "react-router-dom/Link";

const AddSong = (props) => {
    const [bpm, setBpm] = useState(0);
    const [title, setTitle] = useState(``);
    const [song, setSong] = useState(null)

    const dispatch = useDispatch();
    useEffect(() => {
        if(song) {
            dispatch(addSongThunk(song))
        }
    }, [song]);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleBpm = (e) => {
        setBpm(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setSong({
            title: title,
            bpm: bpm,
            bandId: props.match.params.bandId
        })
    }
    return (
        <div className='App'>
            <form onSubmit={onSubmit}>
                <input type="text" value={title} placeholder='Name your song...' onChange={handleTitle}/>
                <input type="number" value={bpm} placeholder='tempo' onChange={handleBpm}/>
                <button className='btn_action pp'>Submit</button>
            </form>
            <Link to={`/bands/${props.match.params.bandId}`}>Back</Link>
        </div>
    );
};

export default AddSong