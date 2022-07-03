import React from 'react';
import { useNavigate } from 'react-router-dom';
import classimg from '../../../img/class.png'

const SingleClass = ({ perClass }) => {
    const { _id,subject, room, section } = perClass;
    const navigate = useNavigate();

    return (
        <div
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
            class="card card-compact w-96 bg-base-100 shadow-xl my-3">
            <figure><img src={classimg} alt="class" /></figure>
            <div class="card-body">
                <h2 class="card-title">Subject: {subject}</h2>
                <div>
                    <p className='text-primary font-semibold'>Room No: {room}</p>
                    <p className='text-primary font-semibold'>Section: {section}</p>
                </div>
                <div class="card-actions justify-end">
                    <button onClick={()=>navigate(`/classinfo/${_id}`)}  class="btn btn-primary">Enter in class</button>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;