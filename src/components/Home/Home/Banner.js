import React from 'react';
import classroom from './../../../img/classroom.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src={classroom} class="max-w-sm" />
                <div>
                    <h1 class="text-5xl font-bold">Online Classroom</h1>
                    <p class="py-6">Edu tent is your all-in-one place for teaching and learning. Our easy-to-use and secure tool helps educators manage, measure, and enrich learning experiences.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;