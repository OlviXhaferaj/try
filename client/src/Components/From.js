import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
const From = () => {
    const [title, setTitle] =useState('');
    const [genre, setGenre] =useState('');
    const [rate, setRate] =useState('');
    const [image, setImage] =useState('');
    
    const onSubmitHandle = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/movie', {
            title,
            genre,
            rate,
            image
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    return (
        
        <div className='col-6 mx-auto'>
            <form onSubmit={onSubmitHandle}>
                <label className='form-label'>Title</label><br/>
                <input className='form-control' type={'text'} onChange={(e) => setTitle(e.target.value)}/><br/>
                <label className='form-label'>Genre</label>
                <select className='form-control' onChange={(e) => setGenre(e.target.value)}>
                    <option value="Drama">Drama</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Action">Action</option>
                </select><br/>
                <label className='form-label'>Rate</label>
                <select className='form-control' onChange={(e) => setRate(e.target.value)}>
                    <option value="rate1">rate1</option>
                    <option value="rate2">rate2</option>
                    <option value="rate3">rate3</option>
                </select><br/>                
                <label className='form-label'>Image</label><br/>
                <input className='form-control' type={'text'} onChange={(e) => setImage(e.target.value)}/><br/>
                <input className="btn btn-primary" type={'submit'}/>
            </form>
        </div>
    )
}

export default From