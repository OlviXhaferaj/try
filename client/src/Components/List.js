import React, {useState, useEffect} from 'react';
import axios from 'axios';

const List = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/movie')
        .then((res) => {
            console.log(res.data);
            setMovies(res.data);
        })
        .catch((err) => {
            console.log(err);
            
        })
    },[])


    return (
        <div>
            {
                movies.map((item, index) => {
                    return(
                        <div key={index}>
                            <p >{item.title}</p>
                            <p>{item.genre}</p>
                            <p>{item.rate}</p>
                            <p>{item.image}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List