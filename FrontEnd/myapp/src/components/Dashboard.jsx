import React from 'react'
import "../component_styles/Dashboard.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Dashboard = () => {
    return (
        <>
        <div className='dashboard'>
            <p className='text text-center'>My Profile <AccountCircleIcon/></p>
        </div>

        {/* profile start */}
            <div id="profile_section">
                <div id="profile_left">
                    <p className="text text-center">Personal Info</p>

                    {/* personal */}

                    <ul id="personal">
                        <li>Name : Goutham Polapally</li>
                        <li>Email : gouthamp0306@gmail.com</li>
                        <li>Instagram : goutham_0306</li>
                        <li>Linked In: goutham Polapally</li>
                    </ul>
                </div>
                <div id="profile_right">
                    <p className="text text-center">Professional Info</p>

                    <ul id="professional">
                        <li>blog: thediybloggers.com</li>
                        <li>Github : github/goutham03062001</li>
                        
                    </ul>
                </div>
            </div>
        {/* profile ends */}
        </>
    )

}

export default Dashboard
