import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleClass from './SingleClass';

const Classroom = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/class', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setClasses(data);
            })
    }, [])
    return (
        <div >
            <h2 className='text-4xl font-bold text-center mt-4'>My Classroom</h2>

            <div className='grid grid-cols-3 m-8'>
               {
                   classes.map( perClass => <SingleClass
                   key={perClass._id}
                   perClass={perClass}
                   ></SingleClass>)
               }
            </div>
        </div>
    );
};

export default Classroom;