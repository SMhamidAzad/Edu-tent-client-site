import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const [profile, setProfie] = useState([])

    console.log(user);

    const email = user?.email;
    useEffect(() => {
        const url = `http://localhost:5000/profile?email=${email}`;
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setProfie(data[0]);
            })
    }, [email])

    const handleUpdateProfile = e => {
      e.preventDefault();
      const profile = {
        email: user?.email,
        institution: e.target.institution.value,
        id: e.target.id.value,
        phone: e.target.phone.value,
        address: e.target.address.value,
      }
      console.log(profile);
  
      fetch('http://localhost:5000/profile', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(profile)
      })
        .then(res => res.json())
        .then(data => {
         alert('successfully updated profile')
        })
    }
    return (
        <div className="grid grid-cols-2">
            <div className='mt-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card text-xl">Update your profile</h2>
                        <form onSubmit={handleUpdateProfile}>
                            <input className='input input-bordered w-full mb-1' type="text" name="institution" id="" placeholder='Institution' />

                            <input className='input input-bordered w-full mb-1' type="text" name="id" id="" placeholder='Student Id' />

                            <input className='input input-bordered w-full mb-1' type="text" name="phone" id="" placeholder='Phone' />

                            <input className='input input-bordered w-full mb-1' type="text" name="address" id="" placeholder='Address' />

                            <input className='input input-bordered max-w-xs w-full mb-1 btn btn-primary' type="Submit" value='Update' />
                        </form>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <h2 className='text-center font-bold text-xl'><u>My Profile</u></h2>
                <div class="card-body">
                    <div className='flex justify-center'>
                        <div class="text-center avatar online placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-32">
                                <span class="text-xl">{user.displayName}</span>
                            </div>
                        </div>
                    </div>
                    <div className='ml-5 mt-5'>
                        <p className='font-semibold'>Email: <span className='text-primary'>{user?.email}</span></p>
                        <p className='font-semibold'>Institution: <span className='text-primary'>{profile?.institution}</span></p>
                        <p className='font-semibold'>Student Id: <span className='text-primary'>{profile?.id}</span></p>
                        <p className='font-semibold'>Address: <span className='text-primary'>{profile?.address}</span></p>
                        <p className='font-semibold'>Phone: <span className='text-primary'>{profile?.phone}</span></p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default MyProfile;