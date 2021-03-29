import React, { useEffect, useState } from 'react';
import CustomerData from './CustomerData/CustomerData';
import ProfilePicture from './ProfilePicture/ProfilePicture';


export default function CustomerProfile() {

    // const [profile, setProfile] = useState({});

// components with props:
    return (
        <div >
            <div >
                {/* profile picture component: */}
                <ProfilePicture imgUrl="/chefDummy.jpeg" customerFirstName="Monika" customerLastName="May" customerCity="Berlin" />
            </div>
            
            <div >
                {/* customer data component: */}
                <CustomerData customerEmail="monika@may.de" customerPassword="123" customerPhone="384756"/>
            </div>
        </div>
    )
}
