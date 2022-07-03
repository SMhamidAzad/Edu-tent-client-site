import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const CreateClass = () => {
    const [user] = useAuthState(auth)
    const handleCreateClass = e =>{
        e.preventDefault();

        const createClass = {
            email: user?.email,
            class: e.target.class.value,
            section: e.target.section.value,
            subject: e.target.subject.value,
            room: e.target.room.value,
            classwork: []
        }

        console.log(createClass);

        fetch('http://localhost:5000/class', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(createClass)
        })
            .then(res => res.json())
            .then(data => {
                alert('Successfully create class')
            })

    }
    return (
        <div>
            <h2 className='text-2xl font-bold my-4'>Create A New Class</h2>
            <form onSubmit={handleCreateClass}>
            <input name='class' type="text" placeholder="Class Name" class="input input-bordered w-full max-w-xs mb-2" /><br />
            <input name='section' type="text" placeholder="Section" class="input input-bordered w-full max-w-xs mb-2" /><br />
            <input name='subject' type="text" placeholder="Subject" class="input input-bordered w-full max-w-xs mb-2" /><br />
            <input name='room' type="text" placeholder="Room" class="input input-bordered w-full max-w-xs mb-2" /> <br />
            <input type="submit" value='CREATE' class="btn btn-md btn-primary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default CreateClass;