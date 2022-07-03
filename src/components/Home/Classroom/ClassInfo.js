import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FcReading } from 'react-icons/fc';
import useAdmin from '../../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ClassInfo = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user)
    const { id } = useParams();
    const [myClass, setMyClass] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/class/${id}`)
            .then(res => res.json())
            .then(data => setMyClass(data))
    }, [])
    const submitClassWork = e=>{
        e.preventDefault();
        
        const classwork = {
           date : e.target.date.value,
           topic : e.target.topic.value,
           classwork : e.target.classwork.value
        }

        fetch('http://localhost:5000/classwork', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(classwork)
          })
            .then(res => res.json())
            .then(data => {
             alert('successfully updated classwork')
            })   
    }
    return (
        <div>
            <div className='h-1/5 bg-emerald-400 border-b-4 border-primary'>
                <div className='py-20 pl-10'>
                    <h2 className='text-white text-5xl '>Subject: {myClass.subject} <FcReading className='inline text-7xl mt-[-20px]'></FcReading></h2>
                    <marquee className='text-[yellow] text-xl' behavior="" direction="Right">Welcome to  your {myClass.subject}   class. It is room number {myClass.room} and section {myClass.section}</marquee>
                </div>
            </div>
            <div>
                {admin && <div className='mx-32 my-10'>
                    <h2 className='mb-3 text-xl font-semibold'>Update Your Class</h2>
                    <form onSubmit={submitClassWork} className=''>
                        <input name='date' type="date" placeholder="Enter today's Date" class="input input-bordered input-primary w-full" /><br /><br />
                        <input name='topic' type="text" placeholder="Name of the topic" class="input input-bordered input-primary w-full" /><br /><br />
                        <textarea name='classwork' class="textarea textarea-primary w-full" placeholder="Write class work here"></textarea>
                        <input className='btn btn-primary' type="submit" value="Update Class" />
                    </form>
                </div>}
            </div>
        </div>
    );
};

export default ClassInfo;